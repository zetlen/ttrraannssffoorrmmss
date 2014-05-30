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
}((function() {
  function fppp(obj) {
  var curleft = curtop = NaN, orig = obj;
  if (obj.offsetParent) {
    curleft = curtop = 0;
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
    }
    return {
      x: curleft,
      y: curtop,
      w: orig.offsetWidth,
      h: orig.offsetHeight
    };
  }
  function eIV(el) {
    var p = fppp(el);

    return (
      p.y >= window.pageYOffset &&
      p.x >= window.pageXOffset &&
      (p.y + p.h) <= (window.pageYOffset + window.innerHeight) &&
      (p.x + p.w) <= (window.pageXOffset + window.innerWidth)
    );
  }
  function quaaaaaa() {
    var ni = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n) {
        return n && n.offsetWidth > 0 && n.offsetHeight > 0 && !Array.prototype.some.call(n.childNodes, function(c) { return c.nodeType === Node.ELEMENT_NODE; }) && eIV(n);
      }
    }),
    n,
    a = [];
    while(n = ni.nextNode()) a.push(n);
    return a;
  }
  function slyth(el) {
    var p = fppp(el),
        snk = el.cloneNode(true),
        sns = snk.style;

    sns.top = (p.y - window.pageYOffset) + 'px';
    sns.left = (p.x - window.pageXOffset) + 'px';
    sns.position = "fixed";
    sns.transition = "all 0.6s ease";

    el.parentNode.insertBefore(snk, el);

    el.style.visibility = "hidden";

    (function erin() {
      sns.top = snk.offsetTop + (snk.offsetTop < mp.y ? mnnwChsVel : -mnnwChsVel) + 'px';
      sns.left = snk.offsetLeft + (snk.offsetLeft < mp.x ? mnnwChsVel : -mnnwChsVel) + 'px';
      setTimeout(erin, 600);
    })();
  }
  function uplyft() {
    var qus = quaaaaaa();
    slyth(qus[Math.floor(Math.random()*qus.length)]);
    setTimeout(uplyft, newMnnwIntv);
  }

  var mp = {},
      mnnwChsVel,
      newMnnwIntv;
  return function(intensity) {
    var intenserads = (1 + Math.cos(intensity)) / 2;
    newMnnwIntv = 10000 - intenserads * 10000;
    mnnwChsVel = Math.ceil(intenserads*5);
    console.log(newMnnwIntv, mnnwChsVel);
    document.addEventListener('mousemove', function(e) {
      mp.x = e.clientX;
      mp.y = e.clientY;
    });
    uplyft();
  }
}), "mnnw", document, { complete: true, loaded: true }, 'readyState', 'immanentize', 'addEventListener', 'querySelector','getAttribute','DOMContentLoaded',
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