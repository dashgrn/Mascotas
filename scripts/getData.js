const btGato = document.getElementById('btnGato')
const btnPerro = document.getElementById('btnPerro')

const getMascota = async (URL) => {
    let showMascota = document.querySelector(".grid-mascotas")
    showMascota.innerHTML = ''
    const res = await fetch(URL)
    const data = await res.json()
    data.forEach(mascota => {
        let {imagen, nombre, raza} = mascota
        showMascota.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="enlace-detalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>
        `
    });
}

btnPerro.addEventListener('click', () => {
    getMascota('http://localhost:4001/perros')
})

btGato.addEventListener('click', () => {
    getMascota('http://localhost:4000/gatos')
})