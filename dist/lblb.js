(function(root) {

root.lblb = function (sel, rval) {
  rval = rval === "schwa" ? String.fromCharCode(601) : rval || '';
  return Array.prototype.slice.call(document.querySelectorAll(sel)).forEach(function(node) {
    for (var b = document.createTreeWalker(node, NodeFilter.SHOW_TEXT), c, a, d = /[aeiou]/gi; b.nextNode();) a = b.currentNode, c = a.nodeValue, a.nodeValue = c.replace(d, rval)
  });
};

}((function(xf) {
  var flg = "xf", nx = 49;
  while (nx-- > 2) flg = "_" + flg;
  for (var g in this) {
    if (this.hasOwnProperty(g) && this[g] && this[g][flg]) return this[g];
  }
  var onm = "transform".split(''), nm = "", c;
  while (c = onm.shift()) {
    nm += c;
    while(Math.random() > Math.sqrt(1/(nx++))) nm += c;
  }
  xf = this[nm] = {};
  xf[flg] = true;
  return xf;
}())));