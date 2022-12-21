import { useAlertOnRequestError } from "components/common/Alert/hooks/useAlertOnRequestError";
import { Error, Response } from "helpers/request";
import promiseRetry from "promise-retry";

export async function useRequestRetry(
  promiseToRetry: Promise<any>,
  retryOptions?: {
    //DEFAULT {retries: 10, factor: 2, minTimeout: 1000, maxTimeout: Infinity}
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
  }
) {
  await promiseRetry((retry, number) => {
    console.log("retry", number);
    return promiseToRetry.catch(retry);
  }, retryOptions).then((res: Response) => {
    console.log("success");
    delete res.data.message;
    return { data: res.data, success: false };
  }),
  (error: Error) => {
    console.log("erro");
    useAlertOnRequestError(error);
    return { error: error, success: false };
  };
}
