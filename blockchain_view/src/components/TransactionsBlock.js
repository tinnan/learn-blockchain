import {
  Container,
  Input,
  Text,
  Textarea,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { mineBlock } from "../blockchain/block";
import { DIFFICULTY } from "../blockchain/util/constants";
import { hashBlock } from "../blockchain/util/hash";
import TransactionsList from "./TransactionsList";

function TransactionsBlock({
  blockNumber,
  nonce,
  data,
  previousHash,
  hash,
  updateChainValue,
  node,
  updateTransactionValue,
}) {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const hashedData = hashBlock({ blockNumber, nonce, data, previousHash });
    const checkIsValid =
      hashedData.substr(0, DIFFICULTY) === "0".repeat(DIFFICULTY);
    setIsValid(checkIsValid);
    updateChainValue(blockNumber, "hash", hashedData, node);
  }, [blockNumber, nonce, data, previousHash]);
  function handleMine() {
    const { hashedData, nonce } = mineBlock({
      blockNumber,
      data,
      previousHash,
    });
    updateChainValue(blockNumber, "nonce", nonce, node);
    updateChainValue(blockNumber, "hash", hashedData, node);
  }
  return (
    <Container w="80%" my="6" minW="500">
      <Box bg={isValid ? "green.100" : "red.100"} padding="6" borderRadius="md">
        <Text>Block Number #:</Text>
        <Textarea bg="white" mb="2" value={blockNumber} />
        <Text>nonce:</Text>
        <Textarea
          bg="white"
          mb="2"
          value={nonce}
          onChange={(e) => {
            updateChainValue(blockNumber, "nonce", e.target.value, node);
          }}
        />
        <Text>Transactions:</Text>
        <TransactionsList
          updateData={updateChainValue}
          blockNumber={blockNumber}
          transactions={data}
          updateTransactionValue={updateTransactionValue}
        />
        {/* <Textarea
          bg="white"
          mb="2"
          onChange={(e) => {
            updateChainValue(blockNumber, "data", e.target.value, node);
          }}
          value={data}
        /> */}
        <Text>Previous Hash:</Text>
        <Input
          bg="white"
          mb="2"
          value={previousHash}
          onChange={(e) => {
            updateChainValue(blockNumber, "previousHash", e.target.value, node);
          }}
        />
        <Text>Hash:</Text>
        <Input bg="white" mb="2" value={hash} />
        <Button colorScheme="blue" onClick={handleMine}>
          Mine
        </Button>
      </Box>
    </Container>
  );
}

export default TransactionsBlock;
