

const menuBtn = document.querySelector('.menu-btn')

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.querySelector(".overlay").style.display = "block";
        document.querySelector(".nav-links").style.display = "block";
        // document.querySelector(".menu").style.display = "block";

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".nav-links").style.display = "none";
        // document.querySelector(".menu").style.display = "none";
    }
});


// for (let hashtag = "#"; hashtag.length < 8; hashtag += "#") {
//     console.log(hashtag);
//     break;
// }

// for (let counter = 0; counter.length < 101; counter++) {
//     if (counter % 3 === 0) {
//         console.log("Fizz");
//     } else if (counter % 5 === 0) {
//         console.log("Buzz");
//     } else if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(counter);
//     }
// }