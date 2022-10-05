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
