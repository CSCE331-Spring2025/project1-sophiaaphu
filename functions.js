function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const stylesheet = document.getElementById("main-stylesheet");
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    const currentStyle = stylesheet.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    const newStyle = (currentStyle === "styles.css")?"styles2.css":"styles.css";
   

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    stylesheet.setAttribute("href", newStyle);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("selectedStyle", newStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const savedStyle = localStorage.getItem("selectedStyle");

    // 2 (b) get html style element by ID
    const stylesheet = document.getElementById("main-stylesheet");
    
    // 2 (c) replace href attribute of html element.
    if (savedStyle) {
        stylesheet.setAttribute("href", savedStyle);
    }
    
}
