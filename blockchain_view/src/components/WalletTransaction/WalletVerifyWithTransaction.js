import {
  Container,
  Heading,
  Input,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { verifyTransaction } from "../../blockchain/util/wallet";
import TransactionsListWallet from "./TransactionsListWallet";

function WalletVerifyWithTransaction({
  walletData,
  updateWalletData,
  updateTransactionValue,
}) {
  const [isValid, setIsValid] = useState(false);
  function handleVerifyTransaction() {
    const isSignValid = verifyTransaction({
      publicKey: walletData.publicKey,
      data: walletData.data,
      signature: walletData.signature,
    });
    setIsValid(isSignValid);
    updateWalletData("isSignatureValid", isSignValid);
  }
  return (
    <Container maxW="80%" mt="6">
      <Heading mb="3">Verify</Heading>
      <Box bg={isValid ? "green.100" : "red.100"} padding="6" borderRadius="md">
        <Text>Transactions:</Text>
        <TransactionsListWallet
          transactions={walletData.data}
          updateTransactionValue={updateTransactionValue}
        />
        <Text>Public Key:</Text>
        <Input
          bg="white"
          mb="2"
          value={walletData.publicKey}
          onChange={(e) => {
            updateWalletData("publicKey", e.target.value);
          }}
        />
        <Text mt="2">Signature:</Text>
        <Input
          bg="white"
          mb="2"
          value={walletData.signature}
          onChange={(e) => {
            updateWalletData("signature", e.target.value);
          }}
        />
        <Button colorScheme="blue" onClick={handleVerifyTransaction}>
          Verify Signature
        </Button>
      </Box>
    </Container>
  );
}

export default WalletVerifyWithTransaction;
