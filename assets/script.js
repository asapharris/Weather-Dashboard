var today = dayjs().format('MM/DD/YYYY');
var tomorrow = dayjs().format('MM/DD/YYYY');
var thirdDay = dayjs().format('MM/DD/YYYY');
var fourthDay = dayjs().format('MM/DD/YYYY');
var fifthDay = dayjs().format('MM/DD/YYYY');
var currentDay = document.querySelector("#current-card");
var dayOne = document.getElementById("#day-one");
var dayTwo = document.getElementById("#day-two");
var dayThree = document.getElementById("#day-three");
var dayFour = document.getElementById("#day-four");
var dayFive = document.getElementById("#day-five");
var apiKey = "f2e5e5a578546c385089a65f98738038";
var weather =  src="api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=";

currentDay.innerHTML = today;
console.log(today);

