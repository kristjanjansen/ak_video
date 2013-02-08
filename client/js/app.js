$(function() {

var keys = {
  41  : {
    'video': 'http://youtu.be/_bP48M2BEs0',
    'start': 6
  },
  43  : {
    'video': 'http://youtu.be/X5tU95M4QBk',
    'start': 3
  },
  45  : {
    'video': 'http://youtu.be/AuQ7sOs0YcY',
    'start': 15
  },
  47  : {
    'video': 'http://youtu.be/oca2-uumYyI',
    'start': 306
  },
  84 : {
    'video': 'http://www.youtube.com/watch?v=sAiodHVJpEU',
    'start': 0
  },
  50 : {
    'video': 'http://youtu.be/euZMmZW3gnQ',
    'start': 4
  },
  52 : {
    'video': 'http://youtu.be/4bjPlBC4h_8',
    'start': 1
  },
  53 : {
    'video': 'http://youtu.be/cI0AiFG5dXY',
    'start': 1
  },
  55 : {
    'video': 'http://youtu.be/3kBhyWBTUeQ',
    'start': 9
  },
  57 : {
    'video': 'http://youtu.be/BontRCl7Z7w',
    'start': 1
  },
  59 : {
    'video': 'http://youtu.be/xxYg3j3plxY',
    'start': 115
  },
  60 : {
    'video': 'http://www.youtube.com/watch?v=w8A4CoKiAsc',
    'start': 0
  },
  62 : {
    'video': 'http://www.youtube.com/watch?v=iwGFalTRHDA',
    'start': 0
  },
  64 : {
    'video': 'http://www.youtube.com/watch?v=60yI2ufRD5s',
    'start': 20
  },
  67 : {
    'video': 'http://youtu.be/-SD9DkKyOrY',
    'start': 6
  },
  69 : {
    'video': 'http://youtu.be/WY-Z6wm6TMQ',
    'start': 0.2
  },
  71 : {
    'video': 'http://youtu.be/SMrKGkKdKYU',
    'start': 11
  },
  72 : {
    'video': 'http://youtu.be/ifCwPidxsqA',
    'start': 31.5
  },
  74 : {
    'video': 'http://youtu.be/sPasebVMIW4',
    'start': 1
  },
  76 : {
    'video': 'http://youtu.be/0DLED7krHwU',
    'start': 9
  },
  77 : {
    'video': 'http://youtu.be/NJd_D5vlloQ',
    'start': 8.5
  },
  79 : {
    'video': 'http://youtu.be/LNJwKyMJyGk',
    'start': 0
  },
  81 : {
    'video': 'http://youtu.be/XsU5AMxvlKg',
    'start': 209
  },
  83 : {
    'video': 'http://youtu.be/W5wr7U8AdS4',
    'start': 0
  
  
  
  }
}

for (var key in keys) {
  keys[key].popcorn = new Popcorn.youtube('#video', keys[key].video)
};


var socket = io.connect();

socket.on('message', function (data) {
  if (keys[data.key]) {
    if (data.vol > 0) {
   //  keys[data.key].popcorn.unmute();
      keys[data.key].popcorn.currentTime(keys[data.key].start);
//var bla = convertRange(data.vol, 0, 127, 0, 1);
//console.log(bla);
      keys[data.key].popcorn.play();
    } else {
    //  keys[data.key].popcorn.mute();
      keys[data.key].popcorn.pause();
    }
  }
});


})

function convertRange(val, old_min, old_max, new_min, new_max) {
 return (((val - old_min) * (new_max - new_min) ) / (old_max - old_min)) + new_min
}
