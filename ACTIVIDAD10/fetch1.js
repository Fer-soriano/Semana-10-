//rutas relativas:
const lista = document.querySelector('#listado');

fetch('https://jsonplaceholder.typicode.com/users')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((usuario) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <p>ID: ${usuario.id}</p>
                <p>NAME: ${usuario.name}</p>
                <p>USERNAME: ${usuario.username}</p>
                <p>EMAIL: ${usuario.email}</p>
                <hr/>
            `
            lista.append(li)
        })
    })