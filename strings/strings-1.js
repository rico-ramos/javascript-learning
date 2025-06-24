let singleQuotedString = 'This is a single quoted string';
let doubleQuotedString = "This is a double qouted string";
let templateString = `This is a Backtick string also known as a Template Literal 
${10+10}
...
Also known as a multi-line string.`;

console.log(singleQuotedString);
console.log(doubleQuotedString);
console.log(templateString);

let orderName = 'Pizza';
let orderPrice = 12.99;
let orderMessage = `Your ${orderName} is READY. Don't forget you're drink.`;
let orderSummary = `Order Summary:
${orderName} - ${orderPrice}
${orderMessage}`;

console.log(orderMessage);
console.log(orderSummary);

