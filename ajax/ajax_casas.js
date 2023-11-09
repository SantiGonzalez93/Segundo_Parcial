
document.querySelector('#boton__1').addEventListener('click', function () {
    traerDatos('1');
});
document.querySelector('#boton__2').addEventListener('click', function () {
    traerDatos('2');
});
document.querySelector('#boton__3').addEventListener('click', function () {
    traerDatos('3');
});
document.querySelector('#boton__4').addEventListener('click', function () {
    traerDatos('4');
});
document.querySelector('#boton__5').addEventListener('click', function () {
    traerDatos('5');
});
document.querySelector('#boton__6').addEventListener('click', function () {
    traerDatos('6');
});

function traerDatos(varexterna) {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'json/casas.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let casas = JSON.parse(this.responseText);
            console.log(casas.tamaño);
            let respuesta = document.querySelector(`#respuesta${varexterna}`);
            respuesta.innerHTML = '';

            for (let item of casas) {
                i = varexterna;
                if (`tamaño${i}` in item && `precio${i}` in item && `descripcion${i}` in item && `imagen${i}` in item) {
                    respuesta.innerHTML += `
                    <tr>${item[`tamaño${i}`]}</tr>
                    <br>
                    <tr >${item[`precio${i}`]}</tr>
                    <br>
                    <tr>${item[`descripcion${i}`]}</tr>
                    <br>
                    <img src="${item[`imagen${i}`]}" height="50px" width="50px" alt="">
                `;
                }

            }
        }

    }

}


document.getElementById('buscador').addEventListener('input', function(e) {
    filtrarElementos();
});

document.addEventListener('click', function(e) {
    const buscador = document.getElementById('buscador');


    if (!buscador.contains(e.target) && buscador.value.trim() === "") {
        
        filtrarElementos();
    }
});

function filtrarElementos() {
    const valorBusqueda = parseFloat(document.getElementById('buscador').value) || 0;

    document.querySelectorAll('.block').forEach(bloque => {
        const precioBloque = parseFloat(bloque.dataset.precio) || 0;

        
        if (valorBusqueda === 0 || precioBloque <= valorBusqueda) {
            bloque.classList.remove('filtro');
        } else {
            bloque.classList.add('filtro');
        }
    });
}