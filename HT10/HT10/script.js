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
            // navLogo.style.margin = "5px 0";
            // let links = document.getElementsByClassName("_navLink_a");
            // for (const link of links) {
            //     link.style.fontSize = "1.1em";
            //     link.style.padding = "6px 16px";
            // }
            // // console debug function
            // console.log("navbar resizing successful");
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
            // navLogo.style.height = "80px";
            // navLogo.style.margin = "10px 0";
            // let links = document.getElementsByClassName("_navLink_a");
            // for (const link of links) {
            //     link.style.fontSize = "1.1em";
            //     link.style.padding = "6px 16px";
            // }
            // // console debug function
            // console.log("navbar resizing successful");
        }
        // // console debug function
        // console.log("navbar fixed to top");
    }
});

