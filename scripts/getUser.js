let formulario = document.getElementById('formulario')
let btnCorreo = document.getElementById('btnCorreo')
let btnEditar = document.getElementById('btnEditar')
let btnEliminar = document.getElementById('btnEliminar')

window.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('id').style.display = 'none'
    document.getElementById('label-edit').style.display = 'none'
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value

        let res = await fetch ('http://localhost:4002/usuarios', {
            method: 'POST',
            body: JSON.stringify({
                nombre: name,
                apellido: lastName,
                correo: email
            }),
            headers: {
                "content-type": "application/json; charset= UTF-8"
            }
        })
        let data = res.json()
        console.log(data)
})

btnCorreo.addEventListener('click', async () => {
    document.getElementById('id').style.display= 'block'
    document.getElementById('label-edit').style.display = 'block'
    let email = document.getElementById('email').value
    document.getElementById('email').readOnly = true

    let res = await fetch('http://localhost:4002/usuarios')
    let data = await res.json()
    console.log(data)
    let search = data.find(user => user.correo.toLowerCase() === email.toLowerCase())
    const {nombre, apellido, correo, id} = search
    console.log(nombre, apellido, correo, id)

    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
    document.getElementById('id').value = id
})

btnEditar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let nameMod = document.getElementById('name').value
    let lastNameMod = document.getElementById('lastName').value
    let emailMod = document.getElementById('email').value

    let res = await fetch(`http://localhost:4002/usuarios/${idModificar}`, {
    method: 'PUT',
    body: JSON.stringify({
        id: idModificar,
        nombre: nameMod,
        apellido: lastNameMod,
        correo: emailMod
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8"
    }
})
    let data = await resp.json()
    console.log(data)
})

btnEliminar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let res = await fetch(`http://localhost:4002/usuarios/${idModificar}`, {
        method: 'DELETE',
    })
    let data = await res.json()
    console.log(data)
})