var gTotalSeconds = 0;

function shuffle(items) {
  var randIdx, keep, i;
  for (i = items.length - 1; i > 0; i--) {
    randIdx = getRandomInt(0, items.length - 1);

    keep = items[i];
    items[i] = items[randIdx];
    items[randIdx] = keep;
  }
  return items;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function fillNums(max) {
  var arr = [];
  for (var i = 0; i < max; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

function countUpTimer() {
  ++gTotalSeconds;
  var hour = Math.floor(gTotalSeconds / 3600);
  var minute = Math.floor((gTotalSeconds - hour * 3600) / 60);
  var seconds = gTotalSeconds - (hour * 3600 + minute * 60);
  var elTimeBox = document.querySelector('.time-display');
  elTimeBox.innerHTML = 'TIMER: ' + hour + ':' + minute + ':' + seconds;
  elTimeBox.style.display = 'block';
}
