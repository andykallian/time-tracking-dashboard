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

const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")

/* Dealing with API (AWS) with fetch */

fetch("https://routine-time-tracking.s3.sa-east-1.amazonaws.com/data.json")
    .then((response) =>{
        return response.json()
    }).then((data) =>{
        
        // console.log(data) you can access file with this console.log

        daily.addEventListener("click", function(){
            workCurrent.innerHTML = `${data[0].timeframes.daily.current}hrs`
            workPrevious.innerHTML = `Last Week - ${data[0].timeframes.daily.previous}hrs`

            playCurrent.innerHTML = `${data[1].timeframes.daily.current}hrs`
            playPrevious.innerHTML = `Last Week - ${data[1].timeframes.daily.previous}hrs`

            studyCurrent.innerHTML = `${data[2].timeframes.daily.current}hrs`
            studyPrevious.innerHTML = `Last Week - ${data[2].timeframes.daily.previous}hrs`

            exerciseCurrent.innerHTML = `${data[3].timeframes.daily.current}hrs`
            exercisePrevious.innerHTML = `Last Week - ${data[3].timeframes.daily.previous}hrs`

            socialCurrent.innerHTML = `${data[4].timeframes.daily.current}hrs`
            socialPrevious.innerHTML = `Last Week - ${data[4].timeframes.daily.previous}hrs`

            selfcareCurrent.innerHTML = `${data[5].timeframes.daily.current}hrs`
            selfcarePrevious.innerHTML = `Last Week - ${data[5].timeframes.daily.previous}hrs`
        })
        weekly.addEventListener("click", function(){
            workCurrent.innerHTML = `${data[0].timeframes.weekly.current}hrs`
            workPrevious.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`

            playCurrent.innerHTML = `${data[1].timeframes.weekly.current}hrs`
            playPrevious.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`

            studyCurrent.innerHTML = `${data[2].timeframes.weekly.current}hrs`
            studyPrevious.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`

            exerciseCurrent.innerHTML = `${data[3].timeframes.weekly.current}hrs`
            exercisePrevious.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`

            socialCurrent.innerHTML = `${data[4].timeframes.weekly.current}hrs`
            socialPrevious.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`

            selfcareCurrent.innerHTML = `${data[5].timeframes.weekly.current}hrs`
            selfcarePrevious.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`
        })
        monthly.addEventListener("click", function(){
            workCurrent.innerHTML = `${data[0].timeframes.monthly.current}hrs`
            workPrevious.innerHTML = `Last Week - ${data[0].timeframes.monthly.previous}hrs`

            playCurrent.innerHTML = `${data[1].timeframes.monthly.current}hrs`
            playPrevious.innerHTML = `Last Week - ${data[1].timeframes.monthly.previous}hrs`

            studyCurrent.innerHTML = `${data[2].timeframes.monthly.current}hrs`
            studyPrevious.innerHTML = `Last Week - ${data[2].timeframes.monthly.previous}hrs`

            exerciseCurrent.innerHTML = `${data[3].timeframes.monthly.current}hrs`
            exercisePrevious.innerHTML = `Last Week - ${data[3].timeframes.monthly.previous}hrs`

            socialCurrent.innerHTML = `${data[4].timeframes.monthly.current}hrs`
            socialPrevious.innerHTML = `Last Week - ${data[4].timeframes.monthly.previous}hrs`

            selfcareCurrent.innerHTML = `${data[5].timeframes.monthly.current}hrs`
            selfcarePrevious.innerHTML = `Last Week - ${data[5].timeframes.monthly.previous}hrs`
        })   
    })