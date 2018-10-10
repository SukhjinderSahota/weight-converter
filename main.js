// hide output
document.getElementById('output').style.visibility = "hidden";

document.getElementById('input').addEventListener('input', event => {
    let input = (event.target).value;
    //show output
    document.getElementById('output').style.visibility = "visible";
    
    document.getElementById('gramsOutput').innerHTML = input / 0.0022046;
    document.getElementById('kgOutput').innerHTML = input / 2.2046;
    document.getElementById('ozOutput').innerHTML = input * 16;
});
