

// http://api-tutor.herokuapp.com/v1/colors

const makesTemplateSource = document.querySelector(".makesTemplate")
const makesTemplate = Handlebars.compile(makesTemplateSource.innerHTML)

axios.get('http://api-tutor.herokuapp.com/v1/colors')
    
.then(function(response){
        console.log(response.data);
        const colorsElem = document.querySelector(".colors")
        colorsElem.innerHTML = makesTemplate({
            makes: response.data
        })
 });

 axios.get('http://api-tutor.herokuapp.com/v1/makes')
 
 .then(function(response){
    console.log(response.data);
    const makesElem = document.querySelector(".brands")
    makesElem.innerHTML = makesTemplate({
        makes: response.data
    })
 });

//  axios.get('http://api-tutor.herokuapp.com/v1/cars')
 
//  .then(function(response){
//     console.log(response.data);
//     const carsElem = document.querySelector(".cars")
//     carsElem.innerHTML = makesTemplate({
//         makes: response.data
//     })
//  });


  