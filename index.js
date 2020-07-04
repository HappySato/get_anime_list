const axiosBase = require('axios');

//ShangriLa Anime API V1
//https://qiita.com/AKB428/items/64938febfd4dcf6ea698
const axios = axiosBase.create({
  baseURL: 'http://api.moemoe.tokyo',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});

//2020年第3クールを取得する場合
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
    console.log('ERROR!!: ' + error);
  });

function escape(w) {
    return w.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
}