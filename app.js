const btn = document.querySelector("#btn"),
    color = document.querySelector(".color");

// btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = colors[getColor()]
//     console.log(200);
//     color.innerHTML = colors[getColor()]
// })

// const colors = [
//     "#1abc9c",
//     "#2ecc71",
//     "#2980b9",
//     "#2c3e50",
//     "#c0392b",
// ]


// function getColor() {
//     return Math.floor(Math.random() * colors.length)
// }

// console.log(getColor());


const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];






btn.addEventListener("click", () => {
    let hexColor = generate()
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor
})
s
function generate() {
    let hexColor = "#"

    for (i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    return hexColor;

}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}
