/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

document.getElementById("enterbtn").onclick = function() {

    var text = document.getElementById("fnbox").value; 
    var text1 = document.getElementById("mnbox").value;
    var text2 = document.getElementById("lnbox").value;
    var text3 = document.getElementById("dobbox").value;
    var text4 = document.getElementById("phonebox").value;
    var text5 = document.getElementById("box").value;
    var li = document.createElement("li");
    li.textContent = text;
    document.getElementById("list").appendChild(li);
    document.getElementById("fnbox").value = ""; // clear the value

}
document.getElementById("button1").onclick = function() {
  location.href = "signin.html";
}
document.getElementById("button2").onclick = function() {
  location.href = "code.html";
}
document.getElementById("backbtn").onclick = function() {
  location.href = "index.html";
}
