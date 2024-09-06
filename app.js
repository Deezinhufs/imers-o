function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
      
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado! Você não precisa digitar o nome de um jogo ou gênero.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let genero = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        genero = dado.genero.toLowerCase()
        // Se no título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Clique aqui para saber mais.</a>
            </div>
          `;
        }
        // então, faça...
        console.log(dado.titulo.includes(campoPesquisa))
      // Cria o HTML para cada item do resultado da pesquisa
      
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }