function show_price(element) {
    let tooltip = element.querySelector('.tooltip');
    tooltip.style.display = 'block';

}
function hide_price(element) {
    let tooltip = element.querySelector('.tooltip');;
    tooltip.style.display = 'none';
}

function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    const currentTheme = themeLink.getAttribute('href');

    if (currentTheme === 'index.css') {
        themeLink.href = 'dark.css';
        localStorage.setItem('selectedTheme', 'dark');
    } else {
        themeLink.href = 'index.css';
        localStorage.setItem('selectedTheme', 'light');
    }
}

window.onload = function () {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    const themeLink = document.getElementById('theme-style');
    themeLink.href = (savedTheme === 'dark') ? 'dark.css' : 'index.css';
}