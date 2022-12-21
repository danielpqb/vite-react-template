import getUserDataByToken from "services/user-services";
import useAsync from "../useAsync";
import useToken from "../useToken";

export default function useUserData() {
  const token = useToken();

  const {
    data: userData,
    loading: userDataLoading,
    error: userDataError,
    act: getUserData,
  } = useAsync(() => getUserDataByToken(token));

  return {
    userData,
    userDataLoading,
    userDataError,
    getUserData,
  };
}
