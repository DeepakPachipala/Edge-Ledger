let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

// sticky menu backgorund 
window.addEventListener('scroll', function() {
  if (this.window.scroll > 150) {
    this.document.querySelector('#navbar').getElementsByClassName.opacity =0.9;
  }
  else {
    this.document.querySelector('navbar').getElementsByClassName.opacity = 1;
  }
})


// smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
  if(this.hash !=='') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});