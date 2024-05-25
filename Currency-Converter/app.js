
let CurrURL = "https://www.amdoren.com/api/currency.php?api_key=52r79aTLiGm9hk8FYszcz7HgKNWYE4&from=";

const dropDown = document.querySelectorAll("select");
const btn = document.querySelector("button");
const inSelect = document.querySelector(".input select");
const outSelect = document.querySelector(".output select");
const outInput = document.querySelector(".output input");

for(let select of dropDown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected"
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected"
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".input input");
    let amtValue = amount.value;
    if(amtValue === "" || amtValue <1){
        amtValue = 1;
        amount.value = "1"
    };

    const url = `${CurrURL}${inSelect.value.toLowerCase()}&to=${outSelect.value.toLowerCase()}`;
    let response = await fetch(url);
    let data  = await response.json();
    let rate = data[outSelect.value.toLowerCase()];

    let finalAmount = amtValue*rate;
    outInput.value.innerText = finalAmount;
})
 
