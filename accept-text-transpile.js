"use strict";

// 👇 Encontra todas as divs e monta o texto HTML para entrar como child node
var acceptText = document.querySelectorAll('div[name="accept-text"]');

var textoConteudo = function textoConteudo(acceptName) {
    return '\n        <div style="margin: 5px 0">\n            <input type="checkbox" name="accept-text__checkbox" style="display: inline-block !important; width: auto; margin: auto;"/>\n            <span>Ao clicar e aceitar voc\xEA consente ao/a <b>'.concat(
        acceptName,
        "</b>, a coleta de seus dados pessoais para a realiza\xE7\xF5es de a\xE7\xF5es de marketing de seus produtos e de empresas parceiras.</span>\n        </div>"
    );
};

var setBtnActive = function setBtnActive(id) {
    document.getElementById(id).toggleAttribute("disabled");
};

var addButtonListener = function addButtonListener(element, buttonId) {
    element.addEventListener("click", function () {
        return setBtnActive(buttonId);
    });
}; // 👇 Loop que adiciona os listeners e textos em cada child node

acceptText.forEach(function (div) {
    var name = div.getAttribute("data-name");
    var buttonId = div.getAttribute("data-button");
    setBtnActive(buttonId);
    div.insertAdjacentHTML("afterbegin", textoConteudo(name));
    var checkBox = div.querySelector('input[type="checkbox"]');
    addButtonListener(checkBox, buttonId);
});
