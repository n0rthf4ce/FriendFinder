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
                var diff=10000,newDiff,bestFriendName,bestFriendURL;

                if (data) {
                    console.log(data);
                    for (let i = 0; i < data.length-1; i++) {
                        newDiff = 0;
                        const SCORES = data[i]["scores[]"];
                        for (let i = 0; i < SCORES.length; i++) {
                            newDiff += Math.abs(SCORES[i] - newPerson.scores[i]);
                        };
                        if (diff > newDiff) {
                            diff = newDiff;
                            bestFriendName = data[i].name;
                            bestFriendURL = data[i].photo;
                        }   
                    };
                }
                console.log(bestFriendName,bestFriendURL);
                $("#bestFriendInfo").html(`<h3>${bestFriendName}</h3><img src=${bestFriendURL} alt="no image">`)
                $("#userName").val("");
                $("#userPhotoURL").val("");
            }
        );
    });
});