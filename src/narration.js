// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    duration: 200, // the scene should last for a scroll distance of 100px
    offset: 100 // start this scene after scrolling for 50px
})
    .setPin('#testScroll') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller