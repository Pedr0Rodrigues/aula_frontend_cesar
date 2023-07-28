let novaTarefaInput = document.getElementById('nova-tarefa') as HTMLInputElement;
let botaoAdicionar = document.getElementById('botao-adicionar');
let botaoApagar = document.getElementsByClassName('botao-apagar');
let botaoEditar = document.getElementsByClassName('botao-editar');
let botaoLimpar = document.getElementById('botao-limpar');
let listaTarefasCompletas = document.getElementById('completas');
let listaTarefasIncompletas = document.getElementById('incompletas');

type Tarefa = {
    descrição: string;
    completa: boolean;
    //id: number;
}
let listaTarefas: Tarefa[] = []

let criarTarefa = function (descricaoTarefa: string) {
    // <li>
    //     <input type="checkbox">
    //     <label>Pagar as contas</label>
    //     <button className="botao-apagar">Apagar</button>
    //     <button className="botao-editar">Editar</button>
    // </li>

    let tarefa = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let botaoApagar = document.createElement("button");
    let botaoEditar = document.createElement("button");

    checkbox.type = 'checkbox';
    botaoApagar.className = 'apagar';
    botaoApagar.innerText = 'Apagar';
    botaoEditar.className = 'editar';
    botaoEditar.innerText = 'Editar';
    label.innerText = descricaoTarefa;

    tarefa.appendChild(checkbox);
    tarefa.appendChild(label);
    tarefa.appendChild(botaoApagar);
    tarefa.appendChild(botaoEditar);

    return tarefa;
}

function validaTextoTarefa(texto: string) {
    return texto.length > 0;
}

let adicionaTarefa = function () {
    if (validaTextoTarefa(novaTarefaInput.value)) {
        console.log(listaTarefas)
        let tarefa = criarTarefa(novaTarefaInput.value);
        let tarefaDescricao = novaTarefaInput.value
        let tarefaIndex: Tarefa =  {descrição: tarefaDescricao, completa: false}
        listaTarefasIncompletas.appendChild(tarefa);
        
        listaTarefas.push(tarefaIndex);
        let stringIndex = JSON.stringify(listaTarefas)
        localStorage.setItem("listaTarefas", stringIndex);
        console.log(localStorage);
        console.log (JSON.parse(stringIndex))
    }
    else {
        console.log(listaTarefas)
        alert("A tarefa deve ter ao menos um caractere")
    }
}
let limparTudo = function() {
    localStorage.clear();
}

botaoAdicionar.addEventListener('click', adicionaTarefa);
botaoLimpar.addEventListener ('click', limparTudo)