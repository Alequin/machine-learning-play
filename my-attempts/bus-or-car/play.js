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

  const testCars = new Array(2)
    .fill(null)
    .map(newCar)
    .map(({ seatCount, wheelCount, windowCount }) => [
      seatCount,
      wheelCount,
      windowCount,
    ]);
  const testBuses = new Array(2)
    .fill(null)
    .map(newBus)
    .map(({ seatCount, wheelCount, windowCount }) => [
      seatCount,
      wheelCount,
      windowCount,
    ]);

  const testData = [...testCars, ...testBuses];

  for (let j = 0; j < iterations; j++) {
    const history = await startTraining(model, xs, ys);
    const preds = model.predict(tf.tensor(testData));
    const output = _.chunk(Array.from(preds.round().dataSync()), 2);
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
  const inputs = shuffle([
    ...new Array(totalInputs / 2).fill(0).map(newCar),
    ...new Array(totalInputs / 2).fill(0).map(newBus),
  ]);

  const xs = tf.tensor2d(
    inputs.map(({ seatCount, wheelCount, windowCount }) => [
      seatCount,
      wheelCount,
      windowCount,
    ]),
    [totalInputs, 3],
  );

  const outputs = inputs.map(({ type }) => type);
  const ys = tf.tensor2d(outputs, [totalInputs, 2]);

  return { xs, ys };
};

const newCar = () => ({
  seatCount: _.random(2, 4),
  wheelCount: 4,
  windowCount: _.random(2, 6),
  type: [1, 0],
});

const newBus = () => ({
  seatCount: _.random(8, 20),
  wheelCount: 6,
  windowCount: _.random(8, 10),
  type: [0, 1],
});

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
    tf.layers.dense({ units: 3, inputShape: [3], activation: "sigmoid" }),
  );
  model.add(tf.layers.dense({ units: 2, activation: "sigmoid" }));

  model.compile({
    loss: tf.losses.hingeLoss,
    optimizer: optimizer,
    metrics: ["accuracy"],
  });

  return model;
};

const learningRate = 0.03;
const optimizer = tf.train.adam(learningRate);

const startTraining = async (model, xs, ys) => {
  return await model.fit(xs, ys, {
    epochs: 10,
  });
};

run();
