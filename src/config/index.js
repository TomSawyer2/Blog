export const TIMEOUT = 5000;
export const CONTENT_TYPE = "application/json";

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://127.0.0.1:4000/api";
  // dev
} else {
  baseURL = "http://175.24.30.102:4000/api";
  // build
}
export default baseURL;

const URL = {
  register: "/register",
  login: "/login",
  getAllArticle: "/getAllArticle",
  getArticleById: "/getArticleById",
  updateArticle: "/updateArticle",
  deleteArticle: "/deleteArticle",
  addArticle: "/addArticle",
  getAllTags: "/getAllTags",
  addTag: "/addTag",
};

const ERROR_CODE = {
  USER_EXIST: 1, // 用户已存在
  PASSWORD_ERR: 2, // 账号密码错误
  ACCOUNT_EMP: 3, // 账号不存在
  ADD_ERR: 4, // 文章添加失败
  DEL_ARTICLE_EMP: 5, // 删除的文章不存在
  DEL_ARTICLE_ERR: 6, // 删除文章失败
  QUERY_ERR: 7, // 查询失败
  UPDATE_ARTICLE_EMP: 8, // 查询的文章不存在
  UPDATE_ERR: 9, // 更新失败
  TAG_ERR: 10, // tag添加失败
  TAG_EXIST: 11, // tag已存在
  GET_TAG_ERR: 12, // 获取所有tag失败
  QUERY_ARTICLE_ERR: 13, // 查询文章不存在
};

export { URL, ERROR_CODE };
