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
let listaTarefas: Tarefa[] = JSON.parse(localStorage.getItem("listaTarefas") || "[]");

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

    botaoEditar.onclick = () => {
        botaoEditar.parentElement.remove();
        listaTarefas = listaTarefas.filter((element) => element.descrição !== descricaoTarefa);
        salvarLocal();
        novaTarefaInput.value = descricaoTarefa;
    }

    botaoApagar.onclick = () => {
        botaoApagar.parentElement.remove();
        listaTarefas = listaTarefas.filter((element) => element.descrição !== descricaoTarefa);
        salvarLocal();
    }
    
    checkbox.onclick = () => {
        listaTarefasCompletas.appendChild(tarefa)
        salvarLocal();
    }


    return tarefa;
}

function validaTextoTarefa(texto: string) {
    return texto.length > 0;
}

let salvarLocal = function () {
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

let carregarLocal = function () {
    JSON.parse(localStorage.getItem("listaTarefas")).forEach((element: Tarefa) => {
        if (element.completa === true) {
            listaTarefasCompletas.appendChild(criarTarefa(element.descrição))
        } 
        else {
            listaTarefasIncompletas.appendChild(criarTarefa(element.descrição)) 
        }
    });
}

let adicionaTarefa = function () {
    if (validaTextoTarefa(novaTarefaInput.value)) {
        let tarefaDescricao = novaTarefaInput.value
        let tarefaIndex: Tarefa =  {descrição: tarefaDescricao, completa: false}
        listaTarefas.push(tarefaIndex);
        salvarLocal();
        carregarLocal();
    }
    else {
        console.log(listaTarefas)
        alert("A tarefa deve ter ao menos um caractere")
    }
    novaTarefaInput.value = "";
    location.reload();

}
let limparTudo = function() {
    localStorage.clear();
    location.reload();
}


window.onload = () => {
    carregarLocal()
};

botaoAdicionar.addEventListener('click', adicionaTarefa);
botaoLimpar.addEventListener ('click', limparTudo);