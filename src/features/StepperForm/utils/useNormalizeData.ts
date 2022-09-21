import { useCallback, useEffect, useRef } from "react";

import data from "../../../demodata.json";

const useNormalizeData = () => {
  const normalizedData = useRef<Record<string, any>>({});

  const normalizeData = useCallback((data: Record<string, any>[]) => {
    return data.reduce((acc, rule) => {
      return {
        ...acc,
        [rule.ruleId]: rule,
      };
    }, {});
  }, []);

  useEffect(() => {
    normalizedData.current = normalizeData(data);
  }, []);

  return {
    data,
    normalizedData: normalizedData.current,
  };
};

export default useNormalizeData;
