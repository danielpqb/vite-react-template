import * as AlertTypes from "../components/common/Alert/types";
import * as CouterTypes from "../components/common/Counter/types";

export type AppStates = {
  alert: AlertTypes.Alert;
  setAlert: React.Dispatch<React.SetStateAction<Partial<AlertTypes.Alert>>>;
  counter: CouterTypes.Counter;
  setCounter: React.Dispatch<React.SetStateAction<Partial<CouterTypes.Counter>>>;
  reloadApp: number;
  setReloadApp: React.Dispatch<React.SetStateAction<number>>;
};
