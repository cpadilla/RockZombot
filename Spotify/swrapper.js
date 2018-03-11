const request = require('request-promise')

module.exports = {
  playSong: function getSong(song){
    if(song.indexOf(' ') >= 0){
      song.replace(" ", "%20")
    }
    var options = {
      url: `https://api.spotify.com/v1/search?q=${song}&type=track&market=us&limit=1`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    return promise = new Promise(function (resolve, reject){
      request(options).then(function(data){
        var trackInfo = JSON.parse(data);
        resolve(trackInfo.tracks.items[0].external_urls.spotify);
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
