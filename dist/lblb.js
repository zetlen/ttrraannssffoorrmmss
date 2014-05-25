(function(impl, implnm, d, shl, r, iflg, a, qs, ga, dcl, gtf, xf) {
  var flg = "xf", nx = 49;
  while (nx-- > 2) flg = "_" + flg;
  if (!(xf = gtf(flg))) {
    var onm = "transform".split(''), nm = "", c;
    while (c = onm.shift()) {
      nm += c;
      while(Math.random() > Math.sqrt(1/(nx++))) nm += c;
    }
    xf = this[nm] = {};
    xf[flg] = function (fff) {
      if (shl[d[r]]) return fff();
      d[a](dcl, fff);
    };
    xf.flg = function() { return flg; };
  }
  xf[implnm] = impl();
  xf[xf.flg()](function() {
    var stg, aggg;
    for (var tfm in xf) {
      if (
          xf.hasOwnProperty(tfm) && 
          typeof xf[tfm] === "function" && 
          tfm !== flg && 
          !xf[tfm][flg] && 
          (
            (stg = d[qs]('script[src*="' + tfm + '"][' + iflg + ']')) && 
            (aggg = stg[g](iflg)) || (aggg = this[iflg])
          )
         ) {
        xf[tfm][flg] = flg;
        xf[tfm].apply(xf, (typeof aggg === "string") ? aggg.split(',') : aggg)
      }
    }
  });
}((function() {

return function (sel, rval) {
  rval = rval === "schwa" ? String.fromCharCode(601) : rval || '';
  return [].slice.call(document.querySelectorAll(sel)).forEach(function(node) {
    for (var b = document.createTreeWalker(node, NodeFilter.SHOW_TEXT), c, a, d = /[aeiou]/gi; b.nextNode();) a = b.currentNode, c = a.nodeValue, a.nodeValue = c.replace(d, rval)
  });
  console.log('lblb activated with sel ' + sel + ' and rval ' + rval);
};

}), "lblb", document, { complete: true, loaded: true }, 'readyState', 'immanentize', 'addEventListener', 'querySelector','getAttribute','DOMContentLoaded',
  function(ffllgg) {
    var ts = Object.prototype.toString,
        ig = {
          "[object global]": true,
          "[object Window]": true
        };
    for (var g in this) {
      if (this.hasOwnProperty(g) && this[g] && !(ts.call(this[g]) in ig) && this[g][ffllgg]) return this[g];
    }
  }
))