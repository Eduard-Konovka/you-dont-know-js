class CoolGuy {
  constructor(trick) {
    this.specialTrick = trick;
  }

  showOff() {
    console.log('Зацените мой трюк: ', this.specialTrick);
  }
}

const Joe = new CoolGuy('Прыжок через скакалку');

Joe.showOff(); // Зацените мой трюк: прыжок через скакалку

// =============================================================================
