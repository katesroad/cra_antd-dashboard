import { extend } from "umi-request";

const API_URL = process.env.API_URL;

const request = extend({
  prefix: API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default request;
