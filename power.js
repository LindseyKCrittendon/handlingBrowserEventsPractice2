// document.querySelector("#activate-flight").addEventListener()
// Add the correct string as the first argument to addEventListener()

document.querySelector("#activate-flight").addEventListener("click", function(){
    const flightHandlerFunction = document.querySelector("#flight");
    flightHandlerFunction.classList.toggle("enabled")
    console.log("you clicked the activate flight button")
    flightHandlerFunction.classList.toggle("disabled").remove
} )

// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

// Have your developer tools open. When you click the button, the following element...
// <section id="flight" class="power disabled">
// Should then look like this.

// <section id="flight" class="power enabled">
// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

document.querySelector("#activate-mindreading").addEventListener("click", function(){
    const mindReaderFunction = document.querySelector("#mindreading");
    mindReaderFunction.classList.toggle("enabled")
    console.log("you pressed the mind reading button")
    mindReaderFunction.classList.toggle("disabled").remove
})

document.querySelector("#activate-xray").addEventListener("click", function(){
    const xrayFunction = document.querySelector("#xray");
    xrayFunction.classList.toggle("enabled")
    console.log("Thanks for clicking activate xray")
    xrayFunction.classList.toggle("disabled").remove
})

// Once that is complete, add two more buttons
document.querySelector("#activate-all").addEventListener("click", function(){
    const activateAllFunction = document.querySelectorAll("#powerList");
    
    activateAllFunction.classList.add("enabled")
    console.log("activate-all clicked")
    activateAllFunction.classList.remove("disabled")
})

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.