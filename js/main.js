    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const titleEl = document.getElementById("title");


    // Ottengo la data che mi interessa per il countdown
    let countdown = new Date("2023-02-04 09:30:0000").getTime();
    console.log("Mancano: " + countdown + " ms");

    // Intervallo orologio
    const clockCountdown = setInterval(counterTomorrow, 1000);
    function counterTomorrow() {

    // Ottengo la data di oggi
    let righNow = new Date().getTime();
    // console.log('ms di oggi: ' + righNow);

    // Calcolo quanti millisecondi mancano tra oggi e domani alle 9:30
    let tomorrow = countdown - righNow;

    const seconds = Math.floor(tomorrow / 1000) % 60;
    const minutes = Math.floor(tomorrow / (1000 * 60)) % 60;
    const hours = Math.floor(tomorrow / (1000 * 60 * 60)) % 24;
    const days = Math.floor(tomorrow / (1000 * 60 * 60 * 24));

    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    daysEl.innerHTML = (days < 10) ? "0" + days : days;

}

	