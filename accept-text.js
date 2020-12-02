// 👇 Encontra todas as divs e monta o texto HTML para entrar como child node
const acceptText = document.querySelectorAll('div[name="accept-text"]');

const textoConteudo = acceptName => {
    return `
        <div style="margin: 5px 0">
            <input type="checkbox" name="accept-text__checkbox" style="display: inline-block !important; width: auto; margin: auto;"/>
            <span>Ao clicar e aceitar você consente ao/a <b>${acceptName}</b>, a coleta de seus dados pessoais para a realizações de ações de marketing de seus produtos e de empresas parceiras.</span>
        </div>`;
};

const setBtnActive = id => {
    document.getElementById(id).toggleAttribute("disabled");
}

const addButtonListener = (element, buttonId) => {
    element.addEventListener("click", () => setBtnActive(buttonId));
};

// 👇 Loop que adiciona os listeners e textos em cada child node
acceptText.forEach(div => {
    const name = div.getAttribute('data-name');

    const buttonId = div.getAttribute('data-button');
    setBtnActive(buttonId);

    div.insertAdjacentHTML("afterbegin", textoConteudo(name));

    const checkBox = div.querySelector('input[type="checkbox"]');
    addButtonListener(checkBox, buttonId);
});