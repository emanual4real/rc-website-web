import { userInventory } from "../fixtures/data.fixtures";

/**
 * Filters all inventory that matches card data list
 * @param {object[]} allCardData
 * @param {object} userInventory
 * @returns object
 */
export const getFilteredInventory = (allCardData, userInventory) => {
  const inventory = {};

  allCardData.forEach((element) => {
    if (userInventory[element.id]) {
      inventory[element.id] = userInventory[element.id];
    }
  });

  return inventory;
};

/**
 * Get the count of cards in the set
 * @param {object[]} allCardData
 * @returns number
 */
export const getCardSetCount = (allCardData) => allCardData.length;

/**
 * Given user inventory, returns # of cards
 * @param {object} userInventory
 * @returns number
 */
export const getTotalCards = (userInventory) =>
  Object.values(userInventory).reduce((prev, cur) => {
    return prev + cur.amount;
  }, 0);

/**
 * Given user inventory, returns # of cards of given level
 * @param {number} rtsLevel
 * @param {object} userInventory
 * @returns number
 */
export const getCardCountByLevel = (rtsLevel, userInventory) =>
  Object.values(userInventory)
    .filter((row) => row.rtsLevel === rtsLevel)
    .reduce((prev, cur) => {
      return prev + cur.amount;
    }, 0);

export const getCompletionistStats = (allCardData, userInventory) => {
  const percentToComplete = (level) => {
    const ownedCards = Object.values(userInventory).reduce((prev, cur) => {
      const cardCount = cur.amount > level ? level : cur.amount;
      return prev + cardCount;
    }, 0);

    return ownedCards / (getCardSetCount(allCardData) * level);
  };

  const completionistStats = (level, array) => {
    const completionRate = percentToComplete(level);

    const data = [...array, { level, rate: completionRate }];

    if (completionRate < 1) {
      return data;
    }

    return completionistStats(level + 1, data);
  };

  return completionistStats(1, []);
};
