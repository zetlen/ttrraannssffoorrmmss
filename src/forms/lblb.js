(function() {

return function (sel, rval) {
  rval = rval === "schwa" ? String.fromCharCode(601) : rval || '';
  return [].slice.call(document.querySelectorAll(sel)).forEach(function(node) {
    for (var b = document.createTreeWalker(node, NodeFilter.SHOW_TEXT), c, a, d = /[aeiou]/gi; b.nextNode();) a = b.currentNode, c = a.nodeValue, a.nodeValue = c.replace(d, rval)
  });
  console.log('lblb activated with sel ' + sel + ' and rval ' + rval);
};

})