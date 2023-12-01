import axios from "axios"
import CryptoJS from "crypto-js";

const api_key = "f5890ab2-a9c8-45bf-a91d-6010be64efbe";
const secret_key = "ADC1875DA3B14F1BF650EF29BF652E43";
const passphrase = "XQBxqb123@";

const utcTime = new Date().toISOString();

const url = ""

const body = ""

const string = utcTime + "GET" + url + body

const sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(string, secret_key, { encoding: CryptoJS.enc.Utf8 }));

const headers = {
    "OK-ACCESS-KEY": api_key,
    "OK-ACCESS-SIGN": sign,
    "OK-ACCESS-TIMESTAMP": utcTime,
    "OK-ACCESS-PASSPHRASE": passphrase
}

const http = axios.create({
    baseURL: "https://www.okx.com/",
    timeout: 5000,
    headers,
    proxy: {
        host: '127.0.0.1',
        port: 23457,
    },
})

export default http