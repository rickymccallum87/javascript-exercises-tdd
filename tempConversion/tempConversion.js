var ftoc = function(f) {
  let c = (f - 32) * (5/9);
  console.log(f,c);
  c = Math.round(c * 10) / 10;
  console.log('round',c);
  return c;
}

var ctof = function(c) {
  let f = c * (9/5) + 32;
  console.log(c,f);
  f = Math.round(f * 10) / 10;
  console.log('round',f);
  return f;
}

module.exports = {
  ftoc,
  ctof
}
