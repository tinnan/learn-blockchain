import { Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import BlockchainBlock from "./BlockchainBlock";

function Distributed() {
  const [toggleChain, setToggleChain] = useState(true);
  const [chain, setChain] = useImmer([
    [
      {
        blockNumber: 0,
        nonce: 72349,
        data: "Genesis block",
        previousHash: "0".repeat(64),
        hash: "000",
        validChain: true,
      },
      {
        blockNumber: 1,
        nonce: 78909,
        data: "Another block",
        previousHash: "",
        hash: "123",
        validChain: true,
      },
      {
        blockNumber: 2,
        nonce: 8798,
        data: "Final block",
        previousHash: "",
        hash: "123",
        validChain: true,
      },
    ],
    [
      {
        blockNumber: 0,
        nonce: 72349,
        data: "Genesis block",
        previousHash: "0".repeat(64),
        hash: "000",
        validChain: true,
      },
      {
        blockNumber: 1,
        nonce: 78909,
        data: "Another block",
        previousHash: "",
        hash: "123",
        validChain: true,
      },
      {
        blockNumber: 2,
        nonce: 8798,
        data: "Final block",
        previousHash: "",
        hash: "123",
        validChain: true,
      },
    ],
    [
      {
        blockNumber: 0,
        nonce: 72349,
        data: "Genesis block",
        previousHash: "0".repeat(64),
        hash: "000",
        validChain: true,
      },
      {
        blockNumber: 1,
        nonce: 78909,
        data: "Another block",
        previousHash: "",
        hash: "123",
        validChain: true,
      },
      {
        blockNumber: 2,
        nonce: 8798,
        data: "Final block",
        previousHash: "",
        hash: "123",
        validChain: true,
      },
    ],
  ]);
  useEffect(() => {
    const lastBlock = chain[0].length - 1;
    let hashCount = chain.reduce((acc, cur) => {
      acc[cur[lastBlock]["hash"]] = (acc[cur[lastBlock]["hash"]] || 0) + 1;
      return acc;
    }, {});
    const validHash = Object.keys(hashCount).reduce((acc, value) => {
      return hashCount[acc] > hashCount[value] ? acc : value;
    });
    chain.forEach((blockchain, index) => {
      const isValid = blockchain[lastBlock].hash === validHash;
      setChain((draft) => {
        draft[index][lastBlock]["validChain"] = isValid;
      });
    });
  }, [toggleChain]);
  function updateChainValue(blockNumber, fieldName, fieldValue, node) {
    setChain((draft) => {
      draft[node][blockNumber][fieldName] = fieldValue;
    });
    if (fieldName === "hash" && blockNumber === chain[node].length - 1) {
      setToggleChain((c) => !c);
    }
  }
  function getBlockchainBlocks(blockchain, index) {
    return blockchain.map((block) => {
      if (block.blockNumber === 0) {
        return (
          <BlockchainBlock
            {...block}
            updateChainValue={updateChainValue}
            node={index}
          />
        );
      }
      const previouseHashValue = chain[index][block.blockNumber - 1].hash;
      return (
        <BlockchainBlock
          {...block}
          previousHash={previouseHashValue}
          updateChainValue={updateChainValue}
          node={index}
        />
      );
    });
  }
  return (
    <>
      <Heading mb="10" mt="10">
        Blockchain
      </Heading>
      {chain.map((blockchain, index) => {
        return (
          <>
            <Heading my={5}>Node {index}</Heading>
            <Grid
              bg={blockchain[blockchain.length - 1].validChain ? "white" : "red.500"}
              maxW="100%"
              overflowX="scroll"
              templateColumns="repeat(5, 1fr)"
            >
              {getBlockchainBlocks(blockchain, index)}
            </Grid>
          </>
        );
      })}
    </>
  );
}

export default Distributed;
