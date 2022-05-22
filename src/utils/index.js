import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

//在一个函数里，改变传入对象本身时不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  //每次在value之后，设置一个定时器
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //每次在上一个useEffect处理完后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
