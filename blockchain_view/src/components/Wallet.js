import { LinkIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Input,
  Text,
  Box,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getSecp256Keys } from "../blockchain/util/wallet";

function Wallet() {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  function handleCreateWallet() {
    const { publicKey, privateKey } = getSecp256Keys();
    setPublicKey(publicKey);
    setPrivateKey(privateKey);
  }
  return (
    <Container maxW="80%" mt="6">
      <Heading mb="10">Wallet</Heading>
      <Box bg="green.100" padding="6" borderRadius="md">
        <Text>Public Key:</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<UnlockIcon color="gray.300" />}
          />
          <Input bg="white" mb="2" value={publicKey} />
        </InputGroup>
        <Text>Private Key:</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
          />
          <Input bg="white" mb="2" value={privateKey} />
        </InputGroup>
        <Button
          colorScheme="blue"
          rightIcon={<LinkIcon />}
          onClick={handleCreateWallet}
        >
          Create Wallet
        </Button>
      </Box>
    </Container>
  );
}

export default Wallet;
