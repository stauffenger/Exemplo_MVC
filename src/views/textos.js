const express = require('express')

function imprimirTextos(response, textos) {
    let conteudo = ""
    
    for (var i = 0; i < textos.length; i++){
        let texto = textos[i];
        for (var key in texto){
            conteudo += (
                "<div class=\"myClass\">" +
                    key + "<br>" +
                    "<div style=\"text-align: justify\">" +
                        "<p>" + texto[key] + "</p>" +
                    "</div>" +
                "</div>"
            )
        }
    }

    let pagina = (
        "<!DOCTYPE html>" +
        "<html>" +
            "<head>" +
                    "<meta charset=\"UTF-8\">" +
            "</head>" +
            "<title>" +
                "Textos Anárquicos" +
            "</title>" +
            "<body>" +
            "<button onclick=\"location.href = 'http://localhost:5000/';\">Novo Texto</button>" +
                "<style>" +
                    ".myClass {" +
                    "color: white;" +
                    "background-color: DodgerBlue;" +
                    "padding: 20px;" +
                    "text-align: center;" +
                    "margin: 10px;" +
                    "}" +
                "</style>" +
                conteudo +
            "</body>" +
        "</html>"
    )
    response.send(pagina)
}

module.exports.imprimirTextos = imprimirTextos