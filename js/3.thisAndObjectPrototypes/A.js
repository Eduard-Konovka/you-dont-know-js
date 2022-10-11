class Arr {
  constructor(Name) {
    this.name = Name;
    this.num = Math.round(Math.random() * 100);
  }

  outNameAndNumber() {
    console.log(`${this.name}: ${this.num}`);
  }
}

class ArrExtension extends Arr {
  constructor(Name, Query, Page) {
    super(Name);
    this.query = Query;
    this.page = Page;
  }

  outData() {
    console.log(
      `${this.name}: ${this.num}\nPage: ${this.page}\nQuery: ${this.query}`,
    );
  }
}

const exemplar1 = new ArrExtension('#1', 'Search', 37);

exemplar1.outNameAndNumber();
exemplar1.outData();

// =============================================================================

class C {
  constructor() {
    this.num = Math.random();
  }
  rand() {
    console.log('Random: ' + this.num);
  }
}

var c1 = new C();
c1.rand(); // "Random: 0.4324299..."

C.prototype.rand = function () {
  console.log('Random: ' + Math.round(this.num * 1000));
};

var c2 = new C();
c2.rand(); // "Random: 867"

c1.rand(); // "Random: 432" -- Ой!!!
