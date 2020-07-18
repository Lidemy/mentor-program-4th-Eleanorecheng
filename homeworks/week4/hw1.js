// 來自秋秋鞋的任務，列出前十本書籍的 id 以及書名
/* eslint consistent-return: 0 */
const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10', (err, response, body) => {
    if (err) {
      return console.log('Fetch Failed.');
    }
    let json = '';
    try {
      json = JSON.parse(body); // JSON格式的字串
    } catch (error) {
      return console.log(error);
    }
    for (let i = 0; i <= json.length - 1; i += 1) {
      console.log(`${json[i].id} ${json[i].name}`);
    }
  },
);
