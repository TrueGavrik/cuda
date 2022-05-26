function scrollTo(element) {
    window.scroll({
        left: 0,                              //зачем это?
        top: element.offsetTop,
        behavior: "smooth"
    })
}


let scrollButton = document.querySelector('#about');
let services = document.querySelector('.services');

scrollButton.addEventListener('click', () =>{
    scrollTo(services);
} )

let scrollButtonWork = document.querySelector('#work');
let team = document.querySelector('.team');

scrollButtonWork.addEventListener('click', () =>{
    scrollTo(team);
} )

let scrollButtonBlog = document.querySelector('#blog');
let portfolio = document.querySelector('.portfolio');

scrollButtonBlog.addEventListener('click', () =>{
    scrollTo(portfolio);
} )

let scrollButtonContact = document.querySelector('#contact');
let get = document.querySelector('.get');

scrollButtonContact.addEventListener('click', () =>{
    scrollTo(get);
} );


let scrollButtonHome = document.querySelector('#home');
let header = document.querySelector('.header');

scrollButtonHome.addEventListener('click', () =>{
    scrollTo(header);
} );