// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];

  for (var i = 0; i < musicians.length; i++) {
    let musician = musicians[i];
    let instrument = instruments[i];
    arr.push(`${musician} plays ${instrument}`);
  };
  return arr;
};
