import { useEffect, useState } from "react";

const useDebounce = (debounceTime = 500) => {
  const [tempValue, setTempValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearchValue(tempValue), debounceTime);
    return () => clearTimeout(timeOutId);
  }, [tempValue]);

  return {
    tempValue,
    searchValue,
    setTempValue,
  };
};

export default useDebounce;
