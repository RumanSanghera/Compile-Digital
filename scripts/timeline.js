var timelineItems = document.querySelectorAll(".timeline li");
var offerItems = document.querySelectorAll(".our-offer-items .item");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  // Handle timeline items
  for (var i = 0; i < timelineItems.length; i++) {
    if (isElementInViewport(timelineItems[i])) {
      if (!timelineItems[i].classList.contains("in-view")) {
        timelineItems[i].classList.add("in-view");
      }
    } else if (timelineItems[i].classList.contains("in-view")) {
      timelineItems[i].classList.remove("in-view");
    }
  }
  
  // Handle offer items
  for (var i = 0; i < offerItems.length; i++) {
    if (isElementInViewport(offerItems[i])) {
      if (!offerItems[i].classList.contains("in-view")) {
        offerItems[i].classList.add("in-view");
      }
    } else if (offerItems[i].classList.contains("in-view")) {
      offerItems[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);