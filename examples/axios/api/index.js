import { DataManage } from "./data-manage.js";
import { request } from "@/axios/request/http.js";
let drgs = "/drgsgateway";
export const login = {
  // 单病种登录
  login(data) {
    return request.postForm(`${drgs}/initLogin`, data);
  }
};
export const api = {
  ...login,
  ...DataManage
};
