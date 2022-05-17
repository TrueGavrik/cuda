const modal = $.modal()

 document.querySelector("#buttonHead").onclick = function(){
     modal.open()
 };

 document.querySelector("#modal__window-close").onclick = function(){
    modal.close()
};

 document.querySelector("#modal__window-cancel").onclick = function(){
    modal.close()
};
/*--------------scroll------------------ */

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}


let scrollButton = document.querySelector('#about');
let services = document.querySelector('.services');

scrollButton.addEventListener('click', () =>{
    scrollTo(services);
} )
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}


let scrollButton1 = document.querySelector('#work');
let team = document.querySelector('.team');

scrollButton1.addEventListener('click', () =>{
    scrollTo(team);
} )

let scrollButton2 = document.querySelector('#blog');
let portfolio = document.querySelector('.portfolio');

scrollButton2.addEventListener('click', () =>{
    scrollTo(portfolio);
} )

let scrollButton3 = document.querySelector('#contact');
let get = document.querySelector('.get');

scrollButton3.addEventListener('click', () =>{
    scrollTo(get);
} );


let scrollButton4 = document.querySelector('#home');
let header = document.querySelector('.header');

scrollButton4.addEventListener('click', () =>{
    scrollTo(header);
} );

/*------------------changeColor---------------------------- */

window.onload = function() {
    let portfolioButton = document.getElementById('portfolio__button');
    let portfolio = document.getElementsByClassName('portfolio')[0];
    let colors = ['bisque', 'grey', 'darksalmon', 'rgb(43, 171, 150)', 'tomato', 'rgb(196, 140, 194)', '#aaa', '#FFAACC', '#ffdd99', 'rgb(122,111,110)'];
    portfolioButton.onclick = function() {
        portfolio.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};


/*----------------burger------------------------ */




const burger = document.querySelector('.top-menuburger ')

burger.addEventListener('click', () => burger.classList.toggle('active'));

const burger1 = document.querySelector('.header__top-menu ')

burger.addEventListener('click', () => burger1.classList.toggle('active'));