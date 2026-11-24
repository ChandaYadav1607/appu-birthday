
const floatingContainer = document.getElementById("floatingElements");

function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "✧";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (25 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    floatingContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createFloatingHeart, 500);


// Move from welcome screen to birthday screen + start music

const welcomeScreen = document.querySelector(".welcome-screen");
const birthdayScreen = document.getElementById("birthdayScreen");

const birthdayMusic = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");

document.getElementById("openSurprise").addEventListener("click", () => {

    welcomeScreen.style.display = "none";
    birthdayScreen.style.display = "flex";

    birthdayMusic.play().then(() => {
        musicToggle.textContent = "♫";
    }).catch((error) => {
        console.log("Music could not start:", error);
    });

});

// Music play/pause button

musicToggle.addEventListener("click", () => {

    if (birthdayMusic.paused) {

        birthdayMusic.play().then(() => {
            musicToggle.textContent = "♫";
        }).catch((error) => {
            console.log("Music could not play:", error);
        });

    } else {

        birthdayMusic.pause();
        musicToggle.textContent = "♪";

    }

});

// Candle blowing interaction

const blowButton = document.getElementById("blowCandles");
const birthdayCake = document.getElementById("birthdayCake");
const afterWish = document.getElementById("afterWish");
const nextButton = document.getElementById("nextToBalloons");

blowButton.addEventListener("click", () => {

    birthdayCake.innerHTML = `
    🎂
    <span class="smoke" id="candleSmoke">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </span>
`;

    birthdayCake.classList.add("blown");

    document.getElementById("wishText").innerHTML =
        "Yayyy! Your wish is on its way! 💗";

    afterWish.style.display = "block";

    blowButton.style.display = "none";

    nextButton.style.display = "inline-block";

});

// Move from birthday cake to balloon screen

const balloonScreen = document.getElementById("balloonScreen");

nextButton.addEventListener("click", () => {
    birthdayScreen.style.display = "none";
    balloonScreen.style.display = "flex";
    balloonScreen.scrollIntoView({ behavior: "smooth" });
});


// Balloon popping interaction

const balloons = document.querySelectorAll(".balloon");
const balloonMessage = document.getElementById("balloonMessage");
const balloonCounter = document.getElementById("balloonCounter");
const nextPartyButton = document.getElementById("nextToParty");

let poppedCount = 0;

balloons.forEach((balloon) => {

    balloon.addEventListener("click", () => {

        // Prevent popping the same balloon twice
        if (balloon.classList.contains("popped")) {
            return;
        }

        // Get the hidden message
        const message = balloon.dataset.message;

        // Show the message
        const wrapper = balloon.parentElement;
const localMessage = wrapper.querySelector(".pop-message");

localMessage.textContent = message;
localMessage.classList.add("show");

        // Pop the balloon
        balloon.classList.add("popped");

        // Update the counter
        poppedCount++;

        balloonCounter.textContent =
            `Balloons popped: ${poppedCount}/6`;

        // Show party button after all balloons are popped
        if (poppedCount === balloons.length) {
            nextPartyButton.style.display = "inline-block";
            balloonMessage.textContent =
                "You popped them all! Now let's celebrate, Appu! 💗";
        }

    });

});

// Move from balloons to party screen

const partyScreen = document.getElementById("partyScreen");

nextPartyButton.addEventListener("click", () => {
    balloonScreen.style.display = "none";
    partyScreen.style.display = "flex";
    partyScreen.scrollIntoView({ behavior: "smooth" });
});


// Birthday confetti celebration

const confettiButton = document.getElementById("popConfetti");
const confettiContainer = document.getElementById("confettiContainer");
const partyMessage = document.getElementById("partyMessage");
const scrapbookButton = document.getElementById("nextToScrapbook");

function createConfetti() {

    const confettiSymbols = ["🎊", "💗", "✨", "🎉", "💕"];

    for (let i = 0; i < 70; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti-piece");

        piece.textContent =
            confettiSymbols[Math.floor(Math.random() * confettiSymbols.length)];

        piece.style.left = Math.random() * 100 + "%";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5500);
    }
}


// Pop the party button

confettiButton.addEventListener("click", () => {

    createConfetti();

    partyMessage.textContent =
        "Wishing you endless happiness, laughter and magic! 💗";

    scrapbookButton.style.display = "inline-block";

});

// ===== OPEN PHOTO SCRAPBOOK =====

const nextToScrapbook = document.getElementById("nextToScrapbook");
const scrapbookScreen = document.getElementById("scrapbookScreen");

nextToScrapbook.addEventListener("click", () => {
    document.querySelector(".party-screen").style.display = "none";
    scrapbookScreen.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== OPEN FINAL BIRTHDAY LETTER =====

const nextToLetter = document.getElementById("nextToLetter");
const letterScreen = document.getElementById("letterScreen");

nextToLetter.addEventListener("click", () => {
    scrapbookScreen.style.display = "none";
    letterScreen.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== OPEN THE BIRTHDAY ENVELOPE =====

const openLetter = document.getElementById("openLetter");
const envelopeWrapper = document.getElementById("envelopeWrapper");
const letterContainer = document.getElementById("letterContainer");

openLetter.addEventListener("click", () => {

    envelopeWrapper.classList.add("opened");

    setTimeout(() => {
        envelopeWrapper.style.display = "none";
        letterContainer.style.display = "block";

        letterContainer.style.animation = "envelopeAppear 1s ease";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

});
// ===== OPEN FINAL BIRTHDAY SCREEN =====

const finishLetter = document.getElementById("finishLetter");
const finalScreen = document.getElementById("finalScreen");

finishLetter.addEventListener("click", () => {

    letterScreen.style.display = "none";
    finalScreen.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});