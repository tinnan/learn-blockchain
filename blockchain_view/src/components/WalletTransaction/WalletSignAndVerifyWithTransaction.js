import React from "react";
import { useImmer } from "use-immer";
import WalletWithTransaction from "./WalletWithTransaction";
import WalletSignWithTransaction from "./WalletSignWithTransaction";
import WalletVerifyWithTransaction from "./WalletVerifyWithTransaction";

function WalletSignAndVerifyWithTransaction() {
  const [walletData, setWalletData] = useImmer({
    publicKey: "",
    privateKey: "",
    data: [
      { amount: 1, to: "you", from: "me", id: 0 },
      { amount: 2, to: "me", from: "you", id: 1 },
    ],
    signature: "",
    isSignatureValid: false,
  });
  function updateWalletData(field, value) {
    setWalletData((draft) => {
      draft[field] = value;
    });
  }

  function updateTransactionValue(transactionId, fieldName, fieldValue) {
    if (
      JSON.stringify(walletData["data"][transactionId][fieldName]) ===
      JSON.stringify(fieldValue)
    ) {
      return;
    }
    setWalletData((draft) => {
      draft["data"][transactionId][fieldName] = fieldValue;
    });
  }

  return (
    <>
      <WalletWithTransaction updateWalletData={updateWalletData} />
      <WalletSignWithTransaction
        walletData={walletData}
        updateWalletData={updateWalletData}
        updateTransactionValue={updateTransactionValue}
      />
      <WalletVerifyWithTransaction
        walletData={walletData}
        updateWalletData={updateWalletData}
        updateTransactionValue={updateTransactionValue}
      />
    </>
  );
}

export default WalletSignAndVerifyWithTransaction;
