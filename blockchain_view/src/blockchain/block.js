import { DIFFICULTY } from "./util/constants";
import { hashBlock } from "./util/hash";

export function mineBlock({ blockNumber, data }) {
    let nonce = 0;
    let hashedData;
    do {
        nonce += 1;
        hashedData = hashBlock({ blockNumber, nonce, data });
    } while (hashedData.substr(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY))
    return { hashedData, nonce };
}