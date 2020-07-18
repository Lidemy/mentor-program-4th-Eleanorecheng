// 印出國家、首都、貨幣、國碼
/* eslint consistent-return: 0 */

const request = require('request');
const process = require('process');

const baseURL = 'https://restcountries.eu/rest/v2/name';
const partialName = process.argv[2];

if (!partialName) {
  console.log('請出入國家名稱');
}

request(`${baseURL}/${partialName}`, (err, response, body) => {
  if (err) {
    return console.log('Fetch Fail');
  }

  let json = '';

  try {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      json = JSON.parse(body);

      for (let i = 0; i <= json.length - 1; i += 1) {
        console.log('====================');
        console.log('國家:', json[i].name);
        console.log('首都:', json[i].capital);
        console.log('貨幣:', json[i].currencies[0].code);
        console.log('國碼:', json[i].callingCodes);
      }
    } else if (json.status === '404') {
      console.log('找不到國家資訊');
    }
  } catch (error) {
    return console.log(error);
  }
});
