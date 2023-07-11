var btn1 = document.querySelector(".btn");
var newButton = document.createElement ("button");
var p2 = document.createElement("h1");
var body = document.querySelector('#body');

newButton.textContent = 'Yo my dawg';
p2.textContent = "yo whatsup";

btn1.addEventListener('click', function() {
  btn1.append(p2);
});

body.append(newButton);


