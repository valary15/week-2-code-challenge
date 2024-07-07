document.addEventListener("DOMContentLoaded", () => {
  const shoppingList = document.getElementById("shopping-list");

  const items = [
    { id: 1, item: "Bread", image: "bread.png" },
    { id: 2, item: "Meat", image: "Meat.png" },
    { id: 3, item: "Milk", image: "milk.png" },
    { id: 4, item: "Fruit", image: "fruit.png" },
  ];

  function displayShoppingList() {
    shoppingList.innerHTML = "";
    items.forEach((task) => {
      const container = document.createElement("div");
      const img = document.createElement("img");
      img.src = task.image;
      img.className = "cartimage";

      const title = document.createElement("h5");
      title.textContent = task.item;

      const addButton = document.createElement("button");
      addButton.textContent = "ADD";

      container.appendChild(img);
      container.appendChild(title);
      container.appendChild(addButton);

      shoppingList.appendChild(container);
    });
  }

  displayShoppingList();
});
