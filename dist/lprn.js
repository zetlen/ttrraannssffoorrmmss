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
        xf[tfm].apply(xf, aggg ? aggg.split(',') : [])
      }
    }
  });
}((function() {

  var bs = document.body.style,
      ds = document.documentElement.style,
      final = document.documentElement.scrollHeight,
      step = final,
      intv = Math.floor(final * 0.015);

      ease = function(x) {
        return x*x*x;
      },

      feed = function() {
        var f = Math.max(0, step -= intv);
            c = f/final;
        ds['-webkit-perspective'] = ease(c) * 20000 + 2000 + "px";
        bs['-webkit-transform'] = bs.transform = "rotateX(" + (30-(ease(c)*30)) + "deg) translateY(" + f/*(4 * f - 2 * final)*/ + "px)";
        bs['-webkit-filter'] = bs.filter = 'contrast(' + ((1-c)*4 + 1) + ') grayscale(' + (1-c) + ')';
        if (f) return setTimeout(feed, 750);
      };

      return function() {
        ds['-webkit-perspective'] = ds.perspective = "20000px";
        bs['-webkit-transform'] = bs.transform = "translateY(" + step + "px)";
        bs['box-shadow'] = "0 0 10px 1px rgba(0,0,0,0.15)";
        bs['-webkit-backface-visibility'] = "hidden";
        bs['-webkit-transform-style'] = "preserve-3d";
        bs.transition = "all 0.375s ease-out";
        window.scrollTo(0, final);
        feed();
        console.log('lprn activated');
      }

}), "lprn", document, { complete: true, loaded: true }, 'readyState', 'immanentize', 'addEventListener', 'querySelector','getAttribute','DOMContentLoaded',
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