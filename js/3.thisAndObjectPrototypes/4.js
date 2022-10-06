class CoolGuy {
  constructor(trick) {
    this.specialTrick = trick;
  }

  showOff() {
    console.log('Зацените мой трюк: ', this.specialTrick);
  }
}

const Joe = new CoolGuy('Прыжок через скакалку');

console.log(Joe); // Object { specialTrick: "Прыжок через скакалку" }

Joe.showOff(); // Зацените мой трюк: Прыжок через скакалку

// =============================================================================

// значительно упрощенный пример `mixin(..)`:
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // копируем только если его еще нет
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }

  return targetObj;
}

var Vehicle = {
  engines: 1,

  ignition: function () {
    console.log('1. Завожу двигатель.');
  },

  drive: function () {
    this.ignition();
    console.log('2. Двигаюсь вперёд!');
  },
};

var Car = mixin(Vehicle, {
  wheels: 4,

  drive: function () {
    Vehicle.drive.call(this);
    console.log('3. Еду на всех моих ' + this.wheels + ' колёсах!');
  },
});

console.log(Car);

Car.drive();

// =============================================================================
