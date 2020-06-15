
// ease-in, so you see screen, then make it opaque? 

// let cover = document.getElementsByClassName("concon");
// cover.addEventListener("load", function(e){
// // opacity:0.5, except for ticket 
//     cover.style.opacity = "0.5";
// });

let concon = document.querySelector('.concon');
let ticket = document.querySelector('.ticket');
let con = document.querySelector('.container');
let exit = document.querySelector('#exit');

exit.addEventListener('click', function(){
    console.log(ticket.parentNode);
    concon.removeChild(ticket);
    con.style.opacity = "1";
});

