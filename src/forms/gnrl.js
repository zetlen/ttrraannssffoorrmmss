(function(root) {

var same = 0,
    art = ['a','some'],
    pre = ['with','of'],
    adj = ['nice','good','cool','okay'],
    adv = ['really','kinda','sorta'],
    ver = ['go','get','do','give'],
    nou = ['thing','stuff','whatever'],
    pno = ['Jon Lovitz','Cybill Shepherd','Treat Williams','Forest Whitaker','Soledad O\'Brien'],

ws = {

"a": art,
"about": pre,
"above": pre,
"across": pre,
"act": ver,
"active": adj, 
"activity": nou
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
"feed": 
"feel": 
"female": 
"fever": 
"few": 
"fight": 
"fill": 
"film": 
"find": 
"fine": 
"finger": 
"finish": 
"fire": 
"first": 
"fit": 
"five": 
"fix": 
"flag": 
"flat": 
"float": 
"floor": 
"flour": 
"flower": 
"fly": 
"fold": 
"food": 
"fool": 
"foot": 
"football": 
"for": 
"force": 
"foreign": 
"forest": 
"forget": 
"forgive": 
"fork": 
"form": 
"four": 
"fox": 
"free": 
"freedom": 
"freeze": 
"fresh": 
"friend": 
"friendly": 
"from": 
"front": 
"fruit": 
"full": 
"fun": 
"funny": 
"furniture": 
"further": 
"future": 
"game": 
"garden": 
"gate": 
"general": 
"gentleman": 
"get": 
"gift": 
"give": 
"glad": 
"glass": 
"go": 
"goat": 
"god": 
"gold": 
"good": 
"goodbye": 
"grandfather": 
"grandmother": 
"grass": 
"grave": 
"great": 
"green": 
"grey": 
"ground": 
"group": 
"grow": 
"gun": 
"hair": 
"half": 
"hall": 
"hammer": 
"hand": 
"happen": 
"happy": 
"hard": 
"hat": 
"hate": 
"have": 
"he": 
"head": 
"healthy": 
"hear": 
"heart": 
"heaven": 
"heavy": 
"height": 
"hello": 
"help": 
"hen": 
"her": 
"here": 
"hers": 
"hide": 
"high": 
"hill": 
"him": 
"his": 
"hit": 
"hobby": 
"hold": 
"hole": 
"holiday": 
"home": 
"hope": 
"horse": 
"hospital": 
"hot": 
"hotel": 
"hour": 
"house": 
"how": 
"hundred": 
"hungry": 
"hurry": 
"hurt": 
"husband": 
"I": 
"ice": 
"idea": 
"if": 
"important": 
"in": 
"increase": 
"inside": 
"into": 
"introduce": 
"invent": 
"invite": 
"iron": 
"is": 
"island": 
"it": 
"its": 
"jelly": 
"job": 
"join": 
"juice": 
"jump": 
"just": 
"keep": 
"key": 
"kill": 
"kind": 
"king": 
"kitchen": 
"knee": 
"knife": 
"knock": 
"know": 
"ladder": 
"lady": 
"lamp": 
"land": 
"large": 
"last": 
"late": 
"lately": 
"laugh": 
"lazy": 
"lead": 
"leaf": 
"learn": 
"leave": 
"left": 
"leg": 
"lend": 
"length": 
"less": 
"lesson": 
"let": 
"letter": 
"library": 
"lie": 
"life": 
"light": 
"like": 
"lion": 
"lip": 
"list": 
"listen": 
"little": 
"live": 
"lock": 
"lonely": 
"long": 
"look": 
"lose": 
"lot": 
"love": 
"low": 
"lower": 
"luck": 
"machine": 
"main": 
"make": 
"male": 
"man": 
"many": 
"map": 
"mark": 
"market": 
"marry": 
"matter": 
"may": 
"me": 
"meal": 
"mean": 
"measure": 
"meat": 
"medicine": 
"meet": 
"member": 
"mention": 
"method": 
"middle": 
"milk": 
"million": 
"mind": 
"minute": 
"miss": 
"mistake": 
"mix": 
"model": 
"modern": 
"moment": 
"money": 
"monkey": 
"month": 
"moon": 
"more": 
"morning": 
"most": 
"mother": 
"mountain": 
"mouth": 
"move": 
"much": 
"music": 
"must": 
"my": 
"name": 
"narrow": 
"nation": 
"nature": 
"near": 
"nearly": 
"neck": 
"need": 
"needle": 
"neighbour": 
"neither": 
"net": 
"never": 
"new": 
"news": 
"newspaper": 
"next": 
"nice": 
"night": 
"nine": 
"no": 
"noble": 
"noise": 
"none": 
"nor": 
"north": 
"nose": 
"not": 
"nothing": 
"notice": 
"now": 
"number": 
"obey": 
"object": 
"ocean": 
"of": 
"off": 
"offer": 
"office": 
"often": 
"oil": 
"old": 
"on": 
"one": 
"only": 
"open": 
"opposite": 
"or": 
"orange": 
"order": 
"other": 
"our": 
"out": 
"outside": 
"over": 
"own": 
"page": 
"pain": 
"paint": 
"pair": 
"pan": 
"paper": 
"parent": 
"park": 
"part": 
"partner": 
"party": 
"pass": 
"past": 
"path": 
"pay": 
"peace": 
"pen": 
"pencil": 
"people": 
"pepper": 
"per": 
"perfect": 
"period": 
"person": 
"petrol": 
"photograph": 
"piano": 
"pick": 
"picture": 
"piece": 
"pig": 
"pin": 
"pink": 
"place": 
"plane": 
"plant": 
"plastic": 
"plate": 
"play": 
"please": 
"pleased": 
"plenty": 
"pocket": 
"point": 
"poison": 
"police": 
"polite": 
"pool": 
"poor": 
"popular": 
"position": 
"possible": 
"potato": 
"pour": 
"power": 
"present": 
"press": 
"pretty": 
"prevent": 
"price": 
"prince": 
"prison": 
"private": 
"prize": 
"probably": 
"problem": 
"produce": 
"promise": 
"proper": 
"protect": 
"provide": 
"public": 
"pull": 
"punish": 
"pupil": 
"push": 
"put": 
"queen": 
"question": 
"quick": 
"quiet": 
"quite": 
"radio": 
"rain": 
"rainy": 
"raise": 
"reach": 
"read": 
"ready": 
"real": 
"really": 
"receive": 
"record": 
"red": 
"remember": 
"remind": 
"remove": 
"rent": 
"repair": 
"repeat": 
"reply": 
"report": 
"rest": 
"restaurant": 
"result": 
"return": 
"rice": 
"rich": 
"ride": 
"right": 
"ring": 
"rise": 
"road": 
"rob": 
"rock": 
"room": 
"round": 
"rubber": 
"rude": 
"rule": 
"ruler": 
"run": 
"rush": 
"sad": 
"safe": 
"sail": 
"salt": 
"same": 
"sand": 
"save": 
"say": 
"school": 
"science": 
"scissors": 
"search": 
"seat": 
"second": 
"see": 
"seem": 
"sell": 
"send": 
"sentence": 
"serve": 
"seven": 
"several": 
"sex": 
"shade": 
"shadow": 
"shake": 
"shape": 
"share": 
"sharp": 
"she": 
"sheep": 
"sheet": 
"shelf": 
"shine": 
"ship": 
"shirt": 
"shoe": 
"shoot": 
"shop": 
"short": 
"should": 
"shoulder": 
"shout": 
"show": 
"sick": 
"side": 
"signal": 
"silence": 
"silly": 
"silver": 
"similar": 
"simple": 
"since": 
"sing": 
"single": 
"sink": 
"sister": 
"sit": 
"six": 
"size": 
"skill": 
"skin": 
"skirt": 
"sky": 
"sleep": 
"slip": 
"slow": 
"small": 
"smell": 
"smile": 
"smoke": 
"snow": 
"so": 
"soap": 
"sock": 
"soft": 
"some": 
"someone": 
"something": 
"sometimes": 
"son": 
"soon": 
"sorry": 
"sound": 
"soup": 
"south": 
"space": 
"speak": 
"special": 
"speed": 
"spell": 
"spend": 
"spoon": 
"sport": 
"spread": 
"spring": 
"square": 
"stamp": 
"stand": 
"star": 
"start": 
"station": 
"stay": 
"steal": 
"steam": 
"step": 
"still": 
"stomach": 
"stone": 
"stop": 
"store": 
"storm": 
"story": 
"strange": 
"street": 
"strong": 
"structure": 
"student": 
"study": 
"stupid": 
"subject": 
"substance": 
"successful": 
"such": 
"sudden": 
"sugar": 
"suitable": 
"summer": 
"sun": 
"sunny": 
"support": 
"sure": 
"surprise": 
"sweet": 
"swim": 
"sword": 
"table": 
"take": 
"talk": 
"tall": 
"taste": 
"taxi": 
"tea": 
"teach": 
"team": 
"tear": 
"telephone": 
"television": 
"tell": 
"ten": 
"tennis": 
"terrible": 
"test": 
"than": 
"that": 
"the": 
"their": 
"then": 
"there": 
"therefore": 
"these": 
"thick": 
"thin": 
"thing": 
"think": 
"third": 
"this": 
"though": 
"threat": 
"three": 
"tidy": 
"tie": 
"title": 
"to": 
"today": 
"toe": 
"together": 
"tomorrow": 
"tonight": 
"too": 
"tool": 
"tooth": 
"top": 
"total": 
"touch": 
"town": 
"train": 
"tram": 
"travel": 
"tree": 
"trouble": 
"true": 
"trust": 
"try": 
"turn": 
"twice": 
"type": 
"uncle": 
"under": 
"understand": 
"unit": 
"until": 
"up": 
"use": 
"useful": 
"usual": 
"usually": 
"vegetable": 
"very": 
"village": 
"visit": 
"voice": 
"wait": 
"wake": 
"walk": 
"want": 
"warm": 
"wash": 
"waste": 
"watch": 
"water": 
"way": 
"we": 
"weak": 
"wear": 
"weather": 
"wedding": 
"week": 
"weight": 
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
"wrong": asj,
"year": nou,
"yes": same,
"yesterday": adv, 
"yet": adv,
"you": same,
"young": adj,
"your": same,
"zero": adj,
"zoo": nou
};


  var frr = function(s){
    s= String(s).toUpperCase();
    if(s.length> 15 ||  /[^MDCLXVI]/.test(s)) return NaN;
    var L= s.length,sum= 0,i= 0,next,val,
    R={
        M:1000,D:500,C:100,L:50,X:10,V:5,I:1
    };  
    while(i< L){
        val= s.charAt(i++);
        if(!R[val]) return NaN;
        val= R[val];
        next= R[(s.charAt(i) || 'N')] || 0;
        if(next> val) val*= -1;
        sum+= val;
    }
    return sum;
}

root.gnrl = function (intensity) {
  var ms = 36000000 / ( frr(intensity) || 9000 ), 
      b = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT),
      c, 
      a,

      rpl = function() {

      },

  return document.querySelectorAll(sel).forEach(function(node) {
    for (var b = document.createTreeWalker(node, NodeFilter.SHOW_TEXT), c, a, d = /[aeiou]/gi; b.nextNode();) a = b.currentNode, c = a.nodeValue, a.nodeValue = c.replace(d, rval)
  });
};

}(__SEED__));