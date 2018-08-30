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
  });  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
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
