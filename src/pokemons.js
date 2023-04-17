// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(array) {
    const fireArray = array.filter(firePokemon => firePokemon.type.includes("Fire"))
    return fireArray
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(array) {
    if(array.length === 0) {
        return 0
    }
    const heights = array.map(function (pokemon){
        return parseFloat(pokemon.height)
    })
    const shortPokemon = heights.sort()
    const shortestPokemonHeight = shortPokemon[0];
    //find the name of the pokemon with the heigth equal to shortPokemon[0]
    for(let  i = 0; i < array.length; i ++) {
        if(parseFloat(array[i].height) === shortestPokemonHeight){
            return array[i].name
        }
    }
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(array) {
    if(array.length === 0){
        return 0
    }
    //return avarage even if some pokemons do not have candy_count
    const candyArray = array.reduce((accumulator, currentValue) => accumulator.type[candy_count] + currentValue.type[candy_count])//incorrect way
    const candyAvg = candyArray / array.length
    const avgRound = Math.round(candyAvg * 100)/100 //round to 2 decimals
    return avgRound
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(array) {
    if(array.length === 0) {
        return 0
    }
    const groundType = array.filter(pokemon => pokemon.type.includes('Ground'));
    const firstTenGround = groundType.slice(0, 10)
    const imgArray = firstTenGround.map(pokemon => pokemon.img)
    return imgArray
}

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
