var novaTarefaInput = document.getElementById('nova-tarefa');
var botaoAdicionar = document.getElementById('botao-adicionar');
var botaoApagar = document.getElementsByClassName('botao-apagar');
var botaoEditar = document.getElementsByClassName('botao-editar');
var listaTarefasCompletas = document.getElementById('completas');
var listaTarefasIncompletas = document.getElementById('incompletas');
var criarTarefa = function (descricaoTarefa) {
    // <li>
    //     <input type="checkbox">
    //     <label>Pagar as contas</label>
    //     <button className="botao-apagar">Apagar</button>
    //     <button className="botao-editar">Editar</button>
    // </li>
    var tarefa = document.createElement("li");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    var botaoApagar = document.createElement("button");
    checkbox.type = 'checkbox';
    botaoApagar.className = 'apagar';
    botaoApagar.innerText = 'Apagar';
    //botaoEditar.className = 'editar';
    //botaoEditar.innerText = 'Editar';
    label.innerText = descricaoTarefa;
    tarefa.appendChild(checkbox);
    tarefa.appendChild(label);
    tarefa.appendChild(botaoApagar);
    // tarefa.appendChild(botaoEditar);
    return tarefa;
};
function validaTextoTarefa(texto) {
    return texto.length > 0;
}
var adicionaTarefa = function () {
    if (validaTextoTarefa(novaTarefaInput.value)) {
        var tarefa = criarTarefa(novaTarefaInput.value);
        listaTarefasIncompletas.appendChild(tarefa);
    }
    {
        alert: "A tarefa deve ter ao menos um caractere!";
    }
};
botaoAdicionar.addEventListener('click', adicionaTarefa);
