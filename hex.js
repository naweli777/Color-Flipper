const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color")


btn.addEventListener("click",function(){
    let hashcolor = "#";


    for(let i=0; i<6; i++ )
    {
        hashcolor += hex[getRandomNumber()];
    }
    color.textContent=hashcolor;
    document.body.style.backgroundColor = hashcolor;

    console.log({hashcolor})
})


function getRandomNumber()
{
    return Math.floor(Math.random()*hex.length)
}