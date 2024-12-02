// Components for #1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {

    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let telephone = document.getElementById("telephone").value;
    let major = document.getElementById("major").value;
    
    let x = `Hello! ${name}, you are from ${city}, ${state} ${zip}, pursuing ${major} with contact number ${telephone}.`;
    document.getElementById("output").innerHTML = x;
});

// Components for #2
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let sales = parseFloat(document.getElementById("sales").value);
    let final = sales * 0.23

    let x = `The Profit is: ${final}`;
    document.getElementById("output2").innerHTML = x;
});

// Components for #3
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    const speed = 60;
    const times = [5, 8, 12];
    const outputIds = ["output21", "output22", "output222"];

    for (let i = 0; i < times.length; i++) {
        let distance = speed * times[i];
        document.getElementById(outputIds[i]).textContent = distance;
    }
});

// Components for #4
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    const miles = document.getElementById("miles").value;
    const gas = document.getElementById("gas").value;
    const MPG = miles/gas;

    let mp = `The Mile-per-Gallon(MPG) is: ${MPG}`;
    document.getElementById("outputmpg").innerHTML = mp;
});

// Components for #5
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    let cel = document.getElementById("celsius").value;
    let fahren = ((9/5)*cel) + 32;

    let temp = `${cel} Celsius is: ${fahren} Fahrenheit`;
    document.getElementById("outputtemp").innerHTML = temp;
});
// Components for #6
const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    //3000calo per bag
    //75cal per cookie
    let cookie = document.getElementById("cookie").value;
    let comput = (300*10)/40
    let comp = comput*cookie;

    let coo = `Total Calorie Consumed is: ${comp}`;
    document.getElementById("outputcook").innerHTML = coo;
});

// Components for #7
const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
    const males = parseFloat(document.getElementById("male").value);
    const females = parseFloat(document.getElementById("female").value);

    const totalPopulation = males + females;

    const malePer = (males / totalPopulation * 100).toFixed(2);
    const femalePer = (females / totalPopulation * 100).toFixed(2);

    const result = `The percentage of males is: ${malePer}% and females is: ${femalePer}%`;
    document.getElementById("output7").textContent = result;
});

