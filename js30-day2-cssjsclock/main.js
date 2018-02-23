const second_hand = document.querySelector('.second-hand')
const minute_hand = document.querySelector('.min-hand')
const hour_hand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    second_hand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    minute_hand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360 + 90);
    hour_hand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // run every 1000ms
