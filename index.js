function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  const elements = document.getElementById('grand-node').querySelectorAll('div');
  return elements[elements.length - 1];
}

function increaseRankBy(n) {
  const elements = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < elements.length; i++){
    elements[i].innerHTML =  parseInt(elements[i]) + n;
  }
}
