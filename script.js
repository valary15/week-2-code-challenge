document.addEventListener("DOMContentLoaded", () => {
  const shoppingList = document.getElementById("shopping-list");

  // Initialize an empty array to store items
  let items = [];

  // function to display the shopping list items
  function displayShoppingList() {
    shoppingList.innerHTML = "";
    items.forEach((task, index) => {
      const container = document.createElement("div");

      const title = document.createElement("h5");
      title.textContent = task.item;

      //if item is marked as purchased apply strike

      if (task.purchased === true) {
        title.className = "strike";
      }

      // creates button to mark the item as purchased

      const addButton = document.createElement("button");
      addButton.textContent = "MARK PURCHASED";
      addButton.addEventListener("click", function () {
        items[index].purchased = true;
        displayShoppingList();
      });

      container.appendChild(title);
      container.appendChild(addButton);

      shoppingList.appendChild(container);
    });
  }

  //functiom to clear shopping list

  function clearList() {
    items = [];
  }

  const clearbutton = document.getElementById("clearlist");
  clearbutton.addEventListener("click", function () {
    clearList();
    displayShoppingList();
  });

  //function to save a new item to the list
  function saveItem(itemName) {
    const itemToBeSaved = {
      item: itemName,
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
      const itemName = document.getElementById("item").value;

      event.preventDefault();

      // save item in our array of objects
      saveItem(itemName);
    });

  displayShoppingList();
});
