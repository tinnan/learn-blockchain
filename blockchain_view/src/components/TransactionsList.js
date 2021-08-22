import { Box } from "@chakra-ui/react";
import React from "react";
import Transaction from "./Transaction";

function TransactionsList({
  blockNumber,
  transactions,
  updateTransactionValue,
}) {
  function updateValue(id, name, value) {
    updateTransactionValue(blockNumber, id, name, value);
  }
  return (
    <Box bg="white" borderRadius="md" padding="1">
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} updateValue={updateValue} />
      ))}
    </Box>
  );
}

export default TransactionsList;
