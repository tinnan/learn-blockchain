import { Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useImmer } from "use-immer";
import Wallet from "../Wallet";
import TransactionsBlock from "./TransactionsBlock";

function TransactionsWallet() {
  const [chain, setChain] = useImmer([
    {
      blockNumber: 0,
      nonce: 198272,
      data: [
        {
          id: 0,
          amount: 9,
          from: "Fire",
          to: "Water",
        },
        {
          id: 1,
          amount: 1,
          from: "Water",
          to: "Fire",
        },
        {
          id: 2,
          amount: 12,
          from: "me",
          to: "you",
        },
      ],
      previousHash: "0".repeat(64),
      hash: "000",
    },
    {
      blockNumber: 1,
      nonce: 219296,
      data: [
        {
          id: 0,
          amount: 10,
          from: "Bob",
          to: "Fire",
          signed: "",
        },
        {
          id: 1,
          amount: 5,
          from: "Bob",
          to: "Nick",
          signed: "",
        },
        {
          id: 2,
          amount: 1,
          from: "me",
          to: "you",
          signed: "",
        },
      ],
      previousHash: "",
      hash: "123",
    },
    {
      blockNumber: 2,
      nonce: 100067,
      data: [
        {
          id: 0,
          amount: 10,
          from: "me",
          to: "you",
          signed: "",
        },
        {
          id: 1,
          amount: 5,
          from: "you",
          to: "me",
          signed: "",
        },
        {
          id: 2,
          amount: 1,
          from: "me",
          to: "you",
          signed: "",
        },
      ],
      previousHash: "",
      hash: "123",
    },
  ]);
  function updateChainValue(blockNumber, fieldName, fieldValue) {
    if (
      JSON.stringify(chain[blockNumber][fieldName]) ===
      JSON.stringify(fieldValue)
    ) {
      return;
    }
    setChain((draft) => {
      draft[blockNumber][fieldName] = fieldValue;
    });
  }
  function updateTransactionValue(
    blockNumber,
    transactionId,
    fieldName,
    fieldValue
  ) {
    if (
      JSON.stringify(chain[blockNumber]["data"][transactionId][fieldName]) ===
      JSON.stringify(fieldValue)
    ) {
      return;
    }
    setChain((draft) => {
      draft[blockNumber]["data"][transactionId][fieldName] = fieldValue;
    });
  }
  function getBlockchainBlocks() {
    return chain.map((block) => {
      if (block.blockNumber === 0) {
        return (
          <TransactionsBlock
            {...block}
            updateChainValue={updateChainValue}
            updateTransactionValue={updateTransactionValue}
          />
        );
      }
      const previouseHashValue = chain[block.blockNumber - 1].hash;
      return (
        <TransactionsBlock
          {...block}
          previousHash={previouseHashValue}
          updateChainValue={updateChainValue}
          updateTransactionValue={updateTransactionValue}
        />
      );
    });
  }
  return (
    <>
      <Heading mb="10" mt="10">
        Transactions with Wallet
      </Heading>
      <Grid maxW="100%" overflowX="scroll" templateColumns="repeat(5, 1fr)">
        {getBlockchainBlocks()}
      </Grid>
      <Wallet />
      <Wallet />
    </>
  );
}

export default TransactionsWallet;
