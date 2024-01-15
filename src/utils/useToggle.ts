import { useCallback, useState } from "react";

export const useToogle = (
  defaultIsActive: boolean = false
): [boolean, () => void] => {
  const [isActive, setIsActive] = useState(defaultIsActive);
  const toggle = useCallback(() => setIsActive((prevValue) => !prevValue), []);
  return [isActive, toggle];
};
