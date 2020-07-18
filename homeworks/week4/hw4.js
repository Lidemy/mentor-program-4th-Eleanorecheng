// 拿到「最受歡迎的遊戲列表（Get Top Games）」，並依序印出目前觀看人數跟遊戲名稱。
// 申請application取得clientID : 1u1jnbqu97z5f9vl8jy0z6dcfsifyv
// request header 中帶上 ClientID 跟另一個參數 Accept，
// 值是：application/vnd.twitchtv.v5+json。

/* eslint-disable prefer-arrow-callback
eslint-disable func-names
eslint-disable comma-dangle
eslint-disable prefer-arrow-callback
*/

/* eslint no-unused-vars: 0 */
/* eslint consistent-return: 0 */
const request = require('request');

const baseURL = 'https://api.twitch.tv/kraken';
const clientID = '1u1jnbqu97z5f9vl8jy0z6dcfsifyv';

request(
  {
    method: 'GET',
    url: `${baseURL}/games/top`,
    headers: {
      'Client-ID': clientID,
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  },
  (err, response, body) => {
    if (err) {
      console.log('Fetch Fail');
    }
    if (response.statusCode >= 200 && response.statusCode < 300) {
      try {
        const json = JSON.parse(body);
        const data = json.top;
        for (let i = 0; i < data.length; i += 1) {
          console.log(`${data[i].viewers} ${data[i].game.name}`);
        }
      } catch (error) {
        return console.log(error);
      }
    }
  },
);
