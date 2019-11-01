// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];

  for (var i = 0; i < musicians; i++) {
    let musician = musicians[i];
    let instrument = instruments[i];
    arr.push(musician + instrument);
  };
  return arr;
};
