// ======================================================
// ---------- On Scroll Sticky Navbar Function ----------
// ======================================================
window.addEventListener("scroll", function() {
    // // console debug function
    // console.log("Onscroll event called");
    let headObject = document.getElementById("hero");
    let navObject = document.getElementById("navbar");
    if (window.scrollY >= headObject.offsetHeight && !navObject.classList.contains("fixed-top")) {
        if (window.innerWidth >= 768) {
            navObject.style.padding = "8px 0";
            let links = document.getElementsByClassName("_navLink_a");
            for (const link of links) {
                link.style.fontSize = "1.1em";
                link.style.padding = "6px 16px";
            }
            // // console debug function
            // console.log("navbar resizing successful");
        }
        headObject.style.marginBottom = `${navObject.offsetHeight}px`;
        navObject.classList.add("fixed-top");
        navObject.style.boxShadow = "0 0 3px var(--color-main)";
        // // console debug function
        // console.log("navbar fixed to top");
    }
    else if (window.scrollY < headObject.offsetHeight && navObject.classList.contains("fixed-top")) {
        if (window.innerWidth >= 768) {
            navObject.style.padding = "16px 0";
            let links = document.getElementsByClassName("_navLink_a");
            for (const link of links) {
                link.style.fontSize = "1.25em";
                link.style.padding = "8px 16px";
            }
            // // console debug function
            // console.log("navbar resizing successful");
        }
        navObject.style.boxShadow = "0 0 0 var(--color-main)";
        navObject.classList.remove("fixed-top");
        headObject.style.marginBottom = `0px`;
        // // console debug function
        // console.log("navbar unfixed");
    }
});
// ======================================================
// ------------- Google Map Source Switcher -------------
// ======================================================
// // Source variables
let mapSourceDefault = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80797.7896696666!2d25.263965228817042!3d50.73976997371188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599eba185965d%3A0xd25274a2228db86c!2z0JvRg9GG0YzQuiwg0JLQvtC70LjQvdGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1suk!2sua!4v1648305877877!5m2!1suk!2sua";
let mapSource1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.978287546021!2d25.32112821610586!3d50.738891579516206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4725999322fe7451%3A0x56b271b841e4acfd!2z0JfQsNC80L7QuiDQm9GO0LHQsNGA0YLQsA!5e0!3m2!1sru!2sua!4v1653237264964!5m2!1sru!2sua";
let mapSource2 = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d344.1908146942179!2d25.321701727460944!3d50.738583511437255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1653267415209!5m2!1sen!2sua";
let mapSource3 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.0206010959014!2d25.317539815764917!3d50.73810677951614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599932462b041%3A0x928f63bfdabebab7!2sLutsk%20Dungeon%2C%20purchase%20tickets%20at%20Lutsk%20Castle!5e0!3m2!1sen!2sua!4v1653266301109!5m2!1sen!2sua";
let mapSource4 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.6873780871983!2d25.364974715765843!3d50.76283017951974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4725917817813971%3A0xe124d5e1029b36aa!2sTratoriya%20Felichita!5e0!3m2!1sen!2sua!4v1653266496762!5m2!1sen!2sua";
let mapSource5 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.4875548723094!2d25.321076215765174!3d50.74799267951741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599e8c056e75d%3A0xfed12e5037069602!2sShow%20Basilic!5e0!3m2!1sen!2sua!4v1653266561109!5m2!1sen!2sua";
let mapSource6 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.0041243162864!2d25.31994601576494!3d50.738412379516106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47259992cbe457f7%3A0xab9b008527c2f0c7!2sVitovts%20Crown!5e0!3m2!1sen!2sua!4v1653266648937!5m2!1sen!2sua";
let mapSource7 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.4247753342315!2d25.357970217443846!3d50.7491569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472590aa75ab7f51%3A0x7b1530f053fd2297!2sSribni%20Leleky!5e0!3m2!1sen!2sua!4v1653267037711!5m2!1sen!2sua";
let mapSource8 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.688927377781!2d25.322216715765173!3d50.74425817951696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599ee99c44f31%3A0x2702983571352f9e!2sNoble%20Boutique%20Hotel!5e0!3m2!1sen!2sua!4v1653267085077!5m2!1sen!2sua";
let mapSource9 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.4857655678748!2d25.321998046343925!3d50.74802586169326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599e067fc0d91%3A0x3d791988debb04bc!2z0JPQvtGC0LXQu9GMIiDQo9C60YDQsNGX0L3QsCIg0JvRg9GG0YzQug!5e0!3m2!1sen!2sua!4v1653267200767!5m2!1sen!2sua";
function buttonMapClick(button) {
    // // console debug function
    // console.log("buttonMapClick called successful");
    let mapObject = document.getElementById("mapFrame");
    switch (button.id) {
        case "buttonMap1":
            mapObject.setAttribute("src", mapSource1);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource1");
            break;
        case "buttonMap2":
            mapObject.setAttribute("src", mapSource2);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource2");
            break;
        case "buttonMap3":
            mapObject.setAttribute("src", mapSource3);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource3");
            break;
        case "buttonMap4":
            mapObject.setAttribute("src", mapSource4);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource4");
            break;
        case "buttonMap5":
            mapObject.setAttribute("src", mapSource5);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource5");
            break;
        case "buttonMap6":
            mapObject.setAttribute("src", mapSource6);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource6");
            break;
        case "buttonMap7":
            mapObject.setAttribute("src", mapSource7);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource7");
            break;
        case "buttonMap8":
            mapObject.setAttribute("src", mapSource8);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource8");
            break;
        case "buttonMap9":
            mapObject.setAttribute("src", mapSource9);
            setButtonDefaultMapVisible(true);
            // // console debug function
            // console.log("Map source set to mapSource9");
            break;
        case "buttonDefaultMap":
            mapObject.setAttribute("src", mapSourceDefault);
            // // console debug function
            // console.log("Map source set to mapSourceDefault");
            // // Button onclick animation
            button.style.transform = "rotate(720deg)";
            button.style.transition = "ease-in-out 0.5s";
            setTimeout(function () {
                setButtonDefaultMapVisible(false);
                button.style.transform = null;
                button.style.transition = null;
            }, 500)
            // // console debug function
            // console.log("buttonDefaultMap onclick animation successful");
            break;
    }
    window.location.href = "#map";
}
function setButtonDefaultMapVisible(isVisible) {
    let button = document.getElementById("buttonDefaultMap");
    if (!isVisible) {
        button.classList.add("invisible");
        // // console debug function
        // console.log("buttonDefaultMap visibility true");
    }
    else {
        button.classList.remove("invisible");
        // // console debug function
        // console.log("buttonDefaultMap visibility false");
    }
}