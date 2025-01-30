//http://api.weatherapi.com/v1/current.json?key=0949e23381ba45ee96b175341252101&q=Allahabad&aqi=no
const temperaturefield=document.querySelector(".temp");
const locationfield=document.querySelector(".time_location p");
const conditionfield=document.querySelector(".condition p");
const searchfield=document.querySelector(".search_area");
const form=document.querySelector('form');

form.addEventListener("submit",searchForLocation)
let target='Allahabad'



const fetchResults=async(targetLocation)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=0949e23381ba45ee96b175341252101&q=${targetLocation}&aqi=no`
    const res=await fetch(url)
    const data=await res.json()
    console.log(data);
    let locationName=data.location.name
    let time=data.location.localtime
    let temp=data.current.temp_c
    let condition = data.current.condition.text
    updateDetails(temp,locationName,condition);
}

function updateDetails(temp,locationName,condition){

    temperaturefield.innerHTML=temp;
    locationfield.innerHTML=locationName;
    conditionfield.innerHTML=condition;
}

fetchResults(targetLocation)



function searchForLocation(e){
    e.preventDefault()
    target=searchfield.value 
    fetchResults(target)
}

