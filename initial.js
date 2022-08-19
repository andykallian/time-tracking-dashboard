/* GETTING ELEMENTS */

const workCurrent = document.querySelector("#work-current")
const workPrevious = document.querySelector("#work-previous")

const playCurrent = document.querySelector("#play-current")
const playPrevious = document.querySelector("#play-previous")

const studyCurrent = document.querySelector("#study-current")
const studyPrevious = document.querySelector("#study-previous")

const exerciseCurrent = document.querySelector("#exercise-current")
const exercisePrevious = document.querySelector("#exercise-previous")

const socialCurrent = document.querySelector("#social-current")
const socialPrevious = document.querySelector("#social-previous")

const selfcareCurrent = document.querySelector("#selfcare-current")
const selfcarePrevious = document.querySelector("#selfcare-previous")



fetch("https://routine-time-tracking.s3.sa-east-1.amazonaws.com/data.json")
    .then((response) =>{
        return response.json()
    }).then((data) =>{
        console.log(data)
    })