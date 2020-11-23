const EVEN = "even";
const ODD = "odd";
const CLASSES = [EVEN, ODD];

const run = async () => {
  const totalInputs = 100;
  const { xs, ys } = makeTestData(totalInputs);
  const model = newModel();

  xs.print();
  ys.print();

  const iterations = 100;
  const testData = [1, 25, 49, 51, 75, 99];

  for (let j = 0; j < iterations; j++) {
    const history = await startTraining(model, xs, ys);
    const preds = model.predict(tf.tensor(testData));
    const output = Array.from(preds.round().dataSync());
    const results = testData.map((input, index) => {
      return [input, output[index]];
    });

    console.log(`interation: ${j}/${iterations}`);
    console.log(history.history.loss.slice(-1));
    console.log("results", JSON.stringify(results));
    console.log("-------------------------------------------");
  }
};

const makeTestData = (totalInputs) => {
  const inputs = shuffle(
    new Array(totalInputs).fill(0).map((num, index) => {
      const number = num + index;
      return { number, expectedOutput: number <= 50 ? 0 : 1 };
    }),
  );

  const xs = tf.tensor2d(
    inputs.map(({ number }) => number),
    [totalInputs, 1],
  );

  const outputs = inputs.map(({ expectedOutput }) => [expectedOutput]);
  const ys = tf.tensor2d(outputs, [totalInputs, 1]);

  return { xs, ys };
};

const shuffle = (arrayToShuffle) => {
  for (
    let startIndex = arrayToShuffle.length - 1;
    startIndex > 0;
    startIndex--
  ) {
    const startValue = arrayToShuffle[startIndex];
    const indexToSwap = Math.floor(Math.random() * (startIndex + 1));
    const valueToSwap = arrayToShuffle[indexToSwap];

    arrayToShuffle[indexToSwap] = startValue;
    arrayToShuffle[startIndex] = valueToSwap;
  }
  return arrayToShuffle;
};

const newModel = () => {
  // A sequential model is any model where the outputs of one layer are the inputs to the next layer
  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      units: 5,
      inputShape: [1],
      activation: "sigmoid",
    }),
  );
  model.add(tf.layers.dense({ units: 3, activation: "sigmoid" }));
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

  model.compile({
    loss: "meanSquaredError",
    optimizer: optimizer,
    metrics: ["accuracy"],
  });

  return model;
};

const learningRate = 0.01;
const optimizer = tf.train.adam(learningRate);

const startTraining = async (model, xs, ys) => {
  return await model.fit(xs, ys, {
    epochs: 10,
  });
};

run();
