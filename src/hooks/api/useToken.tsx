import { useAppContext } from "contexts/AppContext";

export default function useToken() {
  const { userData } = useAppContext();

  return userData.token;
}
