(function(root) {

  var bs = document.body.style,
      ds = document.documentElement.style,
      final = document.documentElement.scrollHeight,
      step = final,
      intv = Math.floor(final * 0.015);

      ease = root.fdease = function(x) {
        return x*x*x;
      },

      feed = function() {
        var f = Math.max(0, step -= intv);
            c = f/final;
        ds['-webkit-perspective'] = ease(c) * 20000 + 2000 + "px";
        bs['-webkit-transform'] = bs.transform = "rotateX(" + (30-(ease(c)*30)) + "deg) translateY(" + f/*(4 * f - 2 * final)*/ + "px)";
        bs['-webkit-filter'] = bs.filter = 'contrast(' + ((1-c)*4 + 1) + ') grayscale(' + (1-c) + ')';
        if (f) return setTimeout(feed, 750);
      },

      lprn = root.lprn = function() {
        ds['-webkit-perspective'] = ds.perspective = "20000px";
        bs['-webkit-transform'] = bs.transform = "translateY(" + step + "px)";
        bs['box-shadow'] = "0 0 10px 1px rgba(0,0,0,0.15)";
        bs['-webkit-backface-visibility'] = "hidden";
        bs['-webkit-transform-style'] = "preserve-3d";
        bs.transition = "all 0.375s ease-out";
        window.scrollTo(0, final);
        feed();
      }

})(__SEED__);