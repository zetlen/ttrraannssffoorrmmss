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

  var onomatopoeias = 'paf,punch,nurt,zang,wack,voop,horf,ronch,flemm,poit,kunk,sloof,garsh,fwiss,merk,dronx,wiff,hing,splukk'.split(',').map(function(snd) {
    return snd.toUpperCase() + '!';
  }),
    pnchs = {
      'console': {
        'log': true
      },
      XMLHttpRequest: {
        'prototype': {
          'open': true,
          'send': true
        }
      },
      'Document': {
        'prototype': {
          getElementById: true,
          querySelectorAll: true,
          querySelector: true
        }
      },
      'Node': {
        'prototype': {
          'appendChild': true,
          'removeChild': true,
          'insertBefore': true
        }
      },
      'EventTarget': {
        'prototype': {
          'addEventListener': true,
          'removeEventListener': true,
          'dispatchEvent': true
        }
      }
    },
    cls = "btft",
    en = 'div',
    lg = console.log,
    log = function() {
      lg.apply(console, arguments);
    },
    bd = document.body,
    vvr = function(name, meth) {
      var obj = eval(name),
          old = obj[meth],
          snd = onomatopoeias.splice(Math.floor(Math.random()*onomatopoeias.length), 1),
          clr = '#' + Math.floor(Math.random()*16777216).toString(16),
          posl = Math.random() * (document.documentElement.clientWidth - (snd.length * 40)),
          post = Math.random() * (document.documentElement.clientHeight - 50),
          diffx = Math.random() > 0.5 ? 3 : -3,
          diffy = Math.random() > 0.5 ? 3 : -3,
          elm,
          s,
          hide = function() {
            s.opacity = '0';
            s.top = post + 'px';
            s.left = posl + 'px';
          };
       obj[meth] = function() {
        if (!elm) {
          elm = document.createElement(en);
          s = elm.style;
          elm.className = cls;
          s.color = clr;
          s.top = post + 'px';
          s.left = posl + 'px';
          s['-webkit-transform'] = s.transform = 'rotate(' + (10 - Math.floor(Math.random() * 20)) + "deg)";
          elm.appendChild(document.createTextNode(snd));
          document.body.appendChild(elm);
        }
        s.opacity = '1';
        s.top = (post + diffy) + 'px';
        s.left = (posl + diffx) + 'px';
        log(snd);
        setTimeout(hide,100);
        return old.apply(this, arguments);
      }
    },
    wk = function(name, obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (obj[prop] === true) {
            vvr(name, prop);
          } else {
            wk(name + "." + prop, obj[prop]);
          }
        }
      }
    },
    globalCSS = '.btft {\
      position: fixed;\
      font-family: Impact, sans-serif;\
      font-size: 40px;\
      font-weight: bold;\
      pointer-events: none;\
      transition: all 0.1s ease;\
      z-index: 999999999;\
      pointer-events: none;\
    }';
    return function() {
      var style = document.createElement('style');
      style.appendChild(document.createTextNode(globalCSS));
      document.head.appendChild(style);
      wk('window', pnchs);
      console.log('btft active, proceed');
    };
  
}), "btft", document, { complete: true, loaded: true }, 'readyState', 'immanentize', 'addEventListener', 'querySelector','getAttribute','DOMContentLoaded',
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