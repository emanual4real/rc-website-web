import React from "react";
import RTSCard from "./RTSCard";

const CardList = ({ allCardData, userInventory }) => {
  const getInventoryCount = (id) => {
    if (userInventory[id]) {
      return userInventory[id].amount || 0;
    }
  };

  return (
    <div>
      {allCardData.map((row) => (
        <div style={{ marginBottom: "5px" }}>
          <RTSCard
            key={row.id}
            model={row.model}
            imageUrl={row.imageUrl}
            rtsLevel={row.rtsLevel}
            brand={row.brand}
            name={row.name}
            owned={getInventoryCount(row.id)}
          ></RTSCard>
        </div>
      ))}
    </div>
  );
};

export default CardList;
