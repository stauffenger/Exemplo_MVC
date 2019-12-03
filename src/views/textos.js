const express = require('express')

function imprimirTextos(response, textos) {
    let conteudo = ""
    
    for (var i = 0; i < textos.length; i++){
        let texto = textos[i];
        for (var key in texto){
            if (key == "titulo") {
                conteudo += (
                    "<div class=\"myClass\">" +
                        texto[key] + "<br>")    
            } else {
                conteudo += (
                    "<div style=\"text-align: justify\">" +
                        "<p>" + texto[key] + "</p>" +
                    "</div>" +
                "</div>"
            )}
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
            "<button onclick=\"location.href = 'https://exemplo-mvc.herokuapp.com/';\">Novo Texto</button>" +
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