const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trash = document.getElementById("trash");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
});

function addItem() {
  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  divParent.classList.add("item");

  divParent.innerHTML = "<div>" + input.value + "</div>";

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "#37adcd";
  });

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "#e22865";
  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(checkIcon);
  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);

  input.value = "";
}
