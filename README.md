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

if you're not a web developer, you can see these in action by grabbing one from the [src/forms](tree/master/src/forms) directory. click in there, click the one you want to try, and then click "raw". copy the file contents. open a cool website with a lot of activity going on, like "facebook" or "gmail" or "reddit" or "cnn", and then opening your web inspector (f12 or ctrl-shift-i or cmd-opt-i, one of those ought to do it), clicking "Console", and then paste the file contents. *before pressing enter*, add the following:

```js
()()
```

press enter and observe

## the transforms

more coming

### mgrn()
simulate the experience of a "hemicranial" migraine headache

usage:

```js
ttrraannnnsformm.mgrn(); // induce mgrn
```

[src for console paste](tree/master/src/forms/mgrn.js)
[src for professional use](tree/master/dist/mgrn.js)

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

[src for console paste](tree/master/src/forms/lblb.js)
[src for professional use](tree/master/dist/lblb.js)


### lprn()
violate the sacred boundary between the internet and "real life" by printing a web page and bringing its content into the physical world

```js
trannssssforrmmm.lprn(); // reify nothingness
```
[src for console paste](tree/master/src/forms/lprn.js)
[src for professional use](tree/master/dist/lprn.js)


### btft()
monitor code execution with informative heads-up display

```js
trrrraaaaaannnnnnnssssssfoorrrrrmmmm.btft(); // instrument and monitor code execution
```

[src for console paste](tree/master/src/forms/btft.js)
[src for professional use](tree/master/dist/btft.js)


### gnrl(intensity)
generalize content to appeal to a wider group of potential readers. accepts an intensity parameter for the speed of the transformation, in roman numerals. useful for long wikipedia articles.

```js
trannsssfoooorrrrrmmmmmmm.gnrl('MMMMDCXVI'); // generalize content at an intensity of 4616
```

*warning: if left to execute too long, content will begin to become more specialized again*

[src for console paste](tree/master/src/forms/gnrl.js)
[src for professional use](tree/master/dist/gnrl.js)
