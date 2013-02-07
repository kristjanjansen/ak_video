$(function() {

var keys = {
  72  : {
    'video': 'http://www.youtube.com/watch?v=oHg5SJYRHA0',
    'start': 4
  },
  74  : {
    'video': 'http://www.youtube.com/watch?v=yBwD4iYcWC4',
    'start': 84
  }
}

for (var key in keys) {
  keys[key].popcorn = new Popcorn.youtube('#video', keys[key].video)
};


var socket = io.connect();

socket.on('message', function (data) {
  if (keys[data.key]) {
    if (data.vol > 0) {
  //    keys[data.key].popcorn.unmute();
      keys[data.key].popcorn.currentTime(keys[data.key].start);
  //    keys[data.key].popcorn.play();
    } else {
  //    keys[data.key].popcorn.mute();
      keys[data.key].popcorn.pause();
    }
  }
});


})
