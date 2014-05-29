(function() {
  function findPos(obj) {
    var curleft = curtop = NaN;
    if (obj.offsetParent) {
      curleft = curtop = 0;
      do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }
    return {
      left: curleft,
      top: curtop
    };
  }
  return function(intensity) {
    var intenserads = (1 + Math.cos(intensity)) / 2,
    newMnnwIntv = 20000 - intenserads * 20000,
    mnnwChsVel = Math.floor(intenserads*5);
    var ni = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n) {
        var pos;
        return n.offsetWidth > 0 && n.offsetHeight > 0 && !Array.prototype.some.call(n.childNodes, function(c) { return c.nodeType === Node.ELEMENT_NODE; }) && (pos = findPos(n), !isNaN(pos.left) && !isNaN(pos.top));
      }
    });
    return ni;
  }
})