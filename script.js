function busca_jogador(){
    fetch('dados.json')
        .then(response => response.json())
        .then(ddd => {
        tablet = document.getElementById('lugar');
        ddd.forEach(jogadorzinho => {
            let linha = document.createElement('tr');
            linha.innerHTML = `
                <td> ${jogadorzinho.nome} </td>
                <td> ${jogadorzinho.idade} </td>
                <td> ${jogadorzinho.personalidade} </td>
                <td> ${jogadorzinho.altura} </td>
                <button type="button">Nice</button> `
            tablet.appendChild(linha);
        });

})
}
