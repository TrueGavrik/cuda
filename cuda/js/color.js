window.onload = function()  {
    let portfolioButton = document.getElementById('portfolio__button');
    let portfolio = document.getElementsByClassName('portfolio')[0];
    let colors = ['bisque', 'grey', 'darksalmon', 'rgb(43, 171, 150)', 'tomato', 'rgb(196, 140, 194)', '#aaa', '#FFAACC', '#ffdd99', 'rgb(122,111,110)'];
    portfolioButton.onclick = function() {
        portfolio.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};