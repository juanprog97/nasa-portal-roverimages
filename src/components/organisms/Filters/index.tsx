import {
  AdjustDate,
  FilterProperties,
  IsDate,
  OptionsItemProps,
  capitalizeFirstLetter,
} from '@/utils';
import { FC, useEffect, useState } from 'react';
import styles from './Filters.module.scss';

import { Button, Icon, Spinners } from '@/components/atoms';
import useSWR from 'swr';
import { useFilterState, useLoadRovers } from '@/hooks';
import {
  FilterCardDateNumberRange,
  FilterCardDropdown,
  FilterCardSelectOption,
} from '@/components/molecules';
import { RoversDetails } from '@/models';
import { devNull } from 'os';

type FiltersProps = {
  filterValue?: FilterProperties;
  onChange?: (value: FilterProperties) => void;
};

const defaultFilter = {
  rover: 'perseverance',
};

const Filters: FC<FiltersProps> = ({ filterValue, onChange }: FiltersProps) => {
  const [filter, setFilterValue] = useState<FilterProperties>(
    filterValue != undefined ? filterValue : defaultFilter
  );
  const { rovers, error, isLoading } = useLoadRovers();
  const [roverOptions, setRoverOptions] = useState<OptionsItemProps[]>([]);
  const [roverSelected, setRoverSelected] = useState<RoversDetails>();

  const { filterState, setFilter } = useFilterState();

  useEffect(() => {
    if (!!rovers) {
      let roversData = rovers.map((rover: RoversDetails) => {
        const [cameras, id, name, ...roversDetails] = rovers;
        return {
          label: rover.name,
          id: rover.id,
          value: rover.name.toLowerCase(),
          details: roversDetails,
        };
      });
      setRoverOptions(roversData);
    }
  }, [isLoading]);

  const handleOnChangeOptions = (value: any) => {
    const roverDetailSelected = rovers.filter(
      (rover: RoversDetails) => rover.name.toLowerCase() == value
    );
    setRoverSelected(roverDetailSelected[0]);
    setFilterValue({
      ...filter,
      rover: roverDetailSelected[0].name.toLowerCase(),
    });
  };
  const handleOnChangeDate = (date: string) => {
    const dateDetected = IsDate(date) ? { earth_date: date } : { sol: date };
    const { sol, earth_date, ...filterRemove } = filter;
    const filterAdded = { ...filterRemove, ...dateDetected };
    setFilterValue(filterAdded);
  };
  const handleOnChangeCamera = (camera: string) => {
    if (camera == 'All') {
      const { camera, ...cameraRemovedFilter } = filter;
      setFilterValue(cameraRemovedFilter);
    } else {
      setFilterValue({ ...filter, camera: camera });
    }
  };

  const handleOnClickApplyFilter = () => {
    setFilter(filter);
  };

  const handleOnClickClearFilter = () => {
    setFilterValue({});
    setRoverSelected(undefined);
  };

  if (isLoading) return <Spinners type='loading' />;
  if (error) return <Spinners type='error' />;
  return (
    <div className={styles.ContainerGeneralFilters}>
      <FilterCardSelectOption
        onChange={handleOnChangeOptions}
        listOptions={roverOptions}
        labelFilter='Rovers'
      />
      {roverSelected ? (
        <>
          <FilterCardDateNumberRange
            onChange={handleOnChangeDate}
            labelFilter='Date'
            solDateRange={{
              min: '1',
              max: roverSelected.maxSol.toString(),
            }}
            earthDateRange={{
              min: AdjustDate(roverSelected.landingDate, 1, 'days'),
              max: roverSelected.maxDateEarth,
            }}
          />

          <FilterCardDropdown
            onChange={handleOnChangeCamera}
            data={roverSelected.cameras}
            labelFilter='Cameras'
            labelDropdown='Camera'
          />
        </>
      ) : null}

      <div className={styles.ContainerButtons}>
        <Button color='blue' onClick={handleOnClickApplyFilter}>
          Apply Filters
        </Button>
        <Button color='blue' onClick={handleOnClickClearFilter}>
          <Icon icon='filter_alt_off' />
          Clear Filters
        </Button>
        {JSON.stringify(filter)}
      </div>
    </div>
  );
};

export default Filters;
