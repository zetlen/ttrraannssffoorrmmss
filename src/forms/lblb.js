(function(root) {

root.lblb = function (sel, rval) {
  rval = rval === "schwa" ? String.fromCharCode(601) : rval || '';
  return document.querySelectorAll(sel).forEach(function(node) {
    for (var b = document.createTreeWalker(node, NodeFilter.SHOW_TEXT), c, a, d = /[aeiou]/gi; b.nextNode();) a = b.currentNode, c = a.nodeValue, a.nodeValue = c.replace(d, rval)
  });
};

}(__SEED__));