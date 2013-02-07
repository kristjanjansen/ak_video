$(function() {

var keys = {
  72  : {
    'video': 'http://www.youtube.com/watch?v=oHg5SJYRHA0',
    'start': 4,
    'stop': 10
  },
  74  : {
    'video': 'http://www.youtube.com/watch?v=yBwD4iYcWC4',
    'start': 84,
    'stop': 87
  }
}

for (var key in keys) {
  keys[key].popcorn = new Popcorn.youtube('#video', keys[key].video).cue(keys[key].stop, function() {
    this.currentTime(keys[key].start)
    this.unmute()
  });
};


var socket = io.connect('http://localhost:8000');

socket.on('message', function (data) {
//  console.log(data)
  if (keys[data.key]) {
 //   keys[data.key].popcorn.currentTime()
    console.log(keys[data.key].start)
    keys[data.key].popcorn.play(keys[data.key].start);
    if (data.vol > 0) {
      keys[data.key].popcorn.unmute();
      keys[data.key].popcorn.play()
    } else {
      keys[data.key].popcorn.mute();
      keys[data.key].popcorn.pause();
    }
  }
});




})