import axios from 'axios';

export const fetchRoverDetails = (url: string) => {
  const urlformated = `${url}api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`;
  return {
    call: axios.get<any>(urlformated),
  };
};
