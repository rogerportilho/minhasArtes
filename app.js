function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. informe no campo alguma arte, pesquisa e tome mais dois dedos de café :) </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada daodo da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link1}" target="_blank">Mais informações</a>
                    <br><br><a href="${dado.link2}" target="_blank">Veja minha arte</a>
            </div> 
        `;
        }
        
    }

    if (!resultados) {  
        resultados = "<p>Nenhuma arte foi encontrada com essa informação :( </p>"
    }

    //Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
};


