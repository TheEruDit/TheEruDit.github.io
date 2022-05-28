window.addEventListener('load', function () {
    let maxHeight = 0;
    let reviews = document.getElementsByClassName("review");
    for (const review of reviews) {
        if (review.offsetHeight > maxHeight)
            maxHeight = review.offsetHeight;
    }
    reviewsResize(reviews, maxHeight);
});
window.addEventListener('resize', function() {
    let maxHeight = 0;
    let reviews = document.getElementsByClassName("review");
    for (const review of reviews) {
        review.style.height = "100%";
        if (review.offsetHeight > maxHeight)
            maxHeight = review.offsetHeight;
    }
    reviewsResize(reviews, maxHeight);
});
function reviewsResize(reviews, height) {
    for (const review of reviews) {
        review.style.height = `${height}px`;
    }
}



// ======================================================
// ---------- On Scroll Sticky Navbar Function ----------
// ======================================================
window.addEventListener("scroll", function() {
    // // console debug function
    // console.log("Onscroll event called");
    let navLogo = document.getElementById("navbarLogo");
    let home = document.getElementById("home");
    let navRows = document.getElementsByClassName("navRow");
    let navImageRows = document.getElementsByClassName("navImageRow");
    let navLinks = document.getElementsByClassName("navLink-a");
    if (window.scrollY > 0) {
        if (window.innerWidth >= 992) {
            home.style.height = "60px";
            for (const navRow of navRows) {
                navRow.style.height = "60px";
            }
            for (const navLink of navLinks) {
                navLink.style.padding = "8px 12px";
            }
            // // console debug function
            // console.log("navbar resizing successful");
        }
        else {
            home.style.height = "75px";
            for (const navImageRow of navImageRows) {
                navImageRow.style.height = "0";
            }
        }
        // // console debug function
        // console.log("navbar fixed to top");
    }
    else if (window.scrollY === 0) {
        if (window.innerWidth >= 992) {
            home.style.height = "100px";
            for (const navRow of navRows) {
                navRow.style.height = "100px";
            }
            for (const navLink of navLinks) {
                navLink.style.padding = "12px";
            }
            // // console debug function
            // console.log("navbar resizing successful");
        }
        else {
            home.style.height = "150px";
            for (const navImageRow of navImageRows) {
                navImageRow.style.height = "75px";
            }
        }
        // // console debug function
        // console.log("navbar fixed to top");
    }
});
