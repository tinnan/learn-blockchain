import {
  Container,
  Heading,
  Input,
  Text,
  Textarea,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { signTransaction } from "../blockchain/util/wallet";

function WalletSign({ walletData, updateWalletData }) {
  const [data, setData] = useState("");
  function handleSignTransaction() {
    const sign = signTransaction(walletData.privateKey, data);
    updateWalletData('signature', sign);
  }
  return (
    <Container maxW="80%" mt="6">
      <Heading mb="3">Sign</Heading>
      <Box bg="green.100" padding="6" borderRadius="md">
        <Text>Data:</Text>
        <Textarea
          bg="white"
          mb="2"
          onChange={(e) => {
            setData(e.target.value);
          }}
          value={data}
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

export default WalletSign;
