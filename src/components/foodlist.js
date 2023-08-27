import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [itemName, setItemName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [spicinessLevel, setSpicinessLevel] = useState("");
  const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
  const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const handleAddFood = () => {
    setIsFirstCardEnabled(true);
    setIsFormEnabled(true); // Enable form when "Add Food" is clicked
  };

  const handleFormClick = () => {
    setIsFormEnabled(true);
  };

  const handleSaveFood = () => {
    const newFood = {
      itemName,
      foodType,
      spicinessLevel,
    };
    setFoods([...foods, newFood]);
    setItemName("");
    setFoodType("");
    setSpicinessLevel("");
    setIsFirstCardEnabled(false);
    setIsSecondCardEnabled(false);
    setIsFormEnabled(false);
  };

  const handleDeleteFood = (index) => {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
  };

  return (
    <>
      <div className="container">
        <h1>Food Items List</h1>
        <button
          onClick={handleAddFood}
          className={!isFirstCardEnabled ? "" : "hidden"}
        >
          Add Food
        </button>

        <div className={`card-container ${isFirstCardEnabled ? "" : "hidden"}`}>
          <>
            <h2>Item Name:</h2>
            <input
              name="itemName"
              type="text"
              disabled={!isFirstCardEnabled}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <h2>Food Type:</h2>
            <input
              name="foodType"
              type="text"
              disabled={!isFirstCardEnabled}
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            />
            <div
              className={`card ${isFormEnabled ? "" : "disabled"}`}
              onClick={handleFormClick}
            >
              <form>
                <h2>Spiciness Level:</h2>
                <input
                  name="spicinessLevel"
                  type="text"
                  disabled={!isFormEnabled}
                  value={spicinessLevel}
                  onChange={(e) => setSpicinessLevel(e.target.value)}
                />
              </form>
            </div>
          </>
        </div>
        <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
          <button onClick={handleSaveFood}>Save</button>
        </div>

        <ul className={`list ${foods.length > 0 ? "" : "hidden"}`}>
          {foods.map((food, index) => (
            <li key={index}>
              {food.itemName} ({food.foodType}) - Spiciness Level:{" "}
              {food.spicinessLevel}
              <button onClick={() => handleDeleteFood(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FoodList;
