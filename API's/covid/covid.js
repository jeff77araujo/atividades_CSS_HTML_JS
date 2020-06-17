const apiCovid = 'https://covid19-brazil-api.now.sh/api/report/v1';

var table = document.createElement('table');
var principal = document.querySelector('div#principal');
principal.append(table);

var thead = document.createElement('thead');
var trCabecalho = document.createElement('Cabecalho');

var thEstado = document.createElement('th');
thEstado.innerText = 'Estado';

var thCasos = document.createElement('th');
thCasos.innerText = 'Casos Confirmados';

var thObitos = document.createElement('th');
thObitos.innerText = 'Obitos';

trCabecalho.append(thEstado, thCasos, thObitos);
thead.append(trCabecalho);
table.append(thead);


var tbody = document.createElement('tbody');

axios.get(apiCovid)
.then( (resposta) => {
    var estados = resposta.data.data;
    tbody.innerHTML = '';
    estados.forEach( (uf) => {
        var trCorpo = document.createElement('tr');
        var tdEstado = document.createElement('td');
        // tdEstado.setAttribute('class','estado');
        // tdEstado.classList.add('estado')
        // tdEstado.className.add('estado abobora')
        tdEstado.innerText = uf.state;

        var tdCasos = document.createElement('td');
        tdCasos.innerText = uf.cases;

        var tdObitos = document.createElement('td');
        tdObitos.innerText = uf.deaths;

        trCorpo.append(tdEstado, tdCasos, tdObitos);
        tbody.append(trCorpo);
        });
        table.append(tbody);
    })

/* <table>
            <thead>
                <tr>
                    <th>Estado</th>
                    <th>Casos Confirmados</th>
                    <th>Mortes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>São Paulo</td>
                    <td>150</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table> */