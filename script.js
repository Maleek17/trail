const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
function updateDateTime(){
    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    
    dayOfTheWeekElement.textContent = currentDay;
    
    // const currentUTCTime = new Date().toUTCString();
    // utcTimeElement.textContent = currentUTCTime;
    const currentUTCTimeInMilliseconds = new Date().getTime();
    // const currentUTCTimeString = currentUTCTimeInMilliseconds.toString(); 
    utcTimeElement.textContent = currentUTCTimeInMilliseconds;
    // utcTimeElement.textContent = currentUTCTimeString;
}


updateDateTime();

setInterval(updateDateTime, 1000);