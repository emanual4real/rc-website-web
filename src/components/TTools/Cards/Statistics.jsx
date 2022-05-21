import React from "react";
import { Table } from "reactstrap";
import {
  getCardSetCount,
  getFilteredInventory,
  getTotalCards,
  getCompletionistStats,
} from "./helpers/card-stats";

const Statistics = ({ allCardData, userInventory }) => {
  let dataTable = [];

  const filteredInventory = getFilteredInventory(allCardData, userInventory);

  // add total cards in set
  dataTable.push({
    statistic: "Card Set Count",
    value: getCardSetCount(allCardData),
  });
  // add total cards owned by user
  dataTable.push({
    statistic: "Owned Cards",
    value: getTotalCards(filteredInventory),
  });
  // add completionist stats
  const completionStats = getCompletionistStats(allCardData, filteredInventory);

  dataTable = dataTable.concat(
    completionStats.map((row) => ({
      statistic: `Completionist level ${row.level}`,
      value: `${(row.rate * 100).toFixed(2)} %`,
    }))
  );

  return (
    <div>
      <Table borderless>
        <thead>
          <tr>
            <th>Statistic</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((row) => (
            <tr key={`tr-${row.statistic}`}>
              <td key={`td1-${row.statistic}`}>{row.statistic}</td>
              <td key={`td2-${row.statistic}`}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Statistics;
