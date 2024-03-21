const frutas = document.querySelectorAll('.fruta');

frutas.forEach((button) => {
    /* addEventListener= ouve os eventos do usuário e disparada ação quando evento espeficicado pelo programador for disparado. Messe caso será o evento "click"  */
    button.addEventListener('click', () => {
        document.querySelector("header").style.color = "white";
        document.querySelector("footer").style.color = "white";

        /* verifica qual o texto do botão atual */
        switch (button.innerText) {
            case "🍌":
                document.body.style.backgroundColor = "#f1c329"
                document.querySelector("header").style.color = "black";
                document.querySelector("footer").style.color = "black";
                break;

            case "🍉":
                document.body.style.backgroundColor = "#f22d2d";
                break;

            case "🍇":
                document.body.style.backgroundColor = "#835Ab8";
                break;
            case "🍊":
                document.body.style.backgroundColor = "#f8762a"
                break;
            case "🍈":
                document.body.style.backgroundColor = "#a9d399";
                document.querySelector("header").style.color = "black";
                document.querySelector("footer").style.color = "black";
                break;
            case "🥑":
                document.body.style.backgroundColor = "#059a23"
                break;
            default:
                /*console.log()= é um comando de saída que exibe algo no console do navegador  */
                console.log("Botão não reconhecido:", button.innerText);
        }
    })

})
