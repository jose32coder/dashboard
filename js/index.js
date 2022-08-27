const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');
const middle1 = document.querySelector('.middle-1');
const middle2 = document.querySelector('.middle-2');
const middle3 = document.querySelector('.middle-3');
const btn1 = document.querySelector('.venta');
const btn2 = document.querySelector('.pvp');
const btn3 = document.querySelector('.ganancia');
const btnM1 = document.querySelector('.btn-modal-1');
const btnM2 = document.querySelector('.btn-modal-2');
const modal = document.querySelector('.container-modal');
const disabledBtn = document.querySelector('.disabled');


middle2.style.display='none';
middle3.style.display='none';

// Mostrar barra lateral
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Ocultar barra lateral
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Cambiar color de página
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
    const dark = document.querySelector('.sidebar');
    dark.classList.toggle('option2');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Desactivar la totalidad de ventas, costos y ganancias

middle2.style.display='none';
middle3.style.display='none';
btn1.addEventListener('click', e =>{
    middle1.style.display = 'block';
    middle2.style.display = 'none';
    middle3.style.display = 'none';
    e.preventDefault();
});
btn2.addEventListener('click', e =>{
    middle1.style.display = 'none';
    middle2.style.display = 'block'
    middle3.style.display = 'none';
    e.preventDefault();
});
btn3.addEventListener('click', e =>{
    middle1.style.display = 'none';
    middle2.style.display = 'none'
    middle3.style.display = 'block';
    e.preventDefault();
});


btnM1.addEventListener('click', e =>{
    modal.style.display = 'flex';
    btnM1.style.display = 'none'
    btnM2.style.display = 'flex';
})
btnM2.addEventListener('click', e =>{
    modal.style.display = 'none';
    btnM1.style.display = 'flex'
    btnM2.style.display = 'none';
})



Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td class='${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}'>${order.shipping}</td>
                    <td>${order.dateIni}</td>
                    <td>${order.dateFin}</td>
                    <td class='primary'>Details</td>
                    `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
})