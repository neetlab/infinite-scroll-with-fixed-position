import React, { useState, useCallback } from "react";

export const useNumber = (
  defaultValue?: number
): [number, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, changeValue] = useState<number>(defaultValue || 0);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeValue(Number(e.currentTarget.value));
    },
    [changeValue]
  );

  return [value, handleChange];
};
