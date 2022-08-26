const ACCESSORY_PRICE = 9.99;

var bank_balance = 102.13;
var amount = 99.99;

amount = amount * 2;

// может ли мы позволить себе дополнительную покупку?
if (amount < bank_balance) {
  console.log("Я возьму этот аксессуар!");
  amount = amount + ACCESSORY_PRICE;
}
// иначе:
else {
  console.log("Нет, спасибо.");
}
