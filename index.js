const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: 'http://api.moemoe.tokyo', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});

axios.get('/anime/v1/master/2020/3')
  .then(function(response) {
    let title_list = [];
    Object.keys(response.data).forEach((obj) => {
      title_list.push(escape(response.data[obj].title));
      title_list.push(escape(response.data[obj].title_short1));
    });
    console.log(title_list.join('|'));
  })
  .catch(function(error) {
    console.log('ERROR!! occurred in Backend:' + error);
  });

function escape(w) {
    return w.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
}