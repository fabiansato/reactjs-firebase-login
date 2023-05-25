import instance from "../Config/axios"

export function getAllProductos(buscar="Automoviles"){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=Automoviles").then(res=>res.json())
    return instance.get(`/sites/MLA/search?q=${buscar}`)
}
export function getById(id){
    // return fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json())
    return instance.get(`/items/${id}`)
}
export function create(){

}