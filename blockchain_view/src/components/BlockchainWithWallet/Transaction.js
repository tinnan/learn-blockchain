import { LockIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  StatDownArrow,
  StatUpArrow,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { verifyTransaction } from "../../blockchain/util/wallet";
import PrivateKeyModal from "./PrivateKeyModal";

function Transaction({ transaction, updateValue }) {
  const { id, amount, to, from, signed } = transaction;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSignatureValue, setIsSignatureValid] = useState(false);
  useEffect(() => {
    const data = { ...transaction };
    delete data.signed;
    const result = verifyTransaction({
      publicKey: from,
      data,
      signature: signed,
    });
    setIsSignatureValid(result);
  }, [signed]);

  return (
    <>
      <PrivateKeyModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        transaction={transaction}
        updateValue={updateValue}
      />
      <VStack spacing={0} mb={2}>
        <HStack spacing="1">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input
              placeholder="Amount"
              value={amount}
              onChange={(e) => {
                updateValue(id, "amount", Number(e.target.value));
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<StatUpArrow color="gray.300" />}
            />
            <Input
              placeholder="From"
              value={from}
              onChange={(e) => {
                updateValue(id, "from", e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<StatDownArrow color="gray.300" />}
            />
            <Input
              placeholder="To"
              value={to}
              onChange={(e) => {
                updateValue(id, "to", e.target.value);
              }}
            />
          </InputGroup>
        </HStack>
        <InputGroup>
          <Button leftIcon={<LockIcon />} onClick={onOpen} />
          <Input
            bg={isSignatureValue ? "green.50" : "red.50"}
            placeholder="To"
            value={signed}
            onChange={(e) => {
              updateValue(id, "signed", e.target.value);
            }}
          />
        </InputGroup>
      </VStack>
    </>
  );
}

export default Transaction;
