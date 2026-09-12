/* =========================================
   REAL TIME CLOCK + DATE
========================================= */

function updateClock() {

    const now = new Date();


    /* ---------- TIME ---------- */

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();


    let period = hours >= 12
        ? "PM"
        : "AM";


    hours = hours % 12;

    hours = hours === 0
        ? 12
        : hours;


    hours =
        String(hours).padStart(2, "0");

    minutes =
        String(minutes).padStart(2, "0");

    seconds =
        String(seconds).padStart(2, "0");


    const timeText =
        `${hours}:${minutes}:${seconds} ${period}`;


    document.getElementById("time")
        .textContent = timeText;



    /* ---------- DATE ---------- */

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    const day =
        days[now.getDay()];


    const month =
        months[now.getMonth()];


    const date =
        now.getDate();


    const year =
        now.getFullYear();


    const dateText =
        `${day}, ${month} ${date}, ${year}`;


    document.getElementById("date")
        .textContent = dateText;

}


/* Run immediately */

updateClock();


/* Update every second */

setInterval(
    updateClock,
    1000
);


/* =========================================
   MENU BUTTON
========================================= */

function openSection(section) {

    if (section === "pdf") {

        window.location.href =
            "pdf-library.html";

    } else {

        alert(
            "The " +
            section +
            " section will be added next."
        );

    }

}