const parent = document.getElementById("parent");
const newChildren = Array.prototype.slice.call(parent.children, 0);

const sortingCards = () => {
  newChildren.sort((a, b) => (a.innerHTML > b.innerHTML ? 1 : -1));
  parent.innerHTML = "";
  newChildren.map((child) => parent.appendChild(child));
};

const shufflingCards = () => {
  for (let i = newChildren.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newChildren[i], newChildren[j]] = [newChildren[j], newChildren[i]];
  }
  parent.innerHTML = "";
  newChildren.map((child) => parent.appendChild(child));
};
