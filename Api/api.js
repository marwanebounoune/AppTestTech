const url= "https://reqres.in/api/products/3";

export function getComptes(text, page) {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))

}
