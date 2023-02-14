function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");

    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;

    /*-----------------------------------------------
     * Add your solution code here
     *---------------------------------------------*/

    // Use If to ensure input validation (ensure input fields are !empty)


    if( name ==='' || type === '' || region === '' ){
        alert('Please enter valid data');
    }; 

    /* --- Part 1 : Create pokemon data Object --- */

    const pokemon = {
        name: 'undefined',
        type: 'undefined',
        region: 'undefined',
    }

    // Create pokemon object here (const pokemon) using user input Strings

    pokemon.name = name;
    pokemon.type = type;
    pokemon.region = region;

    console.log(pokemon.name);
    console.log(pokemon.type);
    console.log(pokemon.region);


    // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

    const pokemonData = document.createElement('span');


    /* --- Part 2 : Creating other DOM Objects --- */

    // Create HTML li element here (const pokedexEntry)

    let ul = document.getElementById("pokedex-entries");

    let pokedexEntry = document.createElement("li");

    pokedexEntry.appendChild(document.createTextNode(pokemon.name));
    ul.appendChild(pokedexEntry);



    // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object




    // Find out how to add classes to certain elements through if statement if they are a certain type






    // Creating a preview button (using a Template Literal)
    // this code is for an html form that will Google search the name of the pokemon
    const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <input type="submit">
            </form>
        `


    /* --- Part 3 : Add things into the DOM --- */

    // Firstly append pokemonData to the innerHTML of pokedexEntry


    // Secondly append the previewButton to innerHTML of pokedexEntry


    // Lastly we will get the ul List element that is meant to contain all pokedex entries
    // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element


    /*-----------------------------------------------
     * Solution must be above this comment
     *---------------------------------------------*/
}
