$("#submit").on("click", submitNewBurger);
function submitNewBurger() {
    const newBurgerName = $("#newBurger").val().trim();
    const data = {
        name: newBurgerName
    }
    const url = "/submit";
    $.ajax({
        url: url,
        type: "POST",
        data: data
    }).then(function (err, response) {
        location.reload();
    })
}
$("button").on("click", function () {
    event.preventDefault();
    let BurgerId = $(this).attr("id");
    if (BurgerId === "submit") {

    } else {
        devourBurger(BurgerId);
    }



});

function devourBurger(BurgerId) {
    const devouredStatus = {
        devoured: true
    }
    const url = "/devour/" + BurgerId;
    $.ajax({
        url: url,
        type: "PUT",
        data: devouredStatus
    }).then(function () {
        location.reload();
    })
}