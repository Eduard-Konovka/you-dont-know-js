var obj = {
  id: 10,
  cool: function () {
    const arrow = () => console.log(this.id);
    arrow();
  },
};

obj.cool(); // 10
