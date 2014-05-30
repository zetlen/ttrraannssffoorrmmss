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
            (aggg = stg[ga](iflg)) || (aggg = this[iflg])
          )
         ) {
        xf[tfm][flg] = flg;
        xf[tfm].apply(xf, (typeof aggg === "string") ? aggg.split(',') : aggg);
      }
    }
  });
}(__IMPL__, __NAME__, document, { complete: true, loaded: true }, 'readyState', 'immanentize', 'addEventListener', 'querySelector','getAttribute','DOMContentLoaded',
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