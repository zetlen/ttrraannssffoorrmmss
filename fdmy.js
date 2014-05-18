(function(root) {

  var bs = document.body.style,
      ds = document.documentElement.style,
      final = document.documentElement.clientHeight,
      step = final,
      intv,

      ease = root.fdease = function(x) {
        return x*x;
      },

      feed = function() {
        var f = Math.max(0, step);
            c = f/final;
        bs['-webkit-transform'] = bs.transform = "rotateX(" + (30-(ease(c)*30)) + "deg) translateY(" + f + "px)";
        bs['-webkit-filter'] = bs.filter = 'contrast(' + (c*10 + 1) + ') grayscale(' + c + ')';
        if (f)  {
          return setTimeout(feed, 750);
        } else {
          clearInterval(intv);
        }
      },

      fdmy = root.fdmy = function() {
        ds['-webkit-perspective'] = ds.perspective = "2000px";
        bs.transition = "all 0.375s ease-out";
        bs['-webkit-transform'] = bs.transform = "translateY(" + step + "px)";
        intv = setInterval(function() {
         step--; 
        }, 50);
        feed();
      }

})(this);