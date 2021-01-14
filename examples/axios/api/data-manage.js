import { request } from "@/axios/request/http.js";
let url1 = "/drgsgateway";
export const AccountManage = {
  // 获取系统版本信息
  getSysnoticeList(data) {
    return request.postForm(`${url1}/sysnotice/list`, data);
  },
  // 版本详情
  getSysnoticeDtl(data) {
    return request.get(`${url1}/sysnotice/getById`, data);
  }
};
