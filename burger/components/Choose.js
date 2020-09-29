export class Choose {

    constructor(root) {
        this.path = root
        this.ingrs = [
            'Булка',
            'Огурчик',
            'Котлетка',
            'Бекон',
            'Рыбная котлета',
            'Соус карри',
            'Кисло-сладкий соус',
            'Помидорка',
            'Маслины',
            'Острый перец',
            'Капуста',
            'Кунжут',
            'Сыр Чеддер',
            'Сыр Виолла',
            'Сыр Гауда',
            'Майонез'
        ];
        this.menu = [
            {name: "Чизбургер", ingredients:[]}
        ]
    }


    render(){

        this.path.innerHTML = `

            <div class="mainView">
                <div class="enterName">
                    <input class="enterNameInp" type="text">
                    <button class="enterNameSub">Submit</button>
                </div>
                
            <div class="choseIngr">
                    <ul class="ingrList">
                        ${this.ingrs.map(elem => {
                          return(`
                            <li>
                            <input type="checkbox" value=${elem}> 
                            ${elem}
                            </li>
                          `)  
                    }).join("")}
                    </ul>
                    <button>Submit</button>
            </div>
            
                <div class="excludeIngr">
                    <input class="excludeIngrInp" type="text">
                    <button class="excludeIngrSub">Submit</button>
                </div>
            </div>    
        `
    }
}
