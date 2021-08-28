import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  StatDownArrow,
  StatUpArrow,
} from "@chakra-ui/react";
import React from "react";

function TransactionWallet({ transaction, updateValue }) {
  const { id, amount, to, from } = transaction;
  return (
    <>
      <HStack spacing="1">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              updateValue(id, "amount", Number(e.target.value));
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<StatUpArrow color="gray.300" />}
          />
          <Input
            placeholder="From"
            value={from}
            onChange={(e) => {
              updateValue(id, "from", e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<StatDownArrow color="gray.300" />}
          />
          <Input
            placeholder="To"
            value={to}
            onChange={(e) => {
              updateValue(id, "to", e.target.value);
            }}
          />
        </InputGroup>
      </HStack>
    </>
  );
}

export default TransactionWallet;
