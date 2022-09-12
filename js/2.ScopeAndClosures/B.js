try {
  throw 1;
} catch (a) {
  console.log(a); // 1
}

try {
  throw 2;
} catch (error) {
  console.log(error); // 2
}

{
  try {
    throw undefined;
  } catch (a) {
    console.log(a);
    a = 3;
    console.log(a); // 3
  }
}

// "let-блок" ==================================================================

// let (a = 2) {
// 	console.log( a ); // 2
// }

/*let*/ {
  let a = 4;
  console.log(a);
}

// console.log(a); // ReferenceError
