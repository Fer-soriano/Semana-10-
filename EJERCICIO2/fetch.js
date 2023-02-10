const lista = document.querySelector('#listado2');

fetch('./data.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <p>Continente: ${producto.Continente}</p>
                <p>País: ${producto.País}</p>
                <p>Capital: ${producto.Capital}</p>
                <hr/>
            `
            lista.append(li)
        })
    })