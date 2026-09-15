export async function LoadPartials (path,element) {
    let stringData = await fetch(path);
    let data = await stringData.text();
    element.insertAdjacentHTML('afterBegin', data);
}
