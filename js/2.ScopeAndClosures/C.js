var obj1 = {
  id1: 'awesome 1',
  cool1: function coolFn1(binding = 'setTimeout') {
    console.log('id 1 ---> ', this.id1, `\n${binding} this 1 ---> `, this);
  },
};

window.id1 = 'not awesome 1';

obj1.cool1('window'); // awesome 1

setTimeout(obj1.cool1, 100); // no awesome 1

// =============================================================================

var obj2 = {
  id2: 'awesome 2',
  cool2: function coolFn2(binding = 'setTimeout', self = obj2) {
    console.log('id 2 ---> ', self.id2, `\n${binding} this 2 ---> `, self);
  },
};

window.id2 = 'not awesome 2';

obj2.cool2('window'); // awesome 2

setTimeout(obj2.cool2, 100); // no awesome 2
