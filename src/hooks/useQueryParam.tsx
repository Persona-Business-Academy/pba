'use client';
import { useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ValueType {
  filterBy: string;
  value: string;
}

interface FilterState {
  addQueryParam: (value: ValueType) => void;
  removeQueryParam: (value: ValueType) => void;
}

const useQueryParams = (): FilterState => {
  const searchParams = useSearchParams()!;
  const updatedSearchParams = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const router = useRouter();

  const addQueryParam = useCallback(
    ({ filterBy, value }: ValueType) => {
      const encodedValue = encodeURIComponent(value);

      if (updatedSearchParams.has(filterBy)) {
        const existingValues = updatedSearchParams.get(filterBy);
        const newValue = `${existingValues},${encodedValue}`;
        updatedSearchParams.set(filterBy, newValue);
      } else {
        updatedSearchParams.set(filterBy, encodedValue);
      }

      router.push('?' + updatedSearchParams.toString());
    },
    [router, updatedSearchParams],
  );

  const removeQueryParam = useCallback(
    ({ filterBy, value }: ValueType) => {
      if (updatedSearchParams.has(filterBy)) {
        const currentValues = updatedSearchParams.get(filterBy);

        if (currentValues) {
          const valuesArray = currentValues.split(',');

          const filteredValues = valuesArray.filter(val => val !== value);

          if (filteredValues.length > 0) {
            updatedSearchParams.set(filterBy, filteredValues.join(','));
          } else {
            updatedSearchParams.delete(filterBy);
          }

          router.push('?' + updatedSearchParams.toString());
        }
      }
    },
    [router, updatedSearchParams],
  );

  return {
    addQueryParam,
    removeQueryParam,
  };
};

export default useQueryParams;
