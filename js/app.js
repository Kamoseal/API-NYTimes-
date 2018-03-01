//Traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento
const form = document.getElementById('search-form');
const serachField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;
//A el formulario se le agrega el evento submit y las instrucciones a ejecutar
form.addEventListener('submit', function (e){
    e.preventDefault();
    //Pintar en el HTML
    responseContainer.innerHTML = '';
    //La busquedad de texto (datos de API) igualarlo con el valor del input
    searchedForText = serachField.value;
    //Se invoca la funcion
    getNews();
});

function getNews(){
    //Se crea el objeto
    const articleRequest = new XMLHttpRequest();
    //Se usa el metodo OPEN para agrerar el URLjunto con la clave KEY
    articleRequest.open('GET','https://api.nytimes.com/svc/search/v2/articlesearch.json?={searchedForText}&api-key=090aa4d6182542e6a3bff49c02acfb12');
    //La propiedad .onload y onerror tienen asignadas sus funciones correspondientes
    articleRequest.onload = addNews;
    //onerror se iguala a la funcion handleError()
    articleRequest.onerror = handleError;
    //Se envia la peticion con el metodo .send()
    articleRequest.send();
}
//Funcion que pinta en consola error
function handleError(){
    console.log('Se ha presentado un error');
}
//funcion addNews convierte el JSON a data 
function addNews(){
    const data = JSON.parse(this.responseText);
    //console.log('Esto es responseText : '+ this.responseText);
    //Devuelve el JSON de NYTimes
    console.log(data);
    //Devuelve {status: "OK", copyright: "Copyright (c) 2018 The New York Times Company. All Rights Reserved.", response: {…}}
    //En el objeto de la propiedad response devuelve 
    //response:
        //docs:
            //Array(10)
            //0:{web_url: "https://www.nytimes.com/reuters/2018/02/28/sports/soccer/28reuters-soccer-fra-psg-olm.html", snippet: "Argentine winger Angel Di Maria produced a majesti… a 3-0 win over Olympique Marseille on Wednesday.", blog: {…}, source: "Reuters", multimedia: Array(0), …}
            //1:{web_url: "https://www.nytimes.com/reuters/2018/02/28/world/europe/28reuters-saudi-usa-prince-visit.html", snippet: "Saudi Crown Prince Mohammed bin Salman is expected…eek of April, a Saudi official said on Wednesday.", blog: {…}, source: "Reuters", multimedia: Array(0), …}
            //2:{web_url: "https://www.nytimes.com/aponline/2018/02/28/us/ap-financial-markets-box.html", snippet: "U.S. stocks sank again on Wednesday and cemented F…y as the worst month for the market in two years.", blog: {…}, source: "AP", multimedia: Array(0), …}
            //3:{web_url: "https://www.nytimes.com/slideshow/2018/02/28/realestate/living-in-fleetwood-mount-vernon.html", snippet: "Known for its diversity of population and prices, …ount Vernon, N.Y., is a different kind of suburb.", blog: {…}, source: "The New York Times", multimedia: Array(60), …}
            //4:{web_url: "https://www.nytimes.com/2018/02/28/realestate/living-in-fleetwood-mount-vernon-new-york.html", snippet: "Known for its diversity of population and prices, …ount Vernon, N.Y., is a different kind of suburb.", blog: {…}, source: "The New York Times", multimedia: Array(67), …}
            //5:{web_url: "https://www.nytimes.com/aponline/2018/02/28/sports/tennis/ap-ten-brasil-open.html", snippet: "Second-seeded Fabio Fognini of Italy reached the q…ory over Joao Domingues of Portugal on Wednesday.", blog: {…}, source: "AP", multimedia: Array(0), …}
            //6:{web_url: "https://www.nytimes.com/aponline/2018/02/28/business/ap-us-spirit-airlines-pilots.html", snippet: "Pilots for Spirit Airlines have ratified a five-ye…at will raise pay rates by an average 43 percent.", blog: {…}, source: "AP", multimedia: Array(0), …}
            //7:{web_url: "https://www.nytimes.com/reuters/2018/02/28/sports/soccer/28reuters-soccer-england-tot-rch.html", snippet: "Fernando Llorente's hat-trick helped fire Tottenha…t thrust the VAR system back into the spotlight. ", blog: {…}, source: "Reuters", multimedia: Array(0), …}
            //8:{web_url: "https://www.nytimes.com/2018/02/28/world/americas/un-sexual-assaults.html", snippet: "An expert “estimate” that United Nations personnel…ed 60,000 people turns out to be more of a guess.", blog: {…}, source: "The New York Times", multimedia: Array(66), …}
            //9:{web_url: "https://www.nytimes.com/reuters/2018/02/28/world/americas/28reuters-venezuela-politics-falcon.html", snippet: "Presidential election candidate Henri Falcon said …, to play a major role in his team if victorious.", blog: {…}, source: "Reuters", multimedia: Array(0), …}
            //length:10
    
    //Extraer el documento de la data
    let article = data.response.docs;
    //For para iterar en el arreglo dentro de article
    article.forEach(function(article)  {

        //Imprime el titulo recorrido dentro del arreglo headline del objeto main
        const title = article.headline.main;
        console.log(title);
        //Devuelve la descripcion del articulo
        const snippet = article.snippet;
        console.log(snippet);
        //Devuelve la primer imagen dentro del articulo
        const image = article.multimedia[0];
        console.log(image);
        
    let template = `"<li>
                <h3></h3>
                <p></p>
                <img src="" alt="">
            </li>"`     
        

        
        
    })      

    // let interpolation = `<li>${articleSearchFilter}</li>`;

    // console.log(interpolation);
    
   
    
    //Creamos un li, le añadimos una clase para que tenga estilos, le agregamos texto que obtuvimos del JSON y lo anexamos al ul
    //let li = document.createElement('li');
    //li.className = 'articleClass';
    //li.innerText = snippet;
    
    //responseContainer.appendChild(li);
}
