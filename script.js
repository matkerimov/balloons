// const circle = document.querySelector(".circle")
// const green = document.querySelector(".green")
// const dell = document.querySelector(".delete")
// const box = document.querySelector(".box")
//
//
// circle.addEventListener("click", () => {
//     box.classList.toggle("border")
// })
//
// green.addEventListener("click", (event) => {
//     box.classList.toggle("color")
// })
//
// dell.addEventListener("click", () => {
//     box.classList.toggle("none")
// })

const balloons = document.querySelectorAll(".balloon")
const notBalloon = document.querySelectorAll(".not-balloon")
const refresh = document.querySelector(".refresh")
// const refresh = document.querySelector(".change-balloons")
let index = 0

balloons.forEach(elem => {
    elem.addEventListener("click", (event) => {
        notBalloon[index].src = event.target.src
        index++
    })
})

refresh.addEventListener("click", () => {
    // notBalloon.src = ""
    // notBalloon.remove(notBalloon)
    // refresh.parentNode.removeChild(refresh) работает с багами
    // notBalloon.style.display='none'

notBalloon.forEach(item =>{
    item.src = "./balloons/standard_white.gif"

})
  index = 0
})


notBalloon.forEach(elem =>{
    elem.addEventListener("click",(event)=>{
        elem.src = "./balloons/standard_white.gif"
         balloons.forEach(item =>{
             item.addEventListener("click", (event)=>{

             })
         })
    })
})














