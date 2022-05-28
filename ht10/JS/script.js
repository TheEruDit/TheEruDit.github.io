// ======================================================
// ---------- On Load & Resize Reviews Resizing----------
// ======================================================
window.addEventListener('load', function () {
    // // console debug function
    // console.log("Load event called");
    if (window.innerWidth < 992) {
        // // console debug function
        // console.log("Window width too small");
        return;
    }
    let maxHeight = 0;
    let reviews = document.getElementsByClassName("review");
    for (const review of reviews) {
        if (review.offsetHeight > maxHeight)
            maxHeight = review.offsetHeight;
    }
    // // console debug function
    // console.log("Reviews max height found successful");
    reviewsResize(reviews, maxHeight);
});
window.addEventListener('resize', function() {
    // // console debug function
    // console.log("Resize event called");
    if (window.innerWidth < 992) {
        // // console debug function
        // console.log("Window width too small");
        return;
    }
    let maxHeight = 0;
    let reviews = document.getElementsByClassName("review");
    for (const review of reviews) {
        review.style.height = "100%";
        if (review.offsetHeight > maxHeight)
            maxHeight = review.offsetHeight;
    }
    // // console debug function
    // console.log("Reviews max height found successful");
    reviewsResize(reviews, maxHeight);
});
function reviewsResize(reviews, height) {
    for (const review of reviews) {
        review.style.height = `${height}px`;
    }
    // // console debug function
    // console.log("Reviews resizing successful");
}



// ======================================================
// ---------- On Scroll Sticky Navbar Function ----------
// ======================================================
window.addEventListener("scroll", function() {
    // // console debug function
    // console.log("Onscroll event called");
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
            // console.log("Navbar resizing successful for >= 992px window");
        }
        else if (window.innerWidth >= 576) {
            home.style.height = "80px";
            for (const navImageRow of navImageRows) {
                navImageRow.style.height = "0";
            }
            // // console debug function
            // console.log("Navbar resizing successful for >= 576px window");
        }
        else {
            home.style.height = "50px";
            for (const navImageRow of navImageRows) {
                navImageRow.style.height = "0";
            }
            // // console debug function
            // console.log("Navbar resizing successful for < 576px window");
        }
    }
    else if (window.scrollY === 0) {
        if (window.innerWidth > 990) {
            home.style.height = "100px";
            for (const navRow of navRows) {
                navRow.style.height = "100px";
            }
            for (const navLink of navLinks) {
                navLink.style.padding = "12px";
            }
            // // console debug function
            // console.log("Navbar resizing successful for >= 992px window");
        }
        else if (window.innerWidth > 576){
            home.style.height = "160px";
            for (const navImageRow of navImageRows) {
                navImageRow.style.height = "80px";
            }
            // // console debug function
            // console.log("Navbar resizing successful for >= 576px window");
        }
        else {
            home.style.height = "100px";
            for (const navImageRow of navImageRows) {
                navImageRow.style.height = "50px";
            }
            // // console debug function
            // console.log("Navbar resizing successful for < 576px window");
        }
    }
});

