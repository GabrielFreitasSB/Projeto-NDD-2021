
function validarProduto(idNomeProduto,idNumeroSerie,idFabricante,idPreco,idDataFabricacao) {
    let nome = document.getElementById(idNomeProduto).value;
    let NumeroSerie = document.getElementById(idNumeroSerie).value;
    let Fabricante = document.getElementById(idFabricante).value;
    let DataFabricacao = document.getElementById(idDataFabricacao).value;
    let Preco = document.getElementById(idPreco).value;
        if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
            

        else if (NumeroSerie == "")
        alert("Número de Série do Equipamento não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome,Fabricante,DataFabricacao,Preco, parseInt(NumeroSerie));
}

function cadastrarProduto(produto, NumeroSerie,Fabricante,Preco,DataFabricacao) {
    let novoProduto = {nome:produto, idNumeroSerie:NumeroSerie, Fabricante, Preco, DataFabricacao};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado//
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto //
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foi cadastrado com sucesso "+produto+" do Número de Série " +NumeroSerie+ " Fabricante"+Fabricante+"!");
        atualizarTotalEquipamentos("totalEquipamentos");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function atualizarTotalEquipamentos(idEquipamentos) {
    localStorage.setItem("totalEquipamentos",++document.getElementById(idEquipamentos).innerHTML)
}

function carregarTotalEquipamentos(idEquipamentos) {
    if (typeof(Storage) !== "undefined") {
        let totalEquipamentos = localStorage.getItem("totalEquipamentos");
        if (totalEquipamentos == null) totalEquipamentos = 0;
        document.getElementById(idEquipamentos).innerHTML = totalEquipamentos;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function listarEquipamentos() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Equipamentos:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no Estoque</h3>");
        else {
            
            produtos = JSON.parse(produtos);
             var text = document.createTextNode( produtos.map(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Número de Série: "+produto.NumeroSerie+"</li>");
                document.write("<li>Fabricante: "+produto.Fabricante+"</li>"); 
                document.write("<li>Data fabricação: "+produto.DataFabricacao+"</li>"); 
                     
                document.write("</ul>");
         
            }));
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar os Estoque!");    
return document.getElementById("Equipamentos").appendChild(text);  
}
//--------------------------------------------------------------------------------------------------------------------//
function listarChamado(idChamado,idDescricao,idEquipamentos,idDataFabricacao,idFabricante) {
    if (typeof(Storage) !== "undefined") {
        let Chamados = localStorage.getItem("Chamados");
        let Descricao = document.getElementById(idDescricao).value;
        let Equipamentos = document.getElementById(idEquipamentos).value;
        let Data = document.getElementById(idDataFabricacao).value; 
        let Fabricante = document.getElementById(idFabricante).value;



        document.write("<h1>Chamados:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum chamado</h3>");
        else {
            produtos = JSON.parse(produtos);
           
            var text = document.createTextNode( produtos.map(produto => {
              
                document.write("<ul>");
                document.write("<li>Nome do Chamado: "+idChamado.nome+"</li>");
                document.write("<li>Numero Seri produto: "+produto.e+"</li>");
                document.write("<li>Descrição: "+idDescricao.nome+"</li>");
                document.write("</ul>");


            }));
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar os Chamados!");    
    return document.getElementById("Chamados").appendChild(text);
}
