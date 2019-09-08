$(function () {
    $(".devour").on("click", event => {
        const id = $(event.currentTarget).data("id");
        const newDevour = $(event.currentTarget).data("newdevour");
        const newDevourState = {
            devoured: newDevour
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(() => {
            console.log("changed devoured to", newDevour);
            location.reload();
        })
    });
    $('.create-form').on('submit', event => {
        // event.preventDefault();
        // const newBurger = {
        //     burger_name: $("#burger").val().trim(),
        //     devoured: 1
        // };
        // $.ajax("/api/burgers", {
        //     type: 'POST',
        //     data: newBurger
        // }).then(() => {
        //     console.log("new burger created");
        //     location.reload();
        // })
    });
    // $(".delete-burger").on("click", function (event) {
    //     var id = $(this).data("id");
    //     // Send the DELETE request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted burger", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});