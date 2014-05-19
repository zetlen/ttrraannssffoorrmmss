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
    bd = document.body,
    vvr = function(obj, meth) {
      var old = obj[meth],
          snd = onomatopoeias.splice(Math.floor(Math.random()*onomatopoeias.length), 1),
          clr = '#' + Math.floor(Math.random()*16777216).toString(16),
          posl = Math.random() * document.documentElement.clientWidth - (snd.length * 40),
          post = Math.random() * document.documentElement.clientHeight
      return function() {
        document.body.appendChild()
      }
    }
  
}(__SEED__))