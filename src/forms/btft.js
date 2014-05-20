function(root) {

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
    bd = document.body,
    vvr = function(name, meth) {
      var obj = eval(name),
          old = obj[meth],
          snd = onomatopoeias.splice(Math.floor(Math.random()*onomatopoeias.length), 1),
          clr = '#' + Math.floor(Math.random()*16777216).toString(16),
          posl = Math.random() * (document.documentElement.clientWidth - (snd.length * 40)),
          post = Math.random() * (document.documentElement.clientHeight - 50),
          diffx = Math.random() > 0.5 ? 1 : -1,
          diffy = Math.random() > 0.5 ? 1 : -1,
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
    };
  
}