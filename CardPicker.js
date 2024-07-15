
var cards = document.querySelectorAll("#card");
var arrayOfNumbers = [];
var collectionOfResults = [];

for(var i = 0; i < 6; i++) {
    var randomNumber = Math.floor(Math.random() * 100);
    arrayOfNumbers.push(randomNumber);
}

cards.forEach(function(card, index) {
    card.textContent = arrayOfNumbers[index];

    card.addEventListener("click", function() {
        var result = document.getElementById("result");
        collectionOfResults.push(arrayOfNumbers[index]);
        result.innerHTML = collectionOfResults[0] + " " + "+";
        console.log(collectionOfResults[0]);

        if (collectionOfResults.length == 2) {
            let totalResult = collectionOfResults[0] + collectionOfResults[1];
            result.innerHTML = collectionOfResults[0] + " " + "+" + " " + collectionOfResults[1] + " " + "=" + " " + totalResult; 
            collectionOfResults.length = 0;
        }
    });
});



