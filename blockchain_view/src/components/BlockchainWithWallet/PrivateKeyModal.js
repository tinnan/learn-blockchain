import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { signTransaction } from "../../blockchain/util/wallet";

function PrivateKeyModal({
  isOpen,
  onOpen,
  onClose,
  transaction,
  updateValue,
}) {
  const [privateKey, setPrivateKey] = useState("");
  const initialRef = useRef();

  function handleSign() {
    const tempTransaction = { ...transaction };
    delete tempTransaction.signed;
    const signed = signTransaction(privateKey, tempTransaction);
    updateValue(transaction.id, "signed", signed);
    onClose();
  }
  return (
    <Modal isOpen={isOpen} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign your transactions</ModalHeader>
        <ModalBody>
          <FormControl>
            <Input
              ref={initialRef}
              placeholder="Enter your private key"
              onChange={(e) => {
                setPrivateKey(e.target.value);
              }}
              value={privateKey}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSign}>
            Sign
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PrivateKeyModal;
