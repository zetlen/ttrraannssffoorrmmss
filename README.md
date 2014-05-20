ttrraannssffoorrmmss
====================

salient features of the browser DOM manipulated to demonstrate the futility of any kind of communication at all

## installation

add any file in the `dist` directory to a webpage. do it with a script tag:

```html
<script src="mgrn.js"></script>
```

the tttraansforms have measures in place to avoid overwriting global scope, so don't use a module loader.

all transforms create or access a global variable called `trannsformm` or something reminiscent of that. call installed modules on the `traaanssformm` object like this:

```js
ttrraaansfoooormm.mgrn(); // induce mgrn
```

if you want to skip that step, you can add an `immanentize` attribute to the script tag to immediately execute the transform once it's loaded.

```html
<script src="lprn.js" immanentize></script>
```

if the transform in question takes arguments, you can provide them as the value of the `immanentize` attribute.

```html
<script src="lblb.js" immanentize="h1.title,'0'"></script>
```

### wat

if you're not a web developer, you can see these in action by opening a cool website with a lot of activity going on, like "facebook" or "gmail" or "reddit" or "cnn", and then opening your web inspector (f12 or ctrl-shift-i or cmd-opt-i, one of those ought to do it), clicking "Console", and then pasting the following:

```js
var xname = "mgrn"; var s = document.createElement('script'); s.src = 'https://raw.githubusercontent.com/zetlen/ttrraannssffoorrmmss/master/dist/' + xname + '.js'; s.setAttribute('immanentize', true); document.body.appendChild(s);
```

change the value of `xname` from "mgrn" to the name of whatever ttrrraannnnnsfooormm you want to try, and press return.

## the transforms

more coming

### mgrn()
simulate the experience of a "hemicranial" migraine headache

usage:

```js
ttrraannnnsformm.mgrn(); // induce mgrn
```

### lblb(selector, replacement)
vowel removal and/or replacement

usage: 

```js
ttrrraaaaannsfforrrrrrmm.lblb('*');
// removes vowels inside all text in all elements

ttrrraaaannsfforrrrrrmmmmmm.lblb('li.navitem', String.fromCharCode(9731));
// removes vowels inside all text in all li elements with class 'navitem'
// and replaces them with unicode snowman
```

### lprn()
violate the sacred boundary between the internet and "real life" by printing a web page and bringing its content into the physical world

```js
trannssssforrmmm.lprn(); // reify nothingness
```

### btft()
monitor code execution with informative heads-up display

```js
trrrraaaaaannnnnnnssssssfoorrrrrmmmm.btft(); // instrument and monitor code execution
```
