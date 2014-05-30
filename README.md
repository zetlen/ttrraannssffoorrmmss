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

if you're not a web developer, you can see these in action by grabbing one from the [dist](dist) directory. click in there, click the one you want to try, and then click "raw". copy the file contents. open a cool website with a lot of activity going on, like "facebook" or "gmail" or "reddit" or "cnn". 

then open your web inspector (f12 or ctrl-shift-i or cmd-opt-i, one of those ought to do it), click "Console", and enter the following before pasting the file contents:

```js
window.immanentize = [];
```

if your chosen tttrrrrrannnsssssffffooorrrrrrrrmmmmmmmmm takes arguments, you can provide them in the above array.

```js
window.immanentize = ["p.bodytext", '~']; 
// when lblb.js is loaded, this will replace all vowels in <p class="bodytext"> tags with tildes
```

then paste the file contents.

press enter and observe

## the transforms

more coming

### mgrn()
simulate the experience of a "hemicranial" migraine headache

usage:

```js
ttrraannnnsformm.mgrn(); // induce mgrn
```
*  [mgrn src for console paste](https://raw.githubusercontent.com/zetlen/ttrraannssffoorrmmss/master/dist/mgrn.js)

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
*  [lblb src for console paste](https://raw.githubusercontent.com/zetlen/ttrraannssffoorrmmss/master/dist/lblb.js)

### lprn()
violate the sacred boundary between the internet and "real life" by printing a web page and bringing its content into the physical world

```js
trannssssforrmmm.lprn(); // reify nothingness
```
*  [lprn src for console paste](https://raw.githubusercontent.com/zetlen/ttrraannssffoorrmmss/master/dist/lprn.js)

### btft()
monitor code execution with informative heads-up display

```js
trrrraaaaaannnnnnnssssssfoorrrrrmmmm.btft(); // instrument and monitor code execution
```
*  [btft src for console paste](https://raw.githubusercontent.com/zetlen/ttrraannssffoorrmmss/master/dist/btft.js)

### gnrl(intensity)
generalize content to appeal to a wider group of potential readers. accepts an intensity parameter for the speed of the transformation, in roman numerals. useful for long wikipedia articles.

```js
trannsssfoooorrrrrmmmmmmm.gnrl('MMMMDCXVI'); // generalize content at an intensity of 4616
```

*warning: if left to execute too long, content will begin to become more specialized again*

*  [gnrl src for console paste](https://raw.githubusercontent.com/zetlen/ttrraannssffoorrmmss/master/dist/gnrl.js)

### mnnw(intensity)
liberate content to follow its desires. accepts an intensity parameter as an arccosine in radians and computes the intensity as a cosine. make sure to scroll to heat the blood

```js
ttrrraansffffffffooooooorrrrrrrrrrrrrm.mnnw(8.75); // untether content at an intensity of -0.7808
```
*  [mnnw src for console paste](https://raw.githubusercontent.com/zetlen/ttrraannssffoorrmmss/master/dist/mnnw.js)
