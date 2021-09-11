// ***** COUNTDOWN PROJECT *****

const countdown = () => {
    const dateToCount = new Date("31 December, 2021 00:00:00").getTime(); // ms
    const currentDate = new Date().getTime();   
    const leftToCount = dateToCount - currentDate; 

    const seconds = 1000; 
    const minutes = seconds * 60;
    const hours = minutes * 60; 
    const days = hours * 24;

    let countDays = Math.floor(leftToCount / days);
    let countHours = Math.floor((leftToCount % days) / hours); 
    let countMinutes = Math.floor((leftToCount % hours) / minutes);
    let countSeconds = Math.floor((leftToCount % minutes) / seconds); 

    // console.log(countDays, 
    //             countHours, 
    //             countMinutes, 
    //             countSeconds);

    countDays = countDays < 10 ? "0" + countDays : countDays;
    countHours = countHours < 10 ? "0" + countHours : countHours;
    countMinutes = countMinutes < 10 ? "0" + countMinutes : countMinutes;
    countSeconds = countSeconds < 10 ? "0" + countSeconds : countSeconds;

    document.getElementById("days").innerHTML = countDays;            
    document.getElementById("hours").innerHTML = countHours;            
    document.getElementById("minutes").innerHTML = countMinutes;            
    document.getElementById("seconds").innerHTML = countSeconds;

};

setInterval(countdown, 1000);


// UPLOAD project to GitHub Repository

