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

function BlockchainBlock({
  blockNumber,
  nonce,
  data,
  previousHash,
  hash,
  updateChainValue,
}) {
  const [b, setBlockNumber] = useState(1);
  const [n, setNonce] = useState(0);
  const [d, setData] = useState("");
  const [p, setPreviousHash] = useState();
  const [h, setHash] = useState();
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const hashedData = hashBlock({ blockNumber, nonce, data, previousHash });
    const checkIsValid =
      hashedData.substr(0, DIFFICULTY) === "0".repeat(DIFFICULTY);
    setIsValid(checkIsValid);
    updateChainValue(blockNumber, "hash", hashedData);
  }, [blockNumber, nonce, data, previousHash]);
  function handleMine() {
    const { hashedData, nonce } = mineBlock({ blockNumber, data, previousHash });
    updateChainValue(blockNumber, "nonce", nonce);
    updateChainValue(blockNumber, "hash", hashedData);
  }

  return (
    <Container w="100%" mt="6">
      <Box bg={isValid ? "green.100" : "red.100"} padding="6" borderRadius="md">
        <Text>Block Number:</Text>
        <Textarea bg="white" mb="2" value={blockNumber} />
        <Text>nonce:</Text>
        <Textarea
          bg="white"
          mb="2"
          value={nonce}
          onChange={(e) => {
            updateChainValue(blockNumber, "nonce", e.target.value);
          }}
        />
        <Text>Data:</Text>
        <Textarea
          bg="white"
          mb="2"
          onChange={(e) => {
            updateChainValue(blockNumber, "data", e.target.value);
          }}
          value={data}
        />
        <Text>Previous Hash:</Text>
        <Input
          bg="white"
          mb="2"
          value={previousHash}
          onChange={(e) => {
            updateChainValue(blockNumber, "previousHash", e.target.value);
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

export default BlockchainBlock;
