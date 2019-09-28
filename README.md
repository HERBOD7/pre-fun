 1.html==> 
    transitionend => when transition will be finished, then runfunction
    key => can set every thing with data-... that can access ti it, similar attr
    .play() => method that play audio file
    keydown => when key be down
    
2.hrml ===>
    new Date() => show time
    (new Date()).getSeconds() or getMinets() or getHour() or getFullYar() or ...
    transform => css attr that change a degres of elem
    
3.js ===>
    filter(arg, func) => that filter a array
    map(arg, fun) => do somthing for all elem of array
    sort(a, b) => sorting array
    reduce() => do something in all elem
    
4.html ==>
    --root => is elem that define in css and it include of css var that be change and can chanhge it with js
    range => is type of input that have range
    color => is type of input, include of color picker

5.html ===>
    transition => css attr that it be change and run when doing event
    transform => allow to do visual manipulation similar(rotate, skwing,scaling)
    scaling => effect that change size of elem
    translate => move elem in Y or X 
    prespective => it have effect for transform elem in 3D visual
    
6.html ==>
    text-transform ==> change a text captalize
    fetch() => is behavior promise and has then that can use it instead of ajax
    RegExp(pattern, flag) => check objec with a pattern and can set flag that include of i, g, u, m, s
    
7.html ===>
    array.some() => check one thing in array
    array.every() => check all elem of array and do thing on them
    array.find() => find thing in array
    array.findIndex => find index of obj and where is it
    array.slice() => change content of elem

8.html ===> 
    canvas => html tag that can drawing
    innerheight => js method that it include of window height
    innerwidth => js method that return window width
    srokStyle => canvas attr that include of color, gradiant or pattern
    
9.html ===>
    //can set $a var in second arg
    console.log('this is $a', 'a variable');
    //can set css in second arg
    console.log('%c this is', 'background: black; font-size: 20px');
    //warning
    console.warn('warning console');
    //error
    console.error('it's error');
    //info
    console.info('information console');
    //check boolean first is a boolean and seconf is a message
    console.assert('checking and testing');
    //clearing console
    console.clear();
    //view dom elemnt
    console.dir();
    //console group of obj
    obj.forEach(obj => {
        console.groupCollapsed(`${obj.key1}`);
        console.log(`name id ${obj.key2}`);
        console.log(`age is ${obj.key3}`);
        console.groupEnd(`${obj.key1}`);    
    });
    //show time of proccess
    console.time('similar fetch');
    //show data in a table
    console.table();

10.html ===> 
    //event on shiftKey => similar keypress or ..
    event.shifKey
    // when var not equal to 

11.html ===> 
    //method of video for play or pause video
    video.play or video.pause
    // show video current time
    video.currentTime
    //duratipn of video
    video.duration
    //fill tag
    flexBasis
    //there are events
    play, pause and timeupdate

12.html ===> 
    //slice part of array, var ...
    splice
    //include of something
    include
    //join elem of array
    join
    
13.html ===>
    transform
    translate
    transition
    scale
    opacity
    // scroll is event that when scoll be listen and can use it  spicific y or x
    .scroll, scrollY, scrollX
    //can find distance of elemt from top, right, left and bottom
    offsetTop, offsetBottom, offsetRight, offsetLeft
    //find height of height that show in screen
    innerHeight
    //when set var with not equal of self, means that false
    //calling func with lag
    setTimeOut(func, time);
    clearTimeOut

14.html ===>
    //when have to var that equal eachother, when change first, second not be change
    // if two equal var are array, when change one of them even second, another will be change because second is refrencess of one and finally both of them will be change
    // array2 = array1.slice() ==> it's the copy of array1 and not be update with change array1 and with change array2, array1 not be change
    [].concat(array1); ==> make copy of array1 without chang eachother
    [...array1] ===> similar above syntax
    array.from(array1) ===> similar above array
    object.assign({blank}, object that be copyed, {prop}) ===> take copy of another array without change eachother
    but it's not deep clone and with change one key of them, another will be change => then can use below sytax
    jaon.parse(json.stringify(obj)); ==> it's a deep clone of obj, stringify take string of obj and parse covert it to json that can use it similar array

15.html ===>
    localstreg and deligation
    this.reset(); => for reset form with out refresh
    map return an array and when use join(''), it will be str that convert to array
    localStoreg.setItem ===> set item to local storeg
    json.parse => arrat that in str, will be change to array
    e.target => show element that event call on it
    
    
