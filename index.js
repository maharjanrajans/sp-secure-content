const CryptoJS = require("crypto-js");

require("dotenv").config();

const data = require("./featureFlags.json");

const ciphertext = CryptoJS.AES.encrypt(
  JSON.stringify(data),
  process.env.REACT_APP_HASH_KEY
).toString();

const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_HASH_KEY);
const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

module.exports = {
  getSecureContent: () => {
    return decryptedData;
  },
};
