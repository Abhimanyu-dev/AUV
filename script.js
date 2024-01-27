const onClick = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("body").style.backgroundColor = `#${randomColor}`
    
}