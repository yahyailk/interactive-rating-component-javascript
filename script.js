"use strict"

let submitButton = document.querySelector("#submit");
let rateCard = document.querySelector(".card")
let container = document.querySelector(".flex")
let rates =document.querySelectorAll(".rating")

let rated = 0;

rates.forEach((rate) =>{
    rate.addEventListener("click", getRate)
})

function getRate (e) {

    rates.forEach((rate) => {
        if(rate.classList.contains("selected")){
            rate.classList.replace("selected", "unselected")
        }
    })

    e.target.classList.replace("unselected", "selected")

    rated = e.target.textContent
    
}

submitButton.addEventListener("click", submitRate)
    
function submitRate (){
    
    rateCard.style.display = "none"

    let resultCard = `
        <div class="card-2">
            <img src="./images/illustration-thank-you.svg" alt="" id="result_img">
            <p id="rate">You selected ${rated} out of 5</p>
            <p id="thanks">Thank you!</p>
            <p id="detail">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    `
    container.insertAdjacentHTML("beforeend", resultCard)
}

