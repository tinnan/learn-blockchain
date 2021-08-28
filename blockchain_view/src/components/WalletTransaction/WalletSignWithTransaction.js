import { Container, Heading, Input, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { signTransaction } from "../../blockchain/util/wallet";
import TransactionsListWallet from "./TransactionsListWallet";

function WalletSignWithTransaction({
  walletData,
  updateWalletData,
  updateTransactionValue,
}) {
  function handleSignTransaction() {
    const sign = signTransaction(walletData.privateKey, walletData.data);
    updateWalletData("signature", sign);
  }
  return (
    <Container maxW="80%" mt="6">
      <Heading mb="3">Sign</Heading>
      <Box bg="green.100" padding="6" borderRadius="md">
        <Text>Transactions:</Text>
        <TransactionsListWallet
          transactions={walletData.data}
          updateTransactionValue={updateTransactionValue}
        />
        <Text>Private Key:</Text>
        <Input bg="white" mb="2" value={walletData.privateKey} />
        <Button colorScheme="blue" onClick={handleSignTransaction}>
          Sign Transaction
        </Button>
        <Text mt="2">Signature:</Text>
        <Input
          bg="white"
          mb="2"
          value={walletData.signature}
          onChange={() => {
            updateWalletData("signature", "123");
          }}
        />
      </Box>
    </Container>
  );
}

export default WalletSignWithTransaction;
