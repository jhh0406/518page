let view = document.getElementById("view");
let first = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ypFoM4W1G14" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let second = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CmTWmjIRPPc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let third = '<iframe width="560" height="315" src="https://www.youtube.com/embed/LTWyooVtKmQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

function play(number) {
  view.innerHTML = number;
}
