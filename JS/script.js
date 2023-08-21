// sidebar

document.querySelector('.toggle-btn').addEventListener('click',function(){
    // document.body.classList.add("active");
    document.querySelector('.sidebar').classList.toggle('d-none')
    
});













// counter
setInterval(() => {
    let counter=new Date('dec 30, 2023 23:59:59').getTime()
// console.log(counter);

let timenow=new Date().getTime()

let timediff=counter - timenow

let days=Math.floor(timediff/1000/60/60/24)

let hours = Math.floor(timediff %(1000*60*60*24) /1000/3600)


let minutes=Math.floor(timediff %(1000*60*60)/1000/60)


let seconds= Math.floor(timediff %(1000*60)/1000)
    // console.log(seconds);

document.querySelector('.days').innerHTML=days +' D';
document.querySelector('.hours').innerHTML=hours +' h';
document.querySelector('.minutes').innerHTML=minutes +' m';
document.querySelector('.seconds').innerHTML=seconds +' s';
}, 1000);


addEventListener('input',function(){

})


