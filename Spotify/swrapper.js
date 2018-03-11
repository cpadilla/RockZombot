const request = require('request-promise')

module.exports = {
  getSong: function getSong(song){
    var options = {
      url: `https://api.spotify.com/v1/search?q=${song}&type=track&market=us&limit=5`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    return promise = new Promise(function (resolve, reject){
      //request.setHeaders('Authorization', `Bearer ${token}`)
      request(options).then(function(data){
        resolve(data);
      }).catch(function(error){
        reject(error);
      });
    });
  },
  nextSong: function nextSong(){
    var options = {
      url: "https://api.spotify.com/v1/me/player/next",
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    return promise = new Promise(function(resolve, reject){
      request(options).then(function(data){resolve(data)}).catch(function(error){reject(error)});
    });
  }
}
