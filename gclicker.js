var score = 0;
var numsenor = 0;
function buy(c)
{
if(c == 'senor')
{
    if(score > 49)
    {
        score = score - 50;
        document.getElementById("uscore").innerHTML = "Tienes " + score + " galletas";
        numsenor++;
        autosenor();
    }
}
}
function umclick()
{
    score++;
    //alert(score);
    document.getElementById("uscore").innerHTML = "Tienes " + score + " galletas";
}
function autosenor()
{
    var point = numsenor*10;
    score = score + point;
    setTimeout(autosenor(),10000);
}
