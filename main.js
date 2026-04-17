
setInterval(function () {
    let currentTime = new Date()

    let time = currentTime.getTime()

    let hours = currentTime.getHours()
    if (hours < 10) {
        hours = "0" + hours
    }

    let minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let seconds = currentTime.getSeconds()
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    function countdown(year, month, day) {

        let targetTime = new Date(year, month, day)
        let difference = targetTime - currentTime.getTime()

        diffSec = difference / 1000
        diffMin = diffSec / 60
        diffHour = diffMin / 60
        diffDay = diffHour / 24

        let newSec1 = Math.trunc(diffSec) % 60
        let newMin1 = Math.trunc(diffMin) % 60
        let newHour1 = Math.trunc(diffHour) % 24
        let newDay1 = Math.trunc(diffDay)

        if (newSec1 < 10) {
            newSec1 = "0" + newSec1
        }

        if (newMin1 < 10) {
            newMin1 = "0" + newMin1
        }

        if (newHour1 < 10) {
            newHour1 = "0" + newHour1
        }

        if (newDay1 < 10) {
            newDay1 = "0" + newDay1
        }

        if (difference > 0) {
            return newDay1 + ":" + newHour1 + ":" + newMin1 + ":" + newSec1
        } else {
            return "RELEASED"
        }
    }

    $("#clock1").text(countdown(2026, 2, 20))
    $("#clock2").text(countdown(2026, 3, 24))
    $("#clock3").text(countdown(2026, 4, 22))
    $("#clock4").text(countdown(2026, 5, 12))
    $("#clock5").text(countdown(2026, 5, 19))
    $("#clock6").text(countdown(2026, 5, 26))
    $("#clock7").text(countdown(2026, 6, 17))
    $("#clock8").text(countdown(2026, 6, 31))
    $("#clock9").text(countdown(2026, 9, 2))
    $("#clock10").text(countdown(2026, 9, 9))
    $("#clock11").text(countdown(2026, 11, 18))
    $("#clock12").text(countdown(2026, 11, 18))

}, 1000)