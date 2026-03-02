// Itens que aparecem automaticamente quando a pagina carrega.
const initialItems = [
  "Pao de forma",
  "Cafe preto",
  "Suco de laranja",
  "Bolacha",
];

// Referencias aos elementos da interface.
const addForm = document.querySelector("#addForm");
const itemInput = document.querySelector("#itemInput");
const itemsList = document.querySelector("#itemsList");
const formError = document.querySelector("#formError");
const toast = document.querySelector("#toast");
const toastText = document.querySelector("#toastText");
const closeToast = document.querySelector("#closeToast");
const backButton = document.querySelector("#backButton");

// Armazena o timer do alerta para evitar timers duplicados.
let toastTimer;
// Guarda o historico dos itens adicionados manualmente para desfazer no botao "Voltar".
const addedItemsHistory = [];

// Cria um item completo da lista (checkbox + texto + botao de remover).
function createItemElement(itemName) {
  const item = document.createElement("li");
  item.className = "item";

  const itemMain = document.createElement("div");
  itemMain.className = "item-main";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "item-checkbox";
  checkbox.setAttribute("aria-label", `Marcar ${itemName} como concluido`);

  const itemText = document.createElement("span");
  itemText.className = "item-name";
  itemText.textContent = itemName;

  // Marca e desmarca o item como concluido.
  checkbox.addEventListener("change", () => {
    item.classList.toggle("completed", checkbox.checked);
  });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.setAttribute("aria-label", `Remover ${itemName}`);
  removeButton.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3h6l1 2h4v2H4V5h4l1-2z" fill="currentColor"></path>
      <path d="M7 9h10l-1 10H8L7 9z" stroke="currentColor" stroke-width="1.5"></path>
    </svg>
  `;

  // Remove o item da lista e mostra mensagem de confirmacao.
  removeButton.addEventListener("click", () => {
    item.remove();
    showToast("O item foi removido da lista");
  });

  itemMain.append(checkbox, itemText);
  item.append(itemMain, removeButton);
  return item;
}

// Exibe o alerta no rodape e inicia auto-fechamento.
function showToast(message) {
  toastText.textContent = message;
  toast.classList.add("show");
  toast.setAttribute("aria-hidden", "false");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, 3500);
}

// Esconde o alerta.
function hideToast() {
  toast.classList.remove("show");
  toast.setAttribute("aria-hidden", "true");
}

// Valida e adiciona um novo item na lista.
function addItem(itemName, shouldTrack = true) {
  const trimmedName = itemName.trim();

  // Nao permite adicionar item vazio.
  if (!trimmedName) {
    formError.textContent = "Digite um item antes de adicionar.";
    return;
  }

  const itemElement = createItemElement(trimmedName);
  itemsList.appendChild(itemElement);

  if (shouldTrack) {
    addedItemsHistory.push(itemElement);
  }

  formError.textContent = "";
  itemInput.value = "";
  itemInput.focus();
}

// Preenche a lista com os itens iniciais.
initialItems.forEach((item) => addItem(item, false));

// Evento de envio do formulario (botao "Adicionar item").
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addItem(itemInput.value);
});

// Permite fechar o alerta manualmente no botao "x".
closeToast.addEventListener("click", hideToast);

// Desfaz o ultimo item adicionado manualmente.
backButton.addEventListener("click", () => {
  while (addedItemsHistory.length > 0) {
    const lastAddedItem = addedItemsHistory.pop();

    // Se o item ainda existir na lista, remove e encerra.
    if (lastAddedItem && lastAddedItem.isConnected) {
      lastAddedItem.remove();
      formError.textContent = "";
      showToast("Ultimo item inserido foi removido.");
      return;
    }
  }

  showToast("Nenhum item adicionado recentemente para desfazer.");
});
