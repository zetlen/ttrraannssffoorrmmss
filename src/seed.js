(function(impl, implnm, d, shl, r, a, dcl, gtf, xf) {
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
  xf[implnm] = impl(xf);
  xf[xf.flg()](function() {
    var stg, aggg;
    for (var tfm in xf) {
      if (xf.hasOwnProperty(tfm) && typeof xf[tfm] === "function" && tfm !== flg && !xf[tfm][flg] && (stg = d.querySelector('script[src*="' + tfm + '"][immanentize]'))) {
        xf[tfm][flg] = flg;
        aggg = stg.getAttribute('immanentize');
        xf[tfm].apply(xf, aggg ? aggg.split(',') : [])
      }
    }
  });
}(__IMPL__, __NAME__, document, { complete: true, loaded: true }, 'readyState', 'addEventListener', 'DOMContentLoaded',
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