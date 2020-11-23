let speed;
let  distance;
let time;
function calculateTime(speed){
    distance = speed * 80;
    return speed < 0? time = 0:time = distance / speed ;
           
}
console.log(calculateTime(5));