var morphing = anime({
    targets: '#morphing .polymorph',
    points: [
      { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
      { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
      { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
      { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    ],
    easing: 'easeOutQuad',
    duration: 3000,
    loop: true
  });

  var obj = { ready: '0%' };

  var JSobject = anime({
    targets: obj,
    ready: '100%',
    round: 1,
    easing: 'linear',
    update: function() {
      var el = document.querySelector('#JSobject pre');
      el.innerHTML = JSON.stringify(obj);
    }
  });  


var CSStransforms = anime({
    targets: '#CSStransforms .el',
    translateX: 50,
    translateY: 50,
    scale: 1,
    rotate: '2turn'
  });

var cssProperties = anime({
    targets: '#cssProperties #svgAttributes',
    opacity: .5,
    left: '240px',
    backgroundColor: [
        {value: 'black'}, // Or #FFFFFF
        // {value: 'rgb(255, 0, 0)'},
        // {value: 'hsl(100, 60%, 60%)'}
      ],
    borderRadius: ['0em', '2em'],
    easing: 'easeInOutQuad'
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* styling the name plate */



// $(document).ready(function() {
//     $(".title").lettering();
//     $(".buttons").lettering();
//   });
  
  
  
  
  
//   $(document).ready(function() {
//     animation();
//   }, 1000);
  
//   $('.buttons').click(function() {
//     animation();
//   });
  
  
//   function animation() {
//     var title1 = new TimelineMax();
//     title1.to(".buttons", 0, {visibility: 'hidden', opacity: 0})
//     title1.staggerFromTo(".title span", 0.5, 
//     {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
//     {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
//     title1.to(".buttons", 0.2, {visibility: 'visible' ,opacity: 1})
//   }


// var svgAttributes = anime({
//     targets: '#svgAttributes polygon',
//     points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
//     easing: 'easeInOutExpo'
//   });