const themeToggler = document.querySelector('.theme-toggler');
const themeTogglerMobile = document.querySelector('.theme-toggler-mobile');
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('inactive');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('inactive');
})
