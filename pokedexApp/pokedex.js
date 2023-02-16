function logic() {
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");

    name = name.value;
    type = type.value;
    region = region.value;

    if (name === '' || type === '' || region === '') {
        alert('Please enter valid data');
    }

    const pokemon = {
        name: 'undefined',
        type: 'undefined',
        region: 'undefined',
    }

    pokemon.name = name;
    pokemon.type = type;
    pokemon.region = region;

    const pokemonData = document.createElement('span');
    pokemonData.textContent = `Name: ${pokemon.name}, Type: ${pokemon.type}, Region: ${pokemon.region}`;

    let pokedexEntry = document.createElement("li");

    if (pokemon.type === 'water') {
        pokedexEntry.className = "water";
    } else if (pokemon.type === 'normal') {
        pokedexEntry.className = 'normal';
    } else if (pokemon.type === 'grass') {
        pokedexEntry.className = 'grass';
    } else if (pokemon.type === 'fire') {
        pokedexEntry.className = 'fire';
    } else if (pokemon.type === 'electric') {
        pokedexEntry.className = 'electric'
    } else {
        pokedexEntry.className = 'other';
    }

    const previewButton = `
        <form action="http://google.com/search" target="_blank">
            <input name="q" hidden value="${name}">
            <input type="submit">
        </form>
    `

    pokedexEntry.innerHTML += pokemonData.outerHTML;
    pokedexEntry.innerHTML += previewButton;

    let ul = document.getElementById('pokedex-entries');
    ul.appendChild(pokedexEntry);
}

// function logic() {

//     // First thing to do is get input from user
    
//     let name = document.getElementById("name");
//     let type = document.getElementById("type");
//     let region = document.getElementById("region");

//     // Get String values of variables

//     name = name.value;
//     type = type.value;
//     region = region.value;

//     /*-----------------------------------------------
//      * Add your solution code here
//      *---------------------------------------------*/

//     // Use If to ensure input validation (ensure input fields are !empty)

//     if( name ==='' || type === '' || region === '' ){
//         alert('Please enter valid data');
//     }; 

//     /* --- Part 1 : Create pokemon data Object --- */

//     const pokemon = {
//         name: 'undefined',
//         type: 'undefined',
//         region: 'undefined',
//     }

//     // Create pokemon object here (const pokemon) using user input Strings

//     pokemon.name = name;
//     pokemon.type = type;
//     pokemon.region = region;

//     console.log(pokemon.name);
//     console.log(pokemon.type);
//     console.log(pokemon.region);

//     // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

//     const pokemonData = document.createElement('span');

//     /* --- Part 2 : Creating other DOM Objects --- */

//     // Create HTML li element here (const pokedexEntry)

//     let pokedexEntry = document.createElement("li");

//     // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object

//     if (pokemon.type === 'water') {
//         pokedexEntry.className = "water";
//     }else if (pokemon.type === 'normal') {
//         pokedexEntry.className = 'normal';
//     }else if (pokedex.type === 'grass'){
//         pokedexEntry.className = 'grass';
//     }else if (pokemon.type === 'fire'){
//         pokedexEntry.className = 'fire';
//     }else if (pokemon.type === 'electric'){
//         pokedexEntry.className = 'electric'
//     }else{
//         pokedexEntry.className = 'other';
//     }

//     // Creating a preview button (using a Template Literal)
//     // this code is for an html form that will Google search the name of the pokemon

//     const previewButton = `
//             <form action="http://google.com/search" target="_blank">
//                 <input name="q" hidden value="${name}">
//                 <input type="submit">
//             </form>
//         `

//     /* --- Part 3 : Add things into the DOM --- */

//     // Firstly append pokemonData to the innerHTML of pokedexEntry
    
//     pokedexEntry.innerHTML = pokemonData;

//     // Secondly append the previewButton to innerHTML of pokedexEntry

//     pokedexEntry.innerHTML = previewButton;

//     // Lastly we will get the ul List element that is meant to contain all pokedex entries

//     pokemonData.textContent = `Name: ${pokemon.name}, Age: ${pokemon.type}, City: ${myObject.region}`;

//     let ul = document.getElementById('pokedex-entries');
//     ul.appendChild(pokedexData);

//     // Then we will append pokedexEntry to the innerHTML of the pokedexEntries ul element


//     /*-----------------------------------------------
//      * Solution must be above this comment
//      *---------------------------------------------*/
// }
