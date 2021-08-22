import { Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useImmer } from "use-immer";
import BlockchainBlock from "./BlockchainBlock";

function Blockchain() {
  const [chain, setChain] = useImmer([
    {
      blockNumber: 0,
      nonce: 72349,
      data: "Genesis block",
      previousHash: "0".repeat(64),
      hash: "000",
    },
    {
      blockNumber: 1,
      nonce: 78909,
      data: "Another block",
      previousHash: "",
      hash: "123",
    },
    {
      blockNumber: 2,
      nonce: 8798,
      data: "Final block",
      previousHash: "",
      hash: "123",
    },
  ]);
  function updateChainValue(blockNumber, fieldName, fieldValue) {
    setChain((draft) => {
      draft[blockNumber][fieldName] = fieldValue;
    });
  }
  function getBlockchainBlocks() {
    return chain.map((block) => {
      if (block.blockNumber === 0) {
        return (
          <BlockchainBlock {...block} updateChainValue={updateChainValue} />
        );
      }
      const previouseHashValue = chain[block.blockNumber - 1].hash;
      return (
        <BlockchainBlock
          {...block}
          previousHash={previouseHashValue}
          updateChainValue={updateChainValue}
        />
      );
    });
  }
  return (
    <>
      <Heading mb="10" mt="10">
        Blockchain
      </Heading>
      <Grid maxW="100%" overflowX="scroll" templateColumns="repeat(5, 1fr)">
        {getBlockchainBlocks()}
      </Grid>
    </>
  );
}

export default Blockchain;
