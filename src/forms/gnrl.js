(function() {

var art = ["a","some"],
    pre = ["with","of"],
    adj = ["nice","good","cool","okay"],
    adv = ["really","kinda","sorta"],
    ver = ["go","get","do","give"],
    nou = ["thing","stuff","whatever"],
    same = ["George Ade",
"Leon Ames",
"Anne Baxter",
"Larry Bird",
"Bill Blass",
"Hoagy Carmichael",
"James Dean",
"Eugene V. Debs",
"Theodore Dreiser",
"Bernard F. Gimbel",
"Virgil Grissom",
"Alfred Bertram Guthrie",
"Phil Harris",
"John Milton Hay",
"James R. Hoffa",
"Michael Jackson",
"Buck Jones",
"David Letterman",
"Eli Lilly",
"Carole Lombard",
"Shelley Long",
"Marjorie Main",
"James McCracken",
"John Cougar Mellencamp",
"Joaquin Miller",
"Andrew J. Moyer",
"Paul Osborn",
"Cole Porter",
"Ernest Taylor Pyle",
"J. Danforth Quayle",
"James Whitcomb Riley",
"Ned Rorem",
"Red Skelton",
"Rex Stout",
"Booth Tarkington",
"Twyla Tharp",
"Forrest Tucker",
"Harold C. Urey",
"Kurt Vonnegut, Jr.",
"Jessamyn West",
"Wendell Willkie",
"Wilbur Wright",
"Willis Van Devanter"],

ws = {
"a": art,
"about": pre,
"above": pre,
"across": pre,
"act": ver,
"active": adj, 
"activity": nou,
"add": ver,
"afraid": adj,
"after": pre,
"again": adv,
"age": nou,
"ago": adv,
"agree": ver,
"air": nou,
"all": same,
"alone": adj,
"along": pre,
"already": adv,
"always": adv,
"am": same,
"amount": nou,
"an": same,
"and": same,
"angry": adj,
"another": art,
"answer": nou,
"any": same,
"anyone": same,
"anything": same,
"anytime": same,
"appear": ver,
"apple": nou,
"are": same,
"area": nou,
"arm": nou,
"army": nou,
"around": pre,
"arrive": ver,
"art": nou,
"as": same,
"ask": ver,
"at": ver,
"attack": ver,
"aunt": nou,
"autumn": nou,
"away": adv,
"baby": nou,
"back": nou,
"bad": adj,
"bag": nou,
"ball": nou,
"bank": nou,
"base": nou,
"basket": nou,
"bath": nou,
"be": same,
"bean": nou,
"bear": ver,
"beautiful": adj, 
"bed": nou,
"bedroom": nou,
"beer": nou,
"before": pre,
"begin": ver,
"behave": ver,
"behind": pre,
"bell": nou,
"below": pre,
"besides": pre,
"best": adj,
"better": adj,
"between": pre,
"big": adj,
"bird": nou,
"birth": nou,
"birthday": nou,
"bit": ver,
"bite": ver,
"black": adj,
"bleed": ver,
"block": ver,
"blood": nou,
"blow": ver,
"blue": adj,
"board": ver,
"boat": nou,
"body": nou,
"boil": ver,
"bone": nou,
"book": nou,
"border": nou,
"born": ver,
"borrow": ver,
"both": nou,
"bottle": nou,
"bottom": nou,
"bowl": nou,
"box": nou,
"boy": nou,
"branch": nou,
"brave": adj,
"bread": nou,
"break": ver,
"breakfast": nou,
"breathe": ver,
"bridge": nou,
"bright": adj,
"bring": ver,
"brother": nou,
"brown": adj,
"brush": ver,
"build": ver,
"burn": ver,
"bus": nou,
"business": nou,
"busy": adj,
"but": same,
"buy": ver,
"by": same,
"cake": nou,
"call": ver,
"can": ver,
"candle": nou,
"cap": nou,
"car": nou,
"card": nou,
"care": ver,
"careful": adj,
"careless": adj,
"carry": ver,
"case": nou,
"cat": nou,
"catch": ver,
"central": adj,
"century": nou,
"certain": adj,
"chair": nou,
"chance": nou,
"change": ver,
"chase": ver,
"cheap": adj,
"cheese": nou,
"chicken": nou,
"child": nou,
"children": nou,
"chocolate": nou,
"choice": nou,
"choose": ver,
"circle": nou,
"city": nou,
"class": nou,
"clean": adj,
"clear": adj,
"clever": adj,
"climb": ver,
"clock": nou,
"close": ver,
"cloth": nou,
"clothes": nou,
"cloud": nou,
"cloudy": adj,
"coat": nou,
"coffee": nou,
"coin": nou,
"cold": adj,
"collect": ver,
"color": nou,
"comb": ver,
"come": ver,
"comfortable": adj,
"common": adj,
"compare": ver,
"complete": adj,
"computer": nou,
"condition": nou,
"contain": ver,
"continue": ver,
"control": ver,
"cook": ver,
"cool": ver,
"copper": nou,
"corn": nou,
"corner": nou,
"correct": adj,
"cost": ver,
"count": ver,
"country": nou,
"course": nou,
"cover": ver,
"crash": ver,
"cross": ver,
"cry": ver,
"cup": nou,
"cupboard": nou, 
"cut": ver,
"dance": ver,
"dangerous": adj,
"dark": adj,
"daughter": nou,
"day": nou,
"dead": ver,
"decide": ver,
"decrease": ver,
"deep": adj,
"deer": nou,
"depend": ver,
"desk": nou,
"destroy": ver,
"develop": ver,
"die": ver,
"different": adj, 
"difficult": adj,
"dinner": nou,
"direction": nou,
"dirty": adj,
"discover": ver,
"dish": nou,
"do": ver,
"dog": nou,
"door": nou,
"double": adj,
"down": pre,
"draw": ver,
"dream": ver,
"dress": ver,
"drink": ver,
"drive": ver,
"drop": ver,
"dry": adj,
"duck": ver,
"dust": nou,
"duty": nou,
"each": art,
"ear": nou,
"early": adj,
"earn": ver,
"earth": nou,
"east": adj,
"easy": adj,
"eat": ver,
"education": nou, 
"effect": nou,
"egg": nou,
"eight": adj,
"either": art,
"electric": adj,
"elephant": nou,
"else": same,
"empty": adj,
"end": nou,
"enemy": nou,
"enjoy": ver,
"enough": nou,
"enter": ver,
"entrance": nou,
"equal": adj,
"escape": ver,
"even": adj,
"evening": nou,
"event": nou,
"ever": adj,
"every": pre,
"everybody": nou,
"everyone": nou,
"exact": adj,
"examination": nou,
"example": nou,
"except": pre,
"excited": adj,
"exercise": nou,
"expect": ver,
"expensive": adj,
"explain": ver,
"extremely": adj,
"eye": nou,
"face": nou,
"fact": nou,
"fail": ver,
"fall": ver,
"false": adj,
"family": nou,
"famous": adj,
"far": adj,
"farm": nou,
"fast": adj,
"fat": adj,
"father": nou,
"fault": nou,
"fear": nou,
"feed": ver,
"feel": ver,
"female": adj,
"fever": nou,
"few": adj,
"fight": nou,
"fill": ver,
"film": nou,
"find": ver,
"fine": adj,
"finger": nou,
"finish": ver,
"fire": nou,
"first": adj,
"fit": ver,
"five": art,
"fix": ver,
"flag": nou,
"flat": adj,
"float": ver,
"floor": nou,
"flour": nou,
"flower": nou,
"fly": ver,
"fold": ver,
"food": nou,
"fool": nou,
"foot": nou,
"football": nou,
"for": same,
"force": ver,
"foreign": adj,
"forest": nou,
"forget": ver,
"forgive": ver,
"fork": nou,
"form": nou,
"four": adj,
"fox": nou,
"free": adj,
"freedom": nou,
"freeze": ver,
"fresh": adj,
"friend": nou,
"friendly": adj,
"from": same,
"front": nou,
"fruit": nou,
"full": adj,
"fun": nou,
"funny": adj,
"furniture": nou,
"further": adj,
"future": nou,
"game": nou,
"garden": nou,
"gate": nou,
"general": adj,
"gentleman": nou,
"get": same,
"gift": nou,
"give": ver,
"glad": adj,
"glass": nou,
"go": same,
"goat": nou,
"god": nou,
"gold": adj,
"good": same,
"goodbye": same,
"grandfather": nou,
"grandmother": nou,
"grass": nou,
"grave": nou,
"great": adj,
"green": adj,
"grey": adj,
"ground": nou,
"group": nou,
"grow": ver,
"gun": nou,
"hair": nou,
"half": nou,
"hall": nou,
"hammer": nou,
"hand": nou,
"happen": ver,
"happy": adj,
"hard": adj,
"hat": nou,
"hate": ver,
"have": same,
"he": same,
"head": nou,
"healthy": adj,
"hear": ver,
"heart": nou,
"heaven": nou,
"heavy": adj,
"height": nou,
"hello": same,
"help": ver,
"hen": nou,
"her": same,
"here": same,
"hers": same,
"hide": ver,
"high": adj,
"hill": nou,
"him": same,
"his": same,
"hit": ver,
"hobby": nou,
"hold": ver,
"hole": nou,
"holiday": nou,
"home": nou,
"hope": ver,
"horse": nou,
"hospital": nou,
"hot": adj,
"hotel": nou,
"hour": nou,
"house": nou,
"how": same,
"hundred": nou,
"hungry": adj,
"hurry": ver,
"hurt": ver,
"husband": nou,
"I": same,
"ice": nou,
"idea": nou,
"if": same,
"important": adj,
"in": same,
"increase": nou,
"inside": pre,
"into": pre,
"introduce": ver, 
"invent": ver,
"invite": ver,
"iron": nou,
"is": same,
"island": nou,
"it": same,
"its": same,
"jelly": nou,
"job": nou,
"join": ver,
"juice": nou,
"jump": ver,
"just": same,
"keep": ver,
"key": nou,
"kill": ver,
"kind": adj,
"king": nou,
"kitchen": nou,
"knee": nou,
"knife": nou,
"knock": ver,
"know": ver,
"ladder": nou,
"lady": nou,
"lamp": nou,
"land": nou,
"large": adj,
"last": adj,
"late": adj,
"lately": adj,
"laugh": ver,
"lazy": adj,
"lead": ver,
"leaf": nou,
"learn": ver,
"leave": ver,
"left": ver,
"leg": nou,
"lend": ver,
"length": nou,
"less": art,
"lesson": nou,
"let": same,
"letter": nou,
"library": nou,
"lie": nou,
"life": nou,
"light": nou,
"like": same,
"lion": nou,
"lip": nou,
"list": nou,
"listen": ver,
"little": adj,
"live": ver,
"lock": ver,
"lonely": adj,
"long": adj,
"look": ver,
"lose": ver,
"lot": same,
"love": ver,
"low": adj,
"lower": ver,
"luck": nou,
"machine": nou,
"main": adj,
"make": same,
"male": adj,
"man": nou,
"many": same,
"map": nou,
"mark": nou,
"market": nou,
"marry": ver,
"matter": ver,
"may": same,
"me": same,
"meal": nou,
"mean": ver,
"measure": ver,
"meat": nou,
"medicine": nou,
"meet": ver,
"member": nou,
"mention": ver,
"method": nou,
"middle": nou,
"milk": nou,
"million": art,
"mind": nou,
"minute": nou,
"miss": ver,
"mistake": nou,
"mix": ver,
"model": nou,
"modern": adj,
"moment": nou,
"money": nou,
"monkey": nou,
"month": nou,
"moon": nou,
"more": same,
"morning": nou,
"most": same,
"mother": nou,
"mountain": nou,
"mouth": nou,
"move": ver,
"much": same,
"music": nou,
"must": same,
"my": same,
"name": nou,
"narrow": adj,
"nation": nou,
"nature": nou,
"near": same,
"nearly": adj,
"neck": nou,
"need": ver,
"needle": nou,
"neighbour": nou,
"neither": art,
"net": nou,
"never": art,
"new": adj,
"news": nou,
"newspaper": nou, 
"next": adj,
"nice": same,
"night": nou,
"nine": art,
"no": same,
"noble": adj,
"noise": nou,
"none": same,
"nor": same,
"north": nou,
"nose": nou,
"not": same,
"nothing": nou,
"notice": ver,
"now": same,
"number": nou,
"obey": ver,
"object": nou,
"ocean": same,
"of": same,
"off": same,
"offer": ver,
"office": nou,
"often": adj,
"oil": nou,
"old": adj,
"on": same,
"one": same,
"only": same,
"open": ver,
"opposite": adj,
"or": same,
"orange": adj,
"order": nou,
"other": same,
"our": same,
"out": adj,
"outside": adv,
"over": pre,
"own": ver,
"page": nou,
"pain": nou,
"paint": ver,
"pair": nou,
"pan": nou,
"paper": nou,
"parent": nou,
"park": ver,
"part": nou,
"partner": nou,
"party": nou,
"pass": ver,
"past": nou,
"path": nou,
"pay": ver,
"peace": nou,
"pen": nou,
"pencil": nou,
"people": same,
"pepper": ver,
"per": same,
"perfect": adj,
"period": nou,
"person": same,
"petrol": nou,
"photograph": nou,
"piano": nou,
"pick": ver,
"picture": nou,
"piece": nou,
"pig": nou,
"pin": ver,
"pink": adj,
"place": same,
"plane": nou,
"plant": nou,
"plastic": adj,
"plate": nou,
"play": ver,
"please": ver,
"pleased": adj,
"plenty": nou,
"pocket": nou,
"point": nou,
"poison": nou,
"police": nou,
"polite": adj,
"pool": nou,
"poor": adj,
"popular": adj,
"position": nou,
"possible": adj,
"potato": nou,
"pour": ver,
"power": nou,
"present": adj,
"press": nou,
"pretty": adj,
"prevent": ver,
"price": nou,
"prince": nou,
"prison": nou,
"private": adj,
"prize": nou,
"probably": adv,
"problem": nou,
"produce": ver,
"promise": ver,
"proper": adj,
"protect": ver,
"provide": ver,
"public": adj,
"pull": ver,
"punish": ver,
"pupil": nou,
"push": ver,
"put": same,
"queen": nou,
"question": nou,
"quick": adj,
"quiet": adj,
"quite": adv,
"radio": nou,
"rain": nou,
"rainy": adj,
"raise": ver,
"reach": ver,
"read": ver,
"ready": adj,
"real": adj,
"really": adv,
"receive": ver,
"record": nou,
"red": adj,
"remember": ver,
"remind": ver,
"remove": ver,
"rent": ver,
"repair": ver,
"repeat": ver,
"reply": ver,
"report": nou,
"rest": nou,
"restaurant": nou,
"result": nou,
"return": ver,
"rice": nou,
"rich": adj,
"ride": nou,
"right": adj,
"ring": ver,
"rise": ver,
"road": nou,
"rob": ver,
"rock": ver,
"room": nou,
"round": adj,
"rubber": adj,
"rude": adj,
"rule": nou,
"ruler": nou,
"run": ver,
"rush": ver,
"sad": adj,
"safe": adj,
"sail": ver,
"salt": nou,
"same": same,
"sand": nou,
"save": ver,
"say": ver,
"school": nou,
"science": nou,
"scissors": nou,
"search": ver,
"seat": nou,
"second": art,
"see": ver,
"seem": same,
"sell": ver,
"send": ver,
"sentence": nou,
"serve": ver,
"seven": art,
"several": art,
"sex": nou,
"shade": nou,
"shadow": nou,
"shake": nou,
"shape": nou,
"share": ver,
"sharp": adj,
"she": same,
"sheep": nou,
"sheet": nou,
"shelf": nou,
"shine": ver,
"ship": nou,
"shirt": nou,
"shoe": nou,
"shoot": ver,
"shop": ver,
"short": adj,
"should": same,
"shoulder": nou,
"shout": ver,
"show": ver,
"sick": adj,
"side": nou,
"signal": nou,
"silence": nou,
"silly": adj,
"silver": adj,
"similar": adj,
"simple": adj,
"since": same,
"sing": ver,
"single": adj,
"sink": ver,
"sister": nou,
"sit": ver,
"six": art,
"size": nou,
"skill": nou,
"skin": nou,
"skirt": nou,
"sky": nou,
"sleep": nou,
"slip": nou,
"slow": adj,
"small": adj,
"smell": nou,
"smile": nou,
"smoke": nou,
"snow": nou,
"so": same,
"soap": nou,
"sock": nou,
"soft": adj,
"some": same,
"someone": same,
"something": same,
"sometimes": same,
"son": nou,
"soon": adv,
"sorry": adj,
"sound": nou,
"soup": nou,
"south": adj,
"space": nou,
"speak": ver,
"special": adj,
"speed": nou,
"spell": nou,
"spend": ver,
"spoon": nou,
"sport": nou,
"spread": ver,
"spring": nou,
"square": nou,
"stamp": nou,
"stand": ver,
"star": nou,
"start": ver,
"station": nou,
"stay": ver,
"steal": ver,
"steam": nou,
"step": nou,
"still": adv,
"stomach": nou,
"stone": nou,
"stop": nou,
"store": ver,
"storm": nou,
"story": nou,
"strange": adj,
"street": nou,
"strong": adj,
"structure": nou,
"student": nou,
"study": nou,
"stupid": adj,
"subject": nou,
"substance": nou,
"successful": adj,
"such": same,
"sudden": adj,
"sugar": nou,
"suitable": adj,
"summer": nou,
"sun": nou,
"sunny": adj,
"support": nou,
"sure": adj,
"surprise": nou,
"sweet": adj,
"swim": ver,
"sword": nou,
"table": nou,
"take": ver,
"talk": ver,
"tall": adj,
"taste": nou,
"taxi": nou,
"tea": nou,
"teach": ver,
"team": nou,
"tear": ver,
"telephone": nou, 
"television": nou,
"tell": ver,
"ten": art,
"tennis": nou,
"terrible": adj,
"test": nou,
"than": same,
"that": same,
"the": same,
"their": same,
"then": same,
"there": same,
"therefore": pre,
"these": same,
"thick": adj,
"thin": adj,
"thing": same,
"think": ver,
"third": adj,
"this": same,
"though": same,
"threat": nou,
"three": art,
"tidy": adj,
"tie": ver,
"title": nou,
"to": same,
"today": pre,
"toe": ver,
"together": adv,
"tomorrow": adv,
"tonight": adv,
"too": same,
"tool": nou,
"tooth": nou,
"top": nou,
"total": adj,
"touch": ver,
"town": nou,
"train": ver,
"tram": nou,
"travel": ver,
"tree": nou,
"trouble": nou,
"true": adj,
"trust": ver,
"try": ver,
"turn": ver,
"twice": adv,
"type": adj,
"uncle": nou,
"under": pre,
"understand": ver, 
"unit": nou,
"until": pre,
"up": pre,
"use": ver,
"useful": adj,
"usual": adj,
"usually": adv,
"vegetable": nou,
"very": same,
"village": nou,
"visit": ver,
"voice": nou,
"wait": ver,
"wake": ver,
"walk": ver,
"want": ver,
"warm": adj,
"wash": nou,
"waste": ver,
"watch": ver,
"water": nou,
"way": nou,
"we": same,
"weak": ver,
"wear": ver,
"weather": nou,
"wedding": nou,
"week": nou,
"weight": nou,
"welcome": nou,
"well": adv,
"west": adj,
"wet": adj,
"what": same,
"wheel": nou,
"when": same,
"where": same,
"which": same,
"while": pre,
"white": adj,
"who": same,
"why": same,
"wide": adj,
"wife": nou,
"wild": adj,
"will": ver,
"win": ver,
"wind": nou,
"window": nou,
"wine": nou,
"winter": nou,
"wire": nou,
"wise": adj,
"wish": ver,
"with": same,
"without": pre,
"woman": nou,
"wonder": ver,
"word": nou,
"work": ver,
"world": nou,
"worry": ver,
"worst": adj,
"write": ver,
"wrong": adj,
"year": nou,
"yes": same,
"yesterday": adv, 
"yet": adv,
"you": same,
"young": adj,
"your": same,
"zero": adj,
"zoo": nou
},
wa = Object.keys(ws),
l = wa.length,
cl = l,

frr = function(s){
    s= String(s).toUpperCase();
    if(s.length> 40 ||  /[^MDCLXVI]/.test(s)) return NaN;
    var L= s.length,sum= 0,i= 0,next,val,
    R={
        M:1000,D:500,C:100,L:50,X:10,V:5,I:1
    };  
    while(i< L){
        val= s.charAt(i++);
        if(!R[val]) return NaN;
        val= R[val];
        next= R[(s.charAt(i) || "N")] || 0;
        if(next> val) val*= -1;
        sum+= val;
    }
    return sum;
},

gW = function() {
   var i,w,ww,wo,p;
   while (!wo) {
    i = Math.floor(Math.random()*l)
    w = wa[i];
    p = ws[w];
    if (p !== same || Math.random() > ez(l/cl)) {
      wo = [w, p];
      l--;
      wa.splice(i, 1);
      delete ws[w];
    }
  }
  return wo;
},

ez = function (t) { return 1+(--t)*t*t*t*t };

return function (intensity) {
  var ms = 3600000 / ( frr(intensity) || 9000 ), 
      b = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT),
      mths = {
        previousNode: "nextNode",
        nextNode: "previousNode"
      },
      mth = mths.previousNode,

      rpl = function() {
        var c, wo = gW(),
        pl = wo[1].length,
        re = new RegExp("\\b" + wo[0] + "\\b","gi");
        while (c = b[mth]()) {
          c.nodeValue = c.nodeValue.replace(re, wo[1][Math.floor(Math.random()*pl)]);
        }
        if (l) {
          mth = mths[mth];
          setTimeout(rpl, ms);
        }
      }

    rpl();
    console.log('gnrl active, watch text');
};

})