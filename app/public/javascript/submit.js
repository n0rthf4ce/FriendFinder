$(document).ready(function () {
    $("#submitNewPerson").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var userScores = [];
        for (let i = 1; i <= 10; i++) {
            userScores.push($(`#q${i}`).val().trim());

        }
        var newPerson = {
            name: $("#userName").val().trim(),
            photo: $("#userPhotoURL").val().trim(),
            scores: userScores,
        };

        // Send the POST request.
        $.post("/api/friends", newPerson,
            function (data) {
                if (data) {
                    console.log(data);
                    $("#bestFriendInfo").html(`<h3>${data.name}</h3><img src=${data.url} alt="no image">`)
                }
                $("#userName").val("");
                $("#userPhotoURL").val("");
            }
        );
    });
});