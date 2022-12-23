import { get, post } from "../helpers/request";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function getUserDataByToken(token: string) {
  return get(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function postSignIn(body: { email: string; password: string }) {
  return post(`${BASE_URL}/auth`, body);
}

export function postSignUp(body: { name: string; email: string; password: string }) {
  return post(`${BASE_URL}/users/sign-up`, body);
}
