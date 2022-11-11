
export function fetchArticle() {
    const article = {
        titleData: 'Aprende SolidJS en 15 minutos',
        articleData: `Este articulo contiene conceptos basicos para que puedas empezar a usar Solid JS.\n
        Empezaremos con las ventajas o diferencias que tiene con otros frameworks como React...`
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(article);
        }, 500);
    });
}

export function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Quiero aprender mas, donde puedo encontrar la documentacion?','Terrible!!!','Me gusta mas React']);
        }, 1500);
    });
}