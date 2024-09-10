import { OptionsItemProps, uuidv4 } from '@/utils';
import React, { Fragment } from 'react';

const AdapterFormatRoverDetails = (data: OptionsItemProps[]) => {
  return (
    <div className='px-6'>
      {data && data.length
        ? data.map((item: OptionsItemProps) => (
            <div className='my-4' key={uuidv4()}>
              <h1 className='text-xl font-bold'> {item.details?.name}</h1>
              <ul className='mb-5 mt-2'>
                <li>
                  <strong>🚀 Launch Date: </strong>
                  {item.details?.launchDate}
                </li>
                <li>
                  <strong>Landing Date: </strong>
                  {item.details?.landingDate}
                </li>
                <li>
                  <strong>Status: </strong>
                  {item.details?.status}
                </li>
                <li>
                  <strong>Max Sol Date: </strong>
                  {item.details?.maxSol}
                </li>
                <li>
                  <strong>Max Earth Date: </strong>
                  {item.details?.maxDateEarth}
                </li>
              </ul>
            </div>
          ))
        : null}
    </div>
  );
};

export default AdapterFormatRoverDetails;
