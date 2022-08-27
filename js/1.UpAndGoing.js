/**
 * 1. Напишите программу для вычисления общей стоимости покупки телефона.
 * Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не
 * закончатся деньги на банковском счете.
 * Вы также будете покупать аксессуары для каждого из телефонов до тех пор,
 * пока сумма покупки не превысит ваш мысленный предел трат.
 *
 * 2. После того, как вы посчитаете сумму покупки, прибавьте налог, затем
 * выведите на экран вычисленную сумму покупки, правильно отформатировав её.
 *
 * 3. Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять
 * можете вы себе это позволить или нет.
 *
 * 4. Вы должны настроить некоторые константы для «ставки налога», «цены
 * телефона», «цены аксессуара» и «предела трат», также как и переменную для
 * вашего «баланса банковского счета».
 *
 * 5. Вам следует определить функции для вычисления налога и для форматирования
 * цены со знаком валюты и округлением до двух знаков после запятой.
 *
 * 6. Бонусная задача: Попробуйте включить ввод данных в вашу программу, например
 * с помощью функции prompt(..), рассмотренной ранее в разделе «Ввод».
 * Вы можете, например, запросить у пользователя баланс банковского счета.
 * Развлекайтесь и будьте изобретательны!
 */

const TAX_RATE = 0.2;
const SPENDING_LIMIT = prompt('Введите предел Ваших трат на аксессуары');
const PHONE_PRICE = 5000.111;
const ACCESSORY_PRICE = 200.333;
let bankAccountBalance = prompt('Ведите баланс Вашего банковского счёта');

function calculateTotalCostBuyingPhone() {
  let totalPrice = 0;

  while (
    bankAccountBalance >=
    PHONE_PRICE + ACCESSORY_PRICE + (PHONE_PRICE + ACCESSORY_PRICE) * TAX_RATE
  ) {
    let amount = PHONE_PRICE + PHONE_PRICE * TAX_RATE;
    alert(`Вы приобрели ТЕЛЕФОН на сумму $${amount.toFixed(2)}`);

    let accessoryCount = 0;

    while (accessoryCount + ACCESSORY_PRICE <= SPENDING_LIMIT) {
      if (
        amount + accessoryCount + ACCESSORY_PRICE * TAX_RATE >
        bankAccountBalance
      ) {
        return;
      }

      alert(
        `Вы приобрели АКСЕССУАР на сумму $${(
          ACCESSORY_PRICE +
          ACCESSORY_PRICE * TAX_RATE
        ).toFixed(2)}`,
      );

      accessoryCount =
        accessoryCount + ACCESSORY_PRICE + ACCESSORY_PRICE * TAX_RATE;
    }

    alert(
      `Всего приобретено АКСЕССУАРОВ на сумму $${accessoryCount.toFixed(2)}`,
    );

    amount = amount + accessoryCount;

    bankAccountBalance = bankAccountBalance - amount;

    alert(`Вы совершили покупки на сумму $${amount.toFixed(2)}`);

    totalPrice = totalPrice + amount;
  }

  alert(`Всего потрачено на покупки: $${totalPrice.toFixed(2)}`);
}

calculateTotalCostBuyingPhone();
