import { request } from "@/axios/request/http.js";
let url1 = "/drgsgateway";//单病种前缀
let url2 = "/eventgateway";//不良事件前缀
export const AnnouncementHelp = {
  //首页
  //今日上报病种
  findHomeDataStatistics(data) {
    return request.postForm(`${url1}/findHomeDataStatistics`, data);
  },
  //不良事件
  adverseEventCount(data) {
    return request.postForm(`${url2}/adverseEventHomepageDataCount`, data);
  },
  //平台公告
  findAllSystemAnnouncement(data) {
    return request.postForm(`${url1}/findAllSystemAnnouncement`, data);
  },
  //查找单条平台公告
  findOneSystemAnnouncement(data) {
    return request.postForm(`${url1}/findSystemByAnnouncementId`, data);
  },
  //修改平台公告
  updateAnce(data) {
    return request.postForm(`${url1}/updateSystemAnnouncement`, data);
  },
  //添加系统公告
  addSystemAnce(data) {
    return request.postForm(`${url1}/insertSystemAnnouncement`, data);
  },
  //删除系统公告
  deleteSysAnce(data) {
    return request.postForm(`${url1}/deleteSystemAnnouncement`, data);
  },
  //单病种公告
  findDrgsAnce(data) {
    return request.postForm(`${url1}/findAllDrgsAnnouncement`, data);
  },
  //查询单病种前言
  findfindPreface() {
    return request.postForm(`${url1}/findPreface`);
  },
  //更新单病种前言
  updatePerface(data) {
    return request.postForm(`${url1}/updatePreface`, data);
  },
  //添加单病种公告
  addDrgsAnce(data) {
    return request.postForm(`${url1}/insertDrgsAnnouncement`, data);
  },
  //更新单病种公告
  updateDrgsAnce(data) {
    return request.postForm(`${url1}/updateDrgsAnnouncement`, data);
  },
  //查找单条单病种公告
  findByAnceType(data) {
    return request.postForm(`${url1}/findByAnnouncementType`, data);
  },
  //查询不良事件前言
  findEventPreface() {
    return request.postForm(`${url2}/findPreface`);
  },
  //更新不良事件前言
  updateEventPerface(data) {
    return request.postForm(`${url2}/upsertpreface`, data);
  },
  //不良事件公告
  findEventAnnounce(data) {
    return request.postForm(`${url2}/findEventAnnounce`, data);
  },
  //查询不良事件单条公告
  findEventByAnceType(data) {
    return request.postForm(`${url2}/findEventAnnounceByType`, data);
  },
  //添加/更新不良事件公告
  updateEventAnnounce(data) {
    return request.postForm(`${url2}/upsertAnnounce`, data);
  },
  //发送邮件
  sendEmail(data) {
    return request.postForm(`${url1}/sendMail`, data);
  },
  //邮件列表
  emailList(data) {
    return request.postForm(`${url1}/findEmailList`, data);
  },
  //PDF文件上传
  uploadPdf(data) {
    return request.post(`${url1}/uploadPdf`, data);
  },
  //帮助文档
  AllHelpDocumentation(data) {
    return request.postForm(`${url1}/findPageAllHelpDocumentation`, data);
  },
  //查找单条帮助文档
  findOneHelpDocut(data) {
    return request.postForm(`${url1}/findHelpDocumentationById`, data);
  },
  //添加帮助文档
  addHelpDoc(data) {
    return request.postForm(`${url1}/insertHelpDocumentation`, data);
  },
  //修改帮助文档
  updateHelpDoc(data) {
    return request.postForm(`${url1}/updateHelpDocumentation`, data);
  },
  //删除帮助文档
  deleteHelpDoc(data) {
    return request.postForm(`${url1}/deleteHelpDocumentation`, data);
  },
  //单病种
  findSingleDisease(data) {
    return request.postForm(`${url1}/findPageAllDrgsLearnGarden`, data);
  },
  //单病种修改
  updateSingleDisease(data) {
    return request.postForm(`${url1}/updateDrgsLearnGarden`, data);
  },
  //单病种单条查询
  findOneSingleDisease(data) {
    return request.postForm(`${url1}/findDrgsLearnGardenById`, data);
  },
  //单病种添加
  addSingleDisease(data) {
    return request.postForm(`${url1}/insertDrgsLearnGarden`, data);
  },
  //单病种删除
  deleteSingleDisease(data) {
    return request.postForm(`${url1}/deleteDrgsLearnGarden`, data);
  },
  //不良事件
  findWeChatArticle(data) {
    return request.postForm(`${url2}/findWeChatArticle`, data);
  },
  // 邮件保存草稿箱
  saveEmailDraftBox(data) {
    return request.postForm(`${url1}/saveEmailDraftBox`, data);
  },
  // 邮箱草稿箱列表
  findEmailDraftBoxList(data) {
    return request.get(`${url1}/findEmailDraftBoxList`, data);
  },
  // 删除邮件根据邮件id
  deleteEmailById(data) {
    return request.postForm(`${url1}/deleteEmailById`, data);
  },
  //邮件上传附件
  uploadMailAttachment(data) {
    return request.post(`${url1}/uploadMailAttachment`, data);
  }
};
