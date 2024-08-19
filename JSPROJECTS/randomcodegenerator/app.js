const colors = [
    "He who is brave is free. — Seneca", 
    "To be everywhere is to be nowhere. — Seneca", 
    "Don’t waste time on what you cannot control or change. — Meditations",
    "No man is free who is not master of himself. — Epictetus",
    "It's not what happens to you, but how you react to it that matters. —Epictetus",
    "Accept the things to which fate binds you, and love the people with whom fate brings you together. —Marcus Aurelius", 
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