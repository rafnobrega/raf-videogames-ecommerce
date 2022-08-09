import axios from "axios";

const BASE_URL = "http://localhost:5003/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWFmNTUzZjc2YTliMjQxZjM0ZDkwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTU5MTM0NCwiZXhwIjoxNjU5NzY0MTQ0fQ.kVEK9m16x8DQWbsDiBeJlok_Lmfhx_Xg_jjgou44r9w";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
