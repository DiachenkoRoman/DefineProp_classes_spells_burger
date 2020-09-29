export class Post{
    constructor(root, title, image, description) {
        this.path = root
        this.title = title
        this.image = image
        this.description = description
        this.likes = 0
    }

    getTitle = () =>{
        return this.title
    }

    getImage = () =>{
        return this.image
    }

    getDescription = () =>{
        return this.description
    }

    setTitle = (newTitle) =>{
        this.title = newTitle
        this.render()
    }

    setImage = (newImage) =>{
        this.image = newImage
        this.render()
    }

    setDescription = (newDescription) =>{
        this.description = newDescription
        this.render()
    }

    likePost = () =>{
        this.likes += 1
        this.render()
    }

    render(){
        this.path.insertAdjacentHTML("afterbegin", `
          <div class="post">

            <div class="post__title">${this.title}</div>
            <div class="post__image">
                ${this.image}
            </div>

            <div class="post__description">${this.description}</div>
            <div class="post__footer">
                <p>${this.likes}</p>
                <button class="post__like">Like!</button>
            </div>

        </div>
        `)
        // this.path.innerHTML = `
        //  <div class="post">
        //
        //     <div class="post__title">${this.title}</div>
        //     <div class="post__image">
        //         ${this.image}
        //     </div>
        //
        //     <div class="post__description">${this.description}</div>
        //     <div class="post__footer">
        //         <p>${this.likes}</p>
        //         <button class="post__like">Like!</button>
        //     </div>
        //
        // </div>
        // `
        // let likeBut = document.querySelector(".post__like");
        // likeBut.addEventListener("click", this.likePost)
    }
}

export class Advertisement extends Post{
    constructor(root, title, image, description) {
        super();
        this.path = root
        this.title = title
        this.image = image
        this.description = description
    }

    kupitKota = () =>{
        alert("Kot: *blagodarit*")
    }

    render() {
        this.path.insertAdjacentHTML("afterbegin", `
        <div class="adv">

            <div class="adv__title">${this.title}</div>
            <div class="adv__image">
                ${this.image}
            </div>

            <div class="adv__description">${this.description}</div>
            <div class="adv__footer">
                
                <button class="post__like">Buy this!</button>
            </div>

        </div>
        `)
        let buyBut = document.querySelector(".post__like")
        buyBut.addEventListener("click", this.kupitKota)
    }

}
