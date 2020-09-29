import {Post, Advertisement} from "../components/Post.js";

const root = document.querySelector("#root")
const image = `<img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*Se0gnNo-tsQG-1jeu_4TJw.png"/>`

let NewPost = new Post(root,"Lorem ipsum dolor sit amet.", image, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, soluta." )
let NewAd = new Advertisement(root, "Reklama", image, "Kupi kota plz")

let posts = [NewPost, NewPost, NewPost, NewPost, NewPost, NewPost, NewPost, NewPost, NewPost, NewPost]

document.addEventListener("DOMContentLoaded", function () {
    posts.map((elem, index) => {
        if (index % 3 === 0){
            NewAd.render()
        } else {
            elem.render()
        }
    })
})
