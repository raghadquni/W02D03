function Fsize() {
    let element = document.querySelectorAll("h1");
   element.forEach((h1) =>  h1.style.fontSize = "25px" ,

    ); //  Change the size of a heading
} // Q : How can I change 2 heading (h1,h2) 



function fontP() {
    let element = document.querySelectorAll("p");
    element.forEach((p) => p.style.fontFamily = "arial"
    );
}  // Change the font style of a paragraph




function HighlightP() {
    let element = document.getElementById("para");
    element.style.backgroundColor = "green";
} // Highlight a paragraph with back-ground



function Hide() {
    let element = document.querySelector("img");
    element.style.display = "none";
} //  Hide an Image




function Alternate() {
    if (ItImg.getAttribute('src') === "Unknown.jpeg") {
        ItImg.setAttribute('src', "sql.png");
    }
} // Alternate between two images

/* function MouseRollover(MyImage) {
    MyImage.src = "r.jpeg";
}
function MouseOut(MyImage) {
    MyImage.src = "a.jpeg";
}

*/ 
// all ways in external and inernal is god but this i don't undrstand well




function Alternate() {
    
}