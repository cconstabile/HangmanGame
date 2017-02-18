
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    var categories; // Array of topics
    var chosenCategory; // Selected category
    var getHint; // Word getHint
    var word; // Selected word
    var guess; // Guess
    var guessedLetters = []; // Stored guesses
    var lives; // Lives
    var counter; // Count correct guesses
    var space; // Number of spaces in word ' '
    var start;
    var wins;
    var losses; 

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCategory = document.getElementById("scategory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");


    // create alphabet ul
    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Catagory
    var selectCat = function() {
        if (chosenCategory === categories[0]) {
            categoryName.innerHTML = "Category: Music";
        } else if (chosenCategory === categories[1]) {
            categoryName.innerHTML = "Category: Movies";
        } else if (chosenCategory === categories[2]) {
            categoryName.innerHTML = "Category: Places";
        } else if (chosenCategory === categories[3]) {
            categoryName.innerHTML = "Category: Foods";
        }
    }

    // Create guesses ul
    result = function() {
        wordHolder = document.getElementById("hold");
        correct = document.createElement("ul");

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute("id", "my-word");
            guess = document.createElement("li");
            guess.setAttribute("class", "guess");
            if (word[i] === "-") {
                guess.innerHTML = " ";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guessedLetters.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function() {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
    //        losses.innerHTML = "losses" + 1;
      //      losses = losses + 1; 
        }       

        for (var i = 0; i < guessedLetters.length; i++) {
            if (counter + space === guessedLetters.length) {
                showLives.innerHTML = "You Win!";
//                document.getElementById("wins");
  //              win = win + 1;
                            }
        }
    }

    // OnClick Function
    check = function() {
        list.onclick = function() {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guessedLetters[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }


    // Play
    play = function() {
        categories = [
            //music
            ["GOO GOO DOLLS", "THE BEATLES", "MY CHEMICAL ROMANCE", "ELTON JOHN", "MICHAEL JACKSON", "CANT STOP THE FEELING", "SHAPE OF YOU", "STILL BREATHING", "CALIFORNIA", "POMPEII"],
            //Movies
            ["PULP FICTION", "GOOD WILL HUNTING", "THE WIZARD OF OZ", "LORD OF THE RINGS", "HARRY POTTER", "THE DAVINCI CODE", "MRS DOUBTFIRE", "THE HUNGER GAMES", "LES MISERABLES", "PHANTOM OF THE OPERA"],
            //places   
            ["MARSEILLE", "CZECHOSLOVAKIA", "ITALY", "AMSTERDAM", "LOS ANGELES", "NEW YORK", "NEW BRUNSWICK", "UNITED KINGDOM", "TUNISIA", "VENICE", "LONDON"],
            //foods
            ["LASAGNA", "CHICKEN WINGS", "FRIED CHICKEN", "CHEESEBURGER", "CALIFORNIA ROLL", "AVOCADO", "TURKEY CLUB", "STIR FRY", "CHOCOLATE CAKE", "CHEESECAKE", "CHOCOLATE CHIP COOKIES"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guessedLetters = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        check();    
    }

    // Clues
    hint.onclick = function() {
        hints = [
            ["90s Band, originally from Buffalo, NY", "One of the biggest bands of all time", "Made a comeback at the 2006 VMAs", "Piano Player", "King of Pop", "Justin Timberlake's hit of 2016", "Ed Sheeran's first single of 2017", "Greenday's newest realease", "Blink 182's newest album", "Also a city in Italy"],
            ["Stars Uma Thurman, John Travolta and Samuel L Jackson", "Written by Matt Damon and Ben Affleck", "One of the first movies released in technicolor", "Trilogy based on books by JRR Tolkein", "It has 7 parts and 8 films", "Tom Hanks solves the mysteries of religion", "Stars Robin Williams as a woman", "Starring Jennifer Lawrence and Josh Hutcherson", "A musical set in Revolutionary France", "Set in a Paris opera house"],
            ["Port city in France", "Declared independence from Austria-Hungary in 1918", "Home of pasta and pizza", "Netherlands capital", "2nd largest city in the US", "1st largest city in the US", "One of Canada's eastern provinces", "Union Jack is their flag", "Has a replica of the Coloseum but is not in Europe", "A city in both Italy and California", "Capital city of England"],
            ["Layers of meat, sauce and cheese", "originally made in Buffalo", "a staple in the Southern US", "In n Out makes the best", "sushi with avocado", "Green and has a large pit", "Three layered Sandwich", "Vegetables with rice and soy sauce", "a decadent desert", "NY is known for them", "Nestle Tollhouse makes the best"]
        ];

        var categoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Clue: - " + hints[categoryIndex][hintIndex];
    };

    // Reset
    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
       // showClue.innerHTML = "";
        play(); 

        return;
}

    document.getElementById('start').onclick = function() {
        play(); 
        return;
	}
