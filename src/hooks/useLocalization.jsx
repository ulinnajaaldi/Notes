import { useContext } from "react";
import { LocalizationContext } from "../contexts/LocaleContext";
import { datas } from "../utils/datas";

export const useLocalization = (type) => {
  const { localization } = useContext(LocalizationContext);

  const text = datas[`${type}`][localization];

  return text;
};
