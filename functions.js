function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    let stylesheet = document.getElementById("main-stylesheet");
    let navbarLogo = document.getElementById("sophia-phu-logo");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    let currentStyle = stylesheet.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    let newStyle, newLogo;
    if(currentStyle === "styles.css"){
        newStyle = "styles2.css"
        newLogo = "./assets/sophia-phu-logo-white.png";
    }    
    else{
        newStyle = "styles.css";
        newLogo = "./assets/sophia-phu-logo.png";
    }
   

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    stylesheet.setAttribute("href", newStyle);
    navbarLogo.setAttribute("src", newLogo);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("selectedStyle", newStyle);
    localStorage.setItem("navbarLogo", newLogo);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    let savedStyle = localStorage.getItem("selectedStyle");
    let savedLogo = localStorage.getItem("navbarLogo");

    // 2 (b) get html style element by ID
    let stylesheet = document.getElementById("main-stylesheet");
    let navbarLogo = document.getElementById("sophia-phu-logo");
    
    // 2 (c) replace href attribute of html element.
    if (savedStyle) {
        stylesheet.setAttribute("href", savedStyle);
    }
    if (savedLogo) {
        navbarLogo.setAttribute("src", savedLogo);
    }
}
