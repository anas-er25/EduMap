// Selector
const counters = document.querySelectorAll(".counter");
// Main function
for (let n of counters) {
  const updateCount = () => {
    const target = +n.getAttribute("data-target");
    const count = +n.innerText;
    const speed = 1100; // change animation speed here
    const inc = target / speed;
    if (count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, -500);
    } else {
      n.innerText = target;
    }
  };
  updateCount();
}

function showLocation(destination) {
  var mapFrame = document.getElementById("mapFrame");
  var location = encodeURI(destination);
  var mapUrl = "https://maps.google.com/maps?q=" + location + "&output=embed";
  mapFrame.src = mapUrl;
}

//====================================================================================