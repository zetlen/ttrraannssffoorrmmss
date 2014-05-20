(function(root) {

  var onomatopoeias = 'punch,nurt,zang,wack,voop,horf,ronch,flem,poit,kunk,sloof,garsh,fwiss,merk,dronx,wiff,hing,splukk'.split(',').map(function(snd) {
    return snd.toUpperCase() + '!';
  }),
    pnchs = {
      'console': {
        'log': true
      },
      XmlHttpRequest: {
        'prototype': {
          'open': true,
          'send': true
        }
      },
      'Document': {
        'prototype': {
          getElementById: true,
          querySelectorAll: true
        }
      }
      'Node': {
        'prototype': {
          'appendChild': true,
          'removeChild': true,
          'insertBefore': true
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
    vvr = function(obj, meth) {
      var old = obj[meth],
          snd = onomatopoeias.splice(Math.floor(Math.random()*onomatopoeias.length), 1),
          clr = '#' + Math.floor(Math.random()*16777216).toString(16),
          posl = Math.random() * (document.documentElement.clientWidth - (snd.length * 40)),
          post = Math.random() * (document.documentElement.clientHeight - 50),
          elm,
          hide = function() {
            elm.style.display = 'none';
          }
      return function() {
        if (!elm) {
          elm = document.createElement(en);
          elm.className = cls;
          elm.style.color = clr;
          elm.style.top = post;
          elm.style.left = posl;
          elm.appendChild(document.createTextNode(snd));
          document.body.appendChild(elm);
        }
        elm.style.display = 'block';
        setTimeout(hide,100);
        old.apply(this, arguments);
      }
    }
  
}(__SEED__))