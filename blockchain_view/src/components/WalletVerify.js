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
import { verifyTransaction } from "../blockchain/util/wallet";

function WalletVerify({ walletData, updateWalletData }) {
  const [data, setData] = useState("");
  const [isValid, setIsValid] = useState(false);
  function handleVerifyTransaction() {
    const isSignValid = verifyTransaction({
      publicKey: walletData.publicKey,
      data,
      signature: walletData.signature,
    });
    setIsValid(isSignValid);
    updateWalletData("isSignatureValid", isSignValid);
  }
  return (
    <Container maxW="80%" mt="6">
      <Heading mb="3">Verify</Heading>
      <Box bg={isValid ? "green.100" : "red.100"} padding="6" borderRadius="md">
        <Text>Data:</Text>
        <Textarea
          bg="white"
          mb="2"
          onChange={(e) => {
            setData(e.target.value);
          }}
          value={data}
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

export default WalletVerify;
