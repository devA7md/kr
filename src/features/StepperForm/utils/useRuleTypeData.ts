import { useRef } from "react";

import {ERuleType, RuleTypeKey} from "../types";
import baseSvg from "../../../assets/base.svg";
import complementSvg from "../../../assets/complement.svg";
import unionSvg from "../../../assets/union.svg";
import intersectionSvg from "../../../assets/intersection.svg";
import differenceSvg from "../../../assets/difference.svg";

const useRuleTypeData = () => {
  const baseData = useRef<Record<RuleTypeKey, any>>({
    [ERuleType.base]: {
      title: "Base",
      icon: baseSvg,
    },
    [ERuleType.complement]: {
      title: "Complement",
      icon: complementSvg,
    },
    [ERuleType.union]: {
      title: "Union",
      icon: unionSvg,
    },
    [ERuleType.intersection]: {
      title: "Intersection",
      icon: intersectionSvg,
    },
    [ERuleType.difference]: {
      title: "Difference",
      icon: differenceSvg,
    },
  });

  return baseData.current;
};

export default useRuleTypeData;
