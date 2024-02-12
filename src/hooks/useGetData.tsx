import { useQuery } from 'react-query';
import { supabase } from '@lib/utils/supabase';
import { TypeFetchData } from '@/interface';

const fetchData = async ({
  tableName,
  selectValue,
  successHandler,
  errorHandler,
  params,
  valueName,
}: TypeFetchData) => {
  const { name, value } = params || {};

  try {
    const { data } = await supabase
      .from(tableName)
      .select(selectValue ?? '*')
      .eq(name ?? '', value);

    successHandler?.(data);

    return valueName ? (data ?? [])[valueName] : data;
  } catch (error) {
    errorHandler?.(error);
  }
};

export const useGetData = ({
  tableName,
  selectValue,
  successHandler,
  errorHandler,
  params,
  valueName,
}: TypeFetchData) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getData', tableName],
    queryFn: () =>
      fetchData({
        tableName,
        selectValue,
        successHandler,
        errorHandler,
        params,
        valueName,
      }),
  });

  return { data, isLoading };
};
