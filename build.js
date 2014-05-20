  function rend(tpt, vars) {
    return tpt.replace(/__([^_]+)__/g, function(m, v) {
      return vars[v];
    });
  }

  var rimraf = require('rimraf'),
      fs = require('fs'),
      seed = fs.readFileSync('./src/seed.js', 'utf-8')
      tptContext = {
      };

  rimraf('./dist/*', function() {
    fs.readdirSync('./src/forms').forEach(function(formFile) {
      fs.writeFileSync('./dist/' + formFile, rend(seed, {
        IMPL: fs.readFileSync('./src/forms/' + formFile, 'utf-8'),
        NAME: '"' + formFile.split('.').shift() + '"'
      }));
    })
  });