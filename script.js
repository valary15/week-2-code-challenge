document.addEventListener("DOMContentLoaded", () => {
  const shoppingList = document.getElementById("shopping-list");

  const items = [
    { id: 1, item: "Bread", image: "bread.png", strike: false },
    { id: 2, item: "Meat", image: "Meat.png", strike: false },
    { id: 3, item: "Milk", image: "milk.png", strike: false },
    { id: 4, item: "Fruit", image: "fruit.png", strike: false },
  ];

  function displayShoppingList() {
    shoppingList.innerHTML = "";
    items.forEach((task, index) => {
      const container = document.createElement("div");
      const img = document.createElement("img");
      img.src = task.image;
      img.className = "cartimage";

      const title = document.createElement("h5");
      title.textContent = task.item;

      if (task.strike === true) {
        title.className = "strike";
      }

      const addButton = document.createElement("button");
      addButton.textContent = "ADD";
      addButton.addEventListener("click", function () {
        items[index].strike = true;
        displayShoppingList();
      });

      container.appendChild(img);
      container.appendChild(title);
      container.appendChild(addButton);

      shoppingList.appendChild(container);
    });
  }
  function clearList() {
    items.forEach((task) => {
      task.strike = false;
    });
  }
  const clearbutton = document.getElementById("clearlist");
  clearbutton.addEventListener("click", function () {
    clearList();
    displayShoppingList();
  });

  function saveItem(imageUrl, itemName) {
    console.log('Saved items are: ', imageUrl, itemName)
  }

  // submit add items form
  document.getElementById('addItemsForm').addEventListener('submit', function(event) {
    const imageUrl = document.getElementById('image').value;
    const itemName = document.getElementById('item').value;

    event.preventDefault();

    // save item in our array of objects
    saveItem(imageUrl, itemName)
  })

  displayShoppingList();
});
