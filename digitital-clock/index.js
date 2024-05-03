function updateClock(){
    const now= new Date();
    let hour=now.getHours().toString().padStart(2,0);
    const AmPm= hour>12? "PM" : "AM";
    hour=hour%12|| 12;
    //||: This is the logical OR operator. 
    //It returns the value of its first operand if the operand is truthy, otherwise, 
    //it returns the value of its second operand
    hour=hour.toString().padStart(2,0);
    const minute=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hour}: ${minute} :${second} ${AmPm}` ;
    document.getElementById("clock").textContent = timeString;
    
}
updateClock();
setInterval(updateClock, 1000);