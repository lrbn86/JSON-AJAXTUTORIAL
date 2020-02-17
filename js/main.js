const animalContainer = document.getElementById("animal-info");
const btn = document.getElementById("btn");
var pageCounter = 1;
btn.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json', true);
  xhr.onload = function() {
    var ourData = JSON.parse(xhr.responseText);
    renderHTML(ourData);
  };
  xhr.send(); 
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = '';
  for (let i in data) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    for (let j in data[i].foods.likes) {
      if (j == 0) {
        htmlString += data[i].foods.likes[j];
      } else {
        htmlString += " and " + data[i].foods.likes[j];
      }
    }
    htmlString += " and dislikes ";
    for (let j in data[i].foods.dislikes) {
      if (j == 0) {
        htmlString += data[i].foods.dislikes[j];
      } else {
        htmlString += " and " + data[i].foods.dislikes[j];
      }
    }
    htmlString += ".</p>";
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
