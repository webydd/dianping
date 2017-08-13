(function (des) {
    var win = document.documentElement.style.width||document.body.style.width,
        ratio = win/des*100;
    document.documentElement.style.fontSize = ratio + 'px';
})(750)