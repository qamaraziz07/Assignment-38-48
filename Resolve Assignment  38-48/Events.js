//<<Q:1>>

//<a href="#" onClick="alert('Hi');">Click</a>

///<<Q:5>>
var clicks = 0;
function increment() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};
function decrement() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}