function girth() {
    // var l = 0; 
    var n = 1;  
    
    var h = Number(document.getElementById("height").value)*2.54;
    var w = Number(document.getElementById("width").value)*2.54;
    var l = Number(document.getElementById("length").value)*2.54;
    var t = Number(document.getElementById("type").value);
    console.log("h= "+h+"w= "+w+"l= "+l);
    // Calculate Number of boards and girth
    var i = 0;
    do {
        var s = (((h*2)+(w*2))*i+l);
        i++;
    }
    while (s < 300);
    i--;
    i--;
    var s = (((h*2)+(w*2))*i+l); //girth calculation
    document.getElementById("boards").value = i; // assign value of boards
    var actual = ((h*w*l)*t);
    document.getElementById("actual").value = Math.ceil(actual);

    var w = (h*w*l)/6000;
    console.log(w);
    document.getElementById("weight").value = Number.parseFloat(w).toPrecision(2)*1000;
    
    if (s >= 300) {
        document.getElementById("result").classList.add('too-big');
        document.getElementById("result").classList.remove('empty');

    }
    else
    {
        document.getElementById("result").classList.add('good');
        document.getElementById("result").classList.remove('too-big');
        document.getElementById("result").classList.remove('empty');
    }
    return document.getElementById("answer").value = Math.ceil(s);
}