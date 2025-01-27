//http://api.weatherapi.com/v1/current.json?key=0949e23381ba45ee96b175341252101&q=Allahabad&aqi=no
const temperaturefield=document.querySelector(".temp");
const locationfield=document.querySelector(".time_location p");
const dateandTimefield=document.querySelector(".time_location span");
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
    updateDetails(temp,locationName,time,condition);
}

function updateDetails(temp,locationName,time,condition){
    let splitDate=time.split(' ')[0]
    let splitTime=time.split(' ')[1]
    let currentDay=getDayName(new Date(splitDate).getDay())

    temperaturefield.innerHTML=temp;
    locationfield.innerHTML=locationName;
    dateandTimefield.innerHTML=`${splitDate} ${currentDay} ${splitTime}`
    conditionfield.innerHTML=condition;
}

fetchResults(targetLocation)

function getDayName(number){
    switch(number){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"

    }
}

function searchForLocation(e){
    e.preventDefault()
    target=searchfield.value 
    fetchResults(target)
}

