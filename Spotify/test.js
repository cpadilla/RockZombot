const spot = require('./swrapper.js')

spot.playSong("dust in the wind").then(function (e){console.log(e)}).catch(function (error){console.log(error)});
