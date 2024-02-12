import { useQuery, useMutation } from 'react-query';
import { supabase } from '@lib/utils/supabase';
import { TypeUpdateData } from '@/interface';

const dataHandler = async ({
  methodName,
  tableName,
  selectValue,
  valueName,
  updateValue,
  successHandler,
  errorHandler,
  primaryKey,
}: TypeUpdateData) => {
  const supaData = supabase.from(tableName);
  try {
    if (methodName === 'UPDATE') {
      const { data } = await supaData.update(updateValue).match({ primaryKey });

      successHandler?.(data);
      return valueName ? (data ?? [])[valueName] : data;
    } else if (methodName === 'POST') {
      const { data } = await supaData.insert([updateValue]);
      successHandler?.(data);
      return valueName ? (data ?? [])[valueName] : data;
    }
  } catch (error) {
    errorHandler?.(error);
  }
};
export const useUpdateData = () => {
  return useMutation(dataHandler);
};
