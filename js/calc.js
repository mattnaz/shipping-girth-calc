function girth() {
    // var l = 0; 
    var n = 1;  
    
    var h = Number(document.getElementById("height").value)*2.54;
    var w = Number(document.getElementById("width").value)*2.54;
    var l = Number(document.getElementById("length").value)*2.54;
    var n = Number(document.getElementById("boards").value);

    if (n > null) {
        var s = (((h*2)+(w*2))*n+l);
    }
    else {
        var s = (((h*2)+(w*2))+l);
    };
    if (s >= 300) {
        document.getElementById("result").classList.add('too-big')
        document.getElementById("result").classList.remove('empty')

    }
    else
    {
        document.getElementById("result").classList.add('good')
        document.getElementById("result").classList.remove('too-big')
        document.getElementById("result").classList.remove('empty')
    }
    return document.getElementById("answer").value = Math.ceil(s);
}