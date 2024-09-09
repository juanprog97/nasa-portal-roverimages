import useSWR from 'swr';
import { URLBASEROVER } from '@/utils';
import { fetchRoverDetails } from '@/services';
import { roversDetailsAdapter } from '@/adapters/rovers.adapter';

const useLoadRovers = () => {
  const fetcher = async (url: string) => {
    const response = await fetchRoverDetails(url).call;
    return response.data.rovers;
  };

  const { data, error, isLoading } = useSWR(URLBASEROVER, fetcher);

  const rovers = roversDetailsAdapter(data);
  return {
    rovers,
    error,
    isLoading,
  };
};

export default useLoadRovers;
