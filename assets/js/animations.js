var historyContent = document.querySelector('#history-content');
var m3 = document.getElementsByClassName('.our-history');

document.addEventListener('scroll', () => {
    if (window.scrollY >= historyContent.getBoundingClientRect().top) {
        historyContent.classList.add('opacity');
        historyContent.classList.add('fromLeftToRight-animation');
    }
})


// Toggle Bars Switch
var toggleBars = document.querySelector('.toggle-bars');
// Toggle Close/Open Function
toggleBars.addEventListener('click', () => {
    toggleBars.classList.toggle('change')
})
