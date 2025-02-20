// function toggleStyleSheet(){
//     // Task 1
//     // Steps
//     // 1 (a) Get style element by ID (hint: getElementById)
//     let stylesheet = document.getElementById("main-stylesheet");
//     let navbarLogo = document.getElementById("sophia-phu-logo");
//     let homepagePic = document.getElementById("homepage-pic");
//     // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
//     let currentStyle = stylesheet.getAttribute("href");
   
//     // 1 (c) Determine new stylesheet file name
//     let newStyle, newLogo, newPic;
//     if(currentStyle === "./styles.css"){
//         newStyle = "./styles2.css"
//         newLogo = "./assets/sophia-phu-logo-white.png";
//         newPic = "./assets/homepage-pic-dark.png";
//     }    
//     else{
//         newStyle = "./styles.css";
//         newLogo = "./assets/sophia-phu-logo.png";
//         newPic = "./assets/homepage-pic.png";
//     }
   

//     // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
//     stylesheet.setAttribute("href", newStyle);
//     navbarLogo.setAttribute("src", newLogo);
//     homepagePic.setAttribute("src", newPic);

//     // TASK 2
//     // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
//     // hint: localStorage.setItem(name, value)
//     localStorage.setItem("selectedStyle", newStyle);
//     localStorage.setItem("navbarLogo", newLogo);
//     localStorage.setItem("homepagePic", newPic);
// }


// window.onload = function(){
//     // TASK 2
//     // TODO: Make the last div color persist even when someone refreshes the page.

//     // Steps
//     // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
//     let savedStyle = localStorage.getItem("selectedStyle");
//     let savedLogo = localStorage.getItem("navbarLogo");
//     let savedPic = localStorage.getItem("homepagePic");

//     // 2 (b) get html style element by ID
//     let stylesheet = document.getElementById("main-stylesheet");
//     let navbarLogo = document.getElementById("sophia-phu-logo");
//     let homepagePic = document.getElementById("homepage-pic");
    
//     // 2 (c) replace href attribute of html element.
//     if (savedStyle) {
//         stylesheet.setAttribute("href", savedStyle);
//     }
//     if (savedLogo) {
//         navbarLogo.setAttribute("src", savedLogo);
//     }
//     if (savedPic){
//         homepagePic.setAttribute("src", savedPic);
//     }
// }

function toggleStyleSheet(){
    let stylesheet = document.getElementById("main-stylesheet");
    let navbarLogo = document.getElementById("sophia-phu-logo");
    let homepagePic = document.getElementById("homepage-pic");
    let newStyle = "styles.css"; 
    let newLogo = "assets/sophia-phu-logo.png";
    let newImage = "assets/homepage-pic.png";
    if (stylesheet.getAttribute("href") === "styles.css"){
        newStyle = "styles2.css"; 
        newLogo = "assets/sophia-phu-logo-white.png"; 
        newImage = "assets/homepage-pic-dark.png"
    } 
    else{ 
        newStyle = "styles.css"; 
        newLogo = "assets/sophia-phu-logo.png";
        newImage = "assets/homepage-pic.png"
    }

    stylesheet.setAttribute("href", newStyle);
    localStorage.setItem("currStyle", newStyle);
    navbarLogo.setAttribute("src", newLogo);
    localStorage.setItem("currLogo", newLogo);
    homepagePic.setAttribute("src", newImage);
    localStorage.setItem("currImage", newImage);
}

window.onload = function(){
    let savedStyle = localStorage.getItem("currStyle") || "styles.css";
    document.getElementById("main-stylesheet").setAttribute("href", savedStyle);

    let savedLogo = localStorage.getItem("currLogo") || "/assets/sophia-phu-logo.png";
    document.getElementById("sophia-phu-logo").setAttribute("src", savedLogo);

    let savedImage = localStorage.getItem("currImage") || "/assets/homepage-pic.png";
    document.getElementById("homepage-pic").setAttribute("src", savedImage);
}
