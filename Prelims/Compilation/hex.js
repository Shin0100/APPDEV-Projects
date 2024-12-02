const colors = [
    "#00FF00", // Green
    "#FF0000", // Red
    "#FFFF00", // Yellow
    "#FFFFFF", // White
    "#0000FF", // Blue
    "#A52A2A", // Brown
    "#000000", // Black
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#808080", // Gray
    "#00FFFF", // Cyan
    "#FFD700", // Gold
    "#8B4513", // SaddleBrown
    "#4B0082", // Indigo
    "#7FFF00", // Chartreuse
    "#DC143C", // Crimson
    "#FF4500", // OrangeRed
    "#6A5ACD", // SlateBlue
    "#2E8B57"  // SeaGreen
  ];
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