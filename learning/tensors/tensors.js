example("1d tensor", () => {
  const tensor = tf.tensor([1, 2]);
  tensor.print();
});

example("2d tensor", () => {
  const tensor = tf.tensor([
    [1, 2],
    [3, 4],
  ]);
  tensor.print();
});

example("2d tensor with 1d array and shape definition", () => {
  const shape = [2, 2];
  const tensor = tf.tensor([1, 2, 3, 4], shape);
  tensor.print();
});

example("boolean 1d tensor", () => {
  const tensor = tf.tensor([true, false, true, false], null, "bool");
  // console.log("shape:", tensor.shape);
  // console.log("dtype", tensor.dtype);
  tensor.print();
});

example("string 1d tensor", () => {
  const tensor = tf.tensor(["true", "false", "true", "false"], null, "string");
  // console.log("shape:", tensor.shape);
  // console.log("dtype", tensor.dtype);
  tensor.print();
});

example("dispose / garbage collect a tensor", () => {
  const tensor = tf.tensor([1, 2]);
  console.log("isDisposedInternal", tensor.isDisposedInternal);
  tf.dispose(tensor);
  console.log("isDisposedInternal", tensor.isDisposedInternal);
});

example("dispose / garbage collect a tensor with tidy function", () => {
  let tensor = null;
  tf.tidy(() => {
    tensor = tf.tensor([1, 2]);
    console.log("isDisposedInternal", tensor.isDisposedInternal);
  });
  console.log("isDisposedInternal", tensor.isDisposedInternal);
});
