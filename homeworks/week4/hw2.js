// 顯示前 20 本書的資料、刪除、新增以及修改書本
// try catch
// status code

/* eslint no-unused-vars: 0 */
/* eslint consistent-return: 0 */

const request = require('request');
const process = require('process');

const baseURL = 'https://lidemy-book-store.herokuapp.com/books/';
const requestType = process.argv[2];
const parameter = process.argv[3];

// 印出前20本id以及書名
function list() {
  request(`${baseURL}/books?_limit=20`, (err, response, body) => {
    if (err) {
      return console.log('Fetch Fail', err);
    }

    let json;

    try {
      json = JSON.parse(body); // JSON格式的字串
    } catch (error) {
      return console.log('Get Fail', error);
    }

    for (let i = 0; i <= json.length - 1; i += 1) {
      console.log(`${json[i].id} ${json[i].name}`);
    }
  });
}

// 印出id為1的書籍
function printBook(id) {
  request(`${baseURL}/books/${id}`, (err, response, body) => {
    if (err) {
      console.log('Fetch Fail', err);
    }
    try {
      const json = JSON.parse(body); // JSON格式的字串
      console.log(`${json.id} ${json.name}`);
    } catch (error) {
      return console.log('Print Fail', error);
    }
  });
}

// 刪除 id 為 1 的書籍
function deleteBook(id) {
  request.delete(`${baseURL}/books/${id}`, (err, response, body) => {
    try {
      console.log('Delete Succeed');
    } catch (error) {
      return console.log('Delete Fail', error);
    }
  });
}

// 新增一本名為 I love coding 的書
function createBook(para) {
  request.post({
    url: `${baseURL}/books`,
    form: {
      para,
    },
  }, (err, response, body) => {
    try {
      console.log('Fetch Succeed');
    } catch (error) {
      return console.log('Fetch Fail', error);
    }
  });
}
// 更新 id 為 1 的書名為 new name
function updateBook(id, para) {
  request.patch({
    url: `${baseURL}/books/${id}`,
    form: {
      para,
    },
  }, (err, response, body) => {
    try {
      console.log('Update Succeed');
    } catch (error) {
      console.log('Update Fail', error);
      // return;
    }
  });
}

switch (requestType) {
  case 'list':
    list();
    break;
  case 'read':
    printBook(parameter);
    break;
  case 'delete':
    deleteBook(parameter);
    break;
  case 'create':
    createBook(parameter);
    break;
  case 'update':
    updateBook(parameter, process.argv[4]);
    break;
  default:
    console.log('請輸入以下指令: list, read, delete, create and update');
}
