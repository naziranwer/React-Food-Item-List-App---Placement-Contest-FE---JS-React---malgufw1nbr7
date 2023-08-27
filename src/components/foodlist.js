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

  const handleFormClick = () => {
    setIsFormEnabled(true);
  };

  const handleAddFood = () => {
    setIsFirstCardEnabled(true);
    setIsSecondCardEnabled(true);
    setIsFormEnabled(false); // Reset form enabled state
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
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoods(newFoods);
  };

  return (
    <>
      <div className="container">
        <h1>Food Items List</h1>
        <button onClick={handleAddFood}>Add Food</button>

        <div className="card-container">
          {isFirstCardEnabled ? (
            <>
              <h2>Item Name:</h2>
              <input
                name="itemName"
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                disabled={!isFirstCardEnabled}
              />
              <h2>Food Type:</h2>
              <input
                name="foodType"
                type="text"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
                disabled={!isFirstCardEnabled}
              />
              <div className={`card ${isFormEnabled ? "" : "disabled"}`}>
                <form
                  style={{ opacity: isFormEnabled ? 1 : 0.5 }}
                  onSubmit={(e) => e.preventDefault()}
                  onClick={handleFormClick}
                >
                  <h2>Spiciness Level:</h2>
                  <input
                    name="spicinessLevel"
                    type="text"
                    value={spicinessLevel}
                    disabled={!isFormEnabled}
                    onChange={(e) => setSpicinessLevel(e.target.value)}
                  />
                </form>
              </div>
            </>
          ) : null}
        </div>
        {isFirstCardEnabled && isFormEnabled ? (
          <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
            <button onClick={handleSaveFood}>Save</button>
          </div>
        ) : null}

        <ul className="list">
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
