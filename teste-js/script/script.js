function desvia(t) {
    var btn = t;
    console.log(btn);
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("desviei");
}
randomNumber(10, 90)
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}