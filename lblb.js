$.fn.lblb = function (rval) {
  rval = rval === "schwa" ? String.fromCharCode(601) : rval || '';
  return this.each(function() {
    for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT), c, a, d = /[aeiou]/gi; b.nextNode();) a = b.currentNode, c = a.nodeValue, a.nodeValue = c.replace(d, rval)
  });
};