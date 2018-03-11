const spot = require('./swrapper.js')

spot.nextSong().then(function (e){console.log(e)}).catch(function (error){console.log(error)});
