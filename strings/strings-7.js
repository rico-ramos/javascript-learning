// String encoding and decoding
//  1. URL Encoding/Decoding

let message = "Today is a good day & tomorrow is too!";

// encoded for URL
const encoded = encodeURIComponent(message);
console.log("Encoded: ", encoded);

// decode back
const decoded = decodeURIComponent(encoded);
console.log("Decoded: ", decoded);

console.log("=================");

//  2. Base64 Encoding/Decoding

let password = "Secret@1234";

//Encode to base64
const b64Encoded = btoa(password);
console.log("Encoded: ", b64Encoded);

//Decode it back
const b64Decoded = atob(b64Encoded);
console.log("Decoded: ", b64Decoded);
