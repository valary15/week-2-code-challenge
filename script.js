document.addEventListener("DOMContentLoaded", () => {
  const shoppingList = document.getElementById("shopping-list");

  // no items when we start
  let items = [];

  function displayShoppingList() {
    shoppingList.innerHTML = "";
    items.forEach((task, index) => {
      const container = document.createElement("div");
      const img = document.createElement("img");
      img.src = task.image;
      img.className = "cartimage";

      const title = document.createElement("h5");
      title.textContent = task.item;

      if (task.purchased === true) {
        title.className = "strike";
      }

      const addButton = document.createElement("button");
      addButton.textContent = "MARK PURCHASED";
      addButton.addEventListener("click", function () {
        items[index].purchased = true;
        displayShoppingList();
      });

      container.appendChild(img);
      container.appendChild(title);
      container.appendChild(addButton);

      shoppingList.appendChild(container);
    });
  }

  function clearList() {
    items = [];
  }

  const clearbutton = document.getElementById("clearlist");
  clearbutton.addEventListener("click", function () {
    clearList();
    displayShoppingList();
  });

  function saveItem(imageUrl, itemName) {
    const itemToBeSaved = {
      item: itemName,
      image: imageUrl,
      purchased: false,
    };
    items.unshift(itemToBeSaved);

    // re-render all items
    displayShoppingList();
  }

  // submit add items form
  document
    .getElementById("addItemsForm")
    .addEventListener("submit", function (event) {
      const imageUrl = document.getElementById("image").value;
      const itemName = document.getElementById("item").value;

      event.preventDefault();

      // save item in our array of objects
      saveItem(imageUrl, itemName);
    });

  displayShoppingList();
});
