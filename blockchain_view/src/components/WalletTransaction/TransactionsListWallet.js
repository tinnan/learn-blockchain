import { Box } from "@chakra-ui/react";
import React from "react";
import TransactionWallet from "./TransactionWallet";

function TransactionsListWallet({
  transactions,
  updateTransactionValue,
}) {
  function updateValue(id, name, value) {
    updateTransactionValue(id, name, value);
  }
  return (
    <Box bg="white" borderRadius="md" padding="1">
      {transactions.map((transaction) => (
        <TransactionWallet transaction={transaction} updateValue={updateValue} />
      ))}
    </Box>
  );
}

export default TransactionsListWallet;
