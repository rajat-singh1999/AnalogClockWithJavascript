
let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');

setInterval(rotate, 1000);

function rotate() {

    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    const secondsFraction = seconds / 60;
    const minutesFraction = (secondsFraction + minutes) / 60;
    const hoursFraction = (minutesFraction + hours) / 12;
    
    const secondsRotate = secondsFraction * 360;
    const minutesRotate = minutesFraction * 360;
    const hoursRotate = hoursFraction * 360;

    secondHand.style.transform = `rotate(${secondsRotate}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
    hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

function changeColor() {
    color1 = ["#13036b", "#03506f", "#bbbbbb", "#ffe3d8", "#d1c145", "#222831", "#9f5f80"]
    color2 = ["#fd3a69", "#03506f", "#bbbbbb", "#ffe3d8", "#d1c145", "#222831", "#9f5f80"]
    color3 = ["#9d0190", "#03506f", "#bbbbbb", "#ffe3d8", "#d1c145", "#222831", "#9f5f80"]

    backgroundColorIndex = parseInt(document.getElementById("backgroundColor").value);
    document.getElementById("bodyBackground").style.backgroundColor = color1[backgroundColorIndex];

    clockColorIndex = parseInt(document.getElementById("clockColor").value);
    document.getElementById("clockBackground").style.backgroundColor = color2[clockColorIndex];

    clockBorderColorIndex = parseInt(document.getElementById("clockBorderColor").value);
    document.getElementById("clockBackground").style.borderColor = color3[clockBorderColorIndex];
}
