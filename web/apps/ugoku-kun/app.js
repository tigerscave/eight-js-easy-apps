const protect = require('static-auth');
const safeCompare = require('safe-compare');

const USER_NAME = process.env.USER_NAME || 'admin'; // プロジェクトの環境変数を設定していた場合はそちらを適用させる
const PASSWORD = process.env.PASSWORD || 'admin';

const app = protect(
  '/',
  (username, password) => {
    return safeCompare(username, USER_NAME) && safeCompare(password, PASSWORD)
  },
  {
    directory: `${ __dirname }/ugoku-kun`,
    onAuthFailed: (res) => {
      res.end('Authentication failed.')
    },
  }
);

module.exports = app;