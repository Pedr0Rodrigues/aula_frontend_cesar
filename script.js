var novaTarefaInput = document.getElementById('nova-tarefa');
var botaoAdicionar = document.getElementById('botao-adicionar');
var botaoApagar = document.getElementsByClassName('botao-apagar');
var botaoEditar = document.getElementsByClassName('botao-editar');
var botaoLimpar = document.getElementById('botao-limpar');
var listaTarefasCompletas = document.getElementById('completas');
var listaTarefasIncompletas = document.getElementById('incompletas');
var listaTarefas = JSON.parse(localStorage.getItem("listaTarefas") || "[]");
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
    var botaoEditar = document.createElement("button");
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
    botaoEditar.onclick = function () {
        botaoEditar.parentElement.remove();
        listaTarefas = listaTarefas.filter(function (element) { return element.descrição !== descricaoTarefa; });
        salvarLocal();
        novaTarefaInput.value = descricaoTarefa;
    };
    botaoApagar.onclick = function () {
        botaoApagar.parentElement.remove();
        listaTarefas = listaTarefas.filter(function (element) { return element.descrição !== descricaoTarefa; });
        salvarLocal();
    };
    checkbox.onclick = function () {
        listaTarefas.forEach(function (tarefa) {
            if (tarefa.descrição == descricaoTarefa) {
                tarefa.completa = checkbox.checked;
            }
        });
        salvarLocal();
        recarregarLocal();
    };
    return tarefa;
};
function validaTextoTarefa(texto) {
    return texto.length > 0;
}
var recarregarLocal = function () {
    location.reload();
};
var salvarLocal = function () {
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
};
var carregarLocal = function () {
    JSON.parse(localStorage.getItem("listaTarefas")).forEach(function (element) {
        if (element.completa === true) {
            listaTarefasCompletas.appendChild(criarTarefa(element.descrição));
        }
        else {
            listaTarefasIncompletas.appendChild(criarTarefa(element.descrição));
        }
    });
};
var adicionaTarefa = function () {
    if (validaTextoTarefa(novaTarefaInput.value)) {
        var tarefaDescricao = novaTarefaInput.value;
        var tarefaIndex = { descrição: tarefaDescricao, completa: false };
        listaTarefas.push(tarefaIndex);
        salvarLocal();
        carregarLocal();
    }
    else {
        console.log(listaTarefas);
        alert("A tarefa deve ter ao menos um caractere");
    }
    novaTarefaInput.value = "";
    location.reload();
};
var limparTudo = function () {
    localStorage.clear();
    location.reload();
};
window.onload = function () {
    carregarLocal();
};
botaoAdicionar.addEventListener('click', adicionaTarefa);
botaoLimpar.addEventListener('click', limparTudo);
