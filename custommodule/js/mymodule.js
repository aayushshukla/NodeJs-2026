let msg = "custom module - creating our own module";
function add(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}
// module.exports . proprtyname = value
module.exports.custommsg = msg;
module.exports.addition = add;
module.exports.subtraction = sub;
