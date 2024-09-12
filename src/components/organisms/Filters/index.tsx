import {
  AdjustDate,
  FilterProperties,
  FilterProps,
  IsDate,
  OptionsItemProps,
  capitalizeFirstLetter,
} from '@/utils';
import { FC, Suspense, useEffect, useMemo, useState } from 'react';
import styles from './Filters.module.scss';

import { Button, ButtonCircle, Icon, Spinners } from '@/components/atoms';
import { useFilterState, useLoadRovers } from '@/hooks';
import {
  AdapterFormatRoverDetails,
  FilterCardDateNumberRange,
  FilterCardDropdown,
  FilterCardSelectOption,
  PopoverButton,
} from '@/components/molecules';
import { RoversDetails } from '@/models';
import { devNull } from 'os';
import { AnimatePresence, motion } from 'framer-motion';
import { SWRProvider } from '@/context';

type FiltersProps = {
  filterValue?: FilterProps;
  onChange?: (value: FilterProps) => void;
  onClose?: () => void;
};

const defaultFilter = {
  rover: 'perseverance',
};

const FiltersWrapper: FC<FiltersProps> = ({
  onChange,
  onClose,
}: FiltersProps) => {
  const { rovers, error, isLoading } = useLoadRovers();
  const [roverOptions, setRoverOptions] = useState<OptionsItemProps[]>([]);
  const { filterState, setFilter } = useFilterState();

  const [filter, setFilterValue] = useState<FilterProperties>(
    filterState != undefined ? filterState : defaultFilter
  );
  const [roverSelected, setRoverSelected] = useState<RoversDetails>();

  useEffect(() => {
    if (rovers && rovers.length > 0) {
      let roversData = rovers.map((rover: RoversDetails) => {
        return {
          label: rover.name,
          id: rover.id,
          value: rover.name.toLowerCase(),
          details: rover,
        };
      });
      setRoverOptions(roversData);
      let roverDetailSelected = rovers.filter(
        (rover: RoversDetails) => rover.name.toLowerCase() == filter.rover
      );
      setRoverSelected(roverDetailSelected[0]);
    }
  }, [isLoading]);

  const handleOnChangeOptions = (value: any) => {
    let roverDetailSelected = rovers.filter(
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
    setFilterValue(filter?.rover as FilterProps);
    setRoverSelected(undefined);
  };

  const handleCloseSection = () => {
    if (!!onClose) {
      onClose();
    }
  };

  const filterIsAvailable = useMemo(() => {
    const filterRequired = ['rover'];
    const filterMutualRequired = ['sol', 'earth_date'];

    const allRequiredFilterExist = filterRequired.every((key) =>
      filter.hasOwnProperty(key)
    );

    const mutualFilterExists = filterMutualRequired.filter((key) =>
      filter.hasOwnProperty(key)
    );

    const validMutualFilterExist = mutualFilterExists.length === 1;

    if (allRequiredFilterExist && validMutualFilterExist) {
      return true;
    } else {
      if (!allRequiredFilterExist || !validMutualFilterExist) {
        return false;
      }
    }
  }, [filter]);

  if (isLoading)
    return (
      <div className='relative top-[30%] h-auto w-[500px]'>
        <Spinners type='loading' />
      </div>
    );
  if (error) return <Spinners type='error' />;
  return (
    <div className={styles.ContainerGeneralFilters}>
      <div className={styles.GroupButtonSection}>
        <PopoverButton
          
          adapterStructure={AdapterFormatRoverDetails(roverOptions)}
        >
          <Icon icon='info' /> Information
        </PopoverButton>
        <ButtonCircle
          onClick={handleCloseSection}
          className={styles.ButtonCircleStyleSectionA}
        >
          <Icon icon='close' className={styles.Iconclose} />
        </ButtonCircle>
      </div>
      <div className={styles.containerFilter}>
        <FilterCardSelectOption
          onChange={handleOnChangeOptions}
          value={filterState.rover}
          listOptions={roverOptions}
          labelFilter='Rovers'
        />

        {roverSelected ? (
          <>
            <FilterCardDateNumberRange
              onChange={handleOnChangeDate}
              labelFilter='Date'
              value={{
                earth_date: filterState?.earth_date,
                sol: filterState?.sol,
              }}
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
              value={filterState?.camera}
              labelFilter='Cameras'
              labelDropdown='Camera'
            />
          </>
        ) : null}
      </div>
      <AnimatePresence>
        {filterIsAvailable ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={styles.ContainerButtons}
          >
            <Button color='blue' onClick={handleOnClickClearFilter}>
              <Icon icon='filter_alt_off' fontSize='medium' />
              Clear Filters
            </Button>
            <Button color='blue' onClick={handleOnClickApplyFilter}>
              Apply Filters
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const Filters: FC<FiltersProps> = ({ onClose }: FiltersProps): JSX.Element => {
  return (
    <SWRProvider keyItem='filters'>
      <FiltersWrapper onClose={onClose} />
    </SWRProvider>
  );
};
export default Filters;
