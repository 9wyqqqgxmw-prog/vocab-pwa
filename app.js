const words = ["the","be","to","of","and","a","in","that","have","I"];

let index = Number(localStorage.getItem("index")) || 0;
let knowList = JSON.parse(localStorage.getItem("know")) || [];
let learnList = JSON.parse(localStorage.getItem("learn")) || [];

const wordEl = document.getElementById("word");

function show() {
  if (index >= words.length) {
    wordEl.textContent = "Done 🎉";
    return;
  }
  wordEl.textContent = words[index];
}

function save() {
  localStorage.setItem("index", index);
  localStorage.setItem("know", JSON.stringify(knowList));
  localStorage.setItem("learn", JSON.stringify(learnList));
}

function know() {
  knowList.push(words[index]);
  index++;
  save();
  show();
}

function learn() {
  learnList.push(words[index]);
  index++;
  save();
  show();
}

show();
