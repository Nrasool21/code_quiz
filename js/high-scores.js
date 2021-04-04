const getScoresFromLocalStorage = () => {
  const scores = JSON.parse(localStorage.getItem("scores"));

  if (scores === null) {
    return [];
  } else {
    return scores;
  }
};

const createTextEl = (tagName, text) => {
  const element = document.createElement(tagName);
  element.textContent = text;

  return element;
};

const constructUl = (highScores) => {
  const ul = document.createElement("ul");

  const callback = (currentValue) => {
    const li = document.createElement("li");
    li.textContent = `${currentValue.name} - ${currentValue.score}`;

    return li;
  };

  const listItems = highScores.map(callback);

  ul.append(...listItems);

  return ul;
};

const renderHighScores = () => {
    const highScores = getScoresFromLocalStorage();
    const ul = constructUl(highScores);
    const div = document.getElementById("display-finalscore"); 
    div.append(ul);
};

window.addEventListener("load", renderHighScores);
