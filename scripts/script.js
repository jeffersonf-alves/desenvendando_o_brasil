let header = new Vue({
    el:"#header",
    data: {
        menu: [
            { opcao: 'Home'},
            { opcao: 'Promoções'}
        ],
        submenu: [
            { opcao: 'Estados'},
            { opcao: 'Cidades'},
            { opcao: 'Histórias'}
        ]
    }

});

console.log(numero)
let tituloMain = new Vue({
    el:"#tituloMain",
    data: {
        title: "Desvendando o Brasil",
        cont: numero,
        contador_teste: 0,
    },
    created: {
        exemplo: function() {
            let tinterval = setInterval(()=>{
                alert('Olaa');
            }, 1000)
            return tinterval
        }
    },
    computed: {
        changeTitle:function () {

            return this.title.substring(0,this.cont)
        }
    }

});
