
function functionUpperCase(){
    let fjalet = document.getElementById('upper').innerHTML;
    let fjalet1 = fjalet.toUpperCase();
    document.getElementById('upper').innerHTML = fjalet1;
}

function functionConcat(){
    let fjala1 = 'Mount ';
    let fjala2 = 'Lassen ';
    let fjalet = fjala1.concat(fjala2);

    document.getElementById("concatt").innerHTML = fjalet;
}