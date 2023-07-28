let novaTarefaInput = document.getElementById('nova-tarefa') as HTMLInputElement;
let botaoAdicionar = document.getElementById('botao-adicionar');
let botoaoApagar = document.getElementsByClassName('botao-apagar');
let botaoEditar = document.getElementsByClassName('botao-editar');
let listaTarefasCompletas = document.getElementById('completas');
let listaTarefasIncompletas = document.getElementById('incompletas');


let criarTarefa = function (descricaoTarefa: string) {
    // <li>
    //     <input type="checkbox">
    //     <label>Pagar as contas</label>
    //     <button className="apagar">Apagar</button>
    // </li>

    let tarefa = document.createElement("li");

    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let botaoApagar = document.createElement("button");


    checkbox.type = 'checkbox';
    botaoApagar.className = 'apagar';
    botaoApagar.innerText = 'Apagar';
    label.innerText = descricaoTarefa;


    tarefa.appendChild(checkbox);
    tarefa.appendChild(label);
    tarefa.appendChild(botaoApagar);

    return tarefa
}

function validaTextoTarefa(texto: string) {
    return texto.length > 0;
}

let adicionaTarefa = function () {
    if (validaTextoTarefa(novaTarefaInput.value)) {
        let tarefa = criarTarefa(novaTarefaInput.value)
        listaTarefasIncompletas.appendChild(tarefa);
    }
}


botaoAdicionar.addEventListener('click', adicionaTarefa);