const CryptoJS = require("crypto-js");
const fs = require("fs");

require("dotenv").config();

const data = require("./featureFlags.json");

const path = "./featureFlagsEncrypted.txt";

const saveEncryptedFile = () => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_HASH_KEY
  ).toString();

  fs.writeFileSync(path, JSON.stringify(ciphertext));
  return ciphertext;
};

module.exports = {
  getEncryptedContent: () => {
    try {
      if (fs.existsSync(path)) {
        fs.unlinkSync(path);
        return saveEncryptedFile();
      }
      return saveEncryptedFile();
    } catch (err) {
      console.error(err);
    }
    return saveEncryptedFile();
  },
  getDecryptedContent: () => {
    const data = fs.readFileSync(path);
    const encryptedData = JSON.parse(data);
    const decryptedBytes = CryptoJS.AES.decrypt(
      encryptedData,
      process.env.REACT_APP_HASH_KEY
    );

    const decryptedData = JSON.parse(
      decryptedBytes.toString(CryptoJS.enc.Utf8)
    );

    return decryptedData;
  },
};
