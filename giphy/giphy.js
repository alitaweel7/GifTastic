// Create an array of choices for our buttons
// Each choice gets its own button. Write a function thtta takes the choices and writes them to the page. USE ARGUMENTS
// Once the user clicks on one of the choices, a giphy appears.
// As a user I want to be able to go and Click on a button. When I click the button, the text within that button needs to be used as the searhc criteria for the Giphy API
// ALl of the results should be appended to the page.
// If a Gif is frozen, when I click it, I want it to be animated and vice versa.
// A user should be able to go and add a button using the input field


// when user clicks on a gif, we want to make sure that the gif toggles 
// we need frozen url, then write an if statement 

$(document).ready(() => {

    // Create an array of choices for our buttons
    let animalArray = ["dog", "cat", "lion"]
    // Each choice gets its own button. Write a function thtta takes the choices and writes them to the page. USE ARGUMENTS
    const create_buttons = (choices) => {
        choices.forEach(choice => {
            $("#buttons-view").append(`<button class="gifsearch">${choice}</button>`)
        })
    }
    create_buttons(animalArray)
    // Once the user clicks on one of the choices, a giphy appears.
    function search_ghify(search) {
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=4nGH0IN0NkelAKPvlQu4QdbvOGkkcRWG`,
            method: "GET"
        }).then(res => {
            console.log(res)
            res.data.forEach(pic => {
                $("#img_div").append(`<img src=${pic.images.fixed_height_small.url} data="animated" still=${pic.images.original_still.url}/>`)
            })
        })
    }

    // As a user I want to be able to go and Click on a button. When I click the button, the text within that button needs to be used as the searhc criteria for the Giphy API
    $("#add-animal").on("click", function (event) {
        event.preventDefault();
        let animal = $("#animal-input").val().trim();
        // animal input from the textbox is then added to animalArray array
        animalArray.push(animal);
        $('#animal-input').text('input').val('')
        search_ghify(animal)
    });

    $("#buttons-view").on("click", ".gifsearch", function () {
        search_ghify($(this).text())
    })

    $("#img_div").on("click", "img", function () {
        let state = $(this).attr("data")
        if (state === "animated") {
            // Set THIS arrtibute src to thhe one we set as still
            $(this).attr("moving", $(this).attr("src"))
            $(this).attr("src", $(this).attr("still"));
            $(this).attr("data", "noooooooope")
        } else {
            $(this).attr("src", $(this).attr("moving"));
            $(this).attr("data", "animated")
        }
    });

    // ALl of the results should be appended to the page.
    // If a Gif is frozen, when I click it, I want it to be animated and vice versa.



    // A user should be able to go and add a button using the input field
})