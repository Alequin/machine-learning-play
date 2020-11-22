const EVEN = "even";
const ODD = "odd";
const CLASSES = [EVEN, ODD];

const run = async () => {
  const totalInputs = 100;
  const { xs, ys } = makeTestData(totalInputs);
  const model = newModel();

  xs.print();
  ys.print();

  const iterations = 10;
  for (let j = 0; j <= iterations; j++) {
    const history = await startTraining(model, xs, ys);
    console.log(history.history.loss.slice(-1));
    console.log(`interation: ${j}/${iterations}`);
  }

  const preds = model.predict(
    tf.tensor2d([1, 2, 3, 4, 60, 61, 62, 63], [8, 1]),
  );
  console.log("preds", preds.round());
  console.log("preds data sync", preds.round().dataSync());
};

const makeTestData = (totalInputs) => {
  const inputs = new Array(totalInputs).fill(0).map((num, index) => {
    const number = num + index;
    return { number, expectedOutput: number <= 50 ? -3 : 3 };
  });

  const xs = tf.tensor2d(
    inputs.map(({ number }) => number),
    [totalInputs, 1],
  );

  const outputs = inputs.map(({ expectedOutput }) => [expectedOutput]);
  const ys = tf.tensor2d(outputs, [totalInputs, 1]);

  return { xs, ys };
};

const newModel = () => {
  // A sequential model is any model where the outputs of one layer are the inputs to the next layer
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, batchInputShape: [null, 1] }));

  model.compile({
    loss: "meanSquaredError",
    optimizer: "adam",
    metrics: ["accuracy"],
  });

  return model;
};

const startTraining = async (model, xs, ys) => {
  return await model.fit(xs, ys, {
    epochs: 100,
  });
};

run();
