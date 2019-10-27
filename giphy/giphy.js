$(document).ready(() => {
    console.log("Nailed it")

    // Create an array of choices for our buttons
    let array = ["Tom brady", "tacos", "puppies"]
    // Each choice gets its own button. Write a function thtta takes the choices and writes them to the page. USE ARGUMENTS
    const create_buttons = (choices) => {
        choices.forEach(choice => {
            $("#buttons").append(`<button>${choice}</button>`)
        })
    }
    create_buttons(array)
    // Once the user clicks on one of the choices, a giphy appears.
    function search_ghify(search) {
        $.ajax({
            url: "",
            method: "GET"
        }).then(res => {
            console.log(res)
        })
    }

    // As a user I want to be able to go and Click on a button. When I click the button, the text within that button needs to be used as the searhc criteria for the Giphy API
    // ALl of the results should be appended to the page.
    // If a Gif is frozen, when I click it, I want it to be animated and vice versa.



    // A user should be able to go and add a button using the input field
})
