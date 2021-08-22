import crypto from "crypto";

export function sha256Hash(input) {
  const hash = crypto.createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

export function hashBlock({ blockNumber, nonce, data, previousHash }) {
  const blockString = JSON.stringify({ blockNumber, nonce, data, previousHash });
  const hashedBlock = sha256Hash(blockString);
  return hashedBlock;
}

export function hashData(data) {
  const dataString = JSON.stringify(data);
  return sha256Hash(dataString);
}