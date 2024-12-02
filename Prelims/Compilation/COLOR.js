const colors = ["green", "red", "yellow", "white","blue", "pink", "black"
]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {

    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors [randomNumber]
}) 
getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)

}
