function girth() {
    // var l = 0; 
    var n = 1;  
    
    var h = Number(document.getElementById("height").value)*2.54;
    var w = Number(document.getElementById("width").value)*2.54;
    var l = Number(document.getElementById("length").value)*2.54;
    var t = Number(document.getElementById("type").value);
    console.log("h= "+h+"w= "+w+"l= "+l);
    // Calculate Number of boards and girth
    var i = 1;
    do {
        var s = (((h*i)+w)*2+l);
        i++;
        console.log(i);
    }
    while (s < 270);
    i--;

    var s = (((h*i)+w)*2+l); //girth calculation
    var actual = ((h*w*l)*t);
    if ((actual*i)>29000) {
        var maxBoards = Math.floor(29000/actual);
        document.getElementById("boards").value = maxBoards; // assign value of boards
        document.getElementById("totalWeight").value = Number.parseFloat((actual*maxBoards)/1000).toPrecision(4);
    }
    else {
        document.getElementById("boards").value = i;
        document.getElementById("totalWeight").value = Number.parseFloat((actual*i)/1000).toPrecision(4);
    }
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