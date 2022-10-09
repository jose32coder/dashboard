const themeToggler = document.querySelector('.theme-toggler');

cambiarTema()

function cambiarTema(){
    themeToggler.addEventListener('click', () =>{
        document.body.classList.toggle('dark-theme-variables');
        const dark = document.querySelector('.sidebar');
        dark.classList.add('option2');

        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    
        if (document.body.classList.contains('dark-theme-variables')) {
            localStorage.setItem('dark-mode', 'true');
        }
        else{
            localStorage.setItem('dark-mode', 'false');
        }
    
    });


    // Obtener modo acual


    if (localStorage.getItem("dark-mode") === null){
        localStorage.setItem("dark-mode", "false"); 
    }
    let localData = localStorage.getItem("dark-mode"); 
    if (localData == "false"){
        
        document.body.classList.remove('dark-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.add('active');
        themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
    }
    else if (localData == "true"){

        document.body.classList.add('dark-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
        themeToggler.querySelector('span:nth-child(2)').classList.add('active');
    }


}