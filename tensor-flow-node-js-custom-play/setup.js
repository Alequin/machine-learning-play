const tf = require("@tensorflow/tfjs");
const rawTestData = require("./data.json");

const TIMEOUT_BETWEEN_EPOCHS_MS = 500;
const TOTAL_POSSIBLE_STATES = 2;

const start = async () => {
  const trainingData = tf.data
    .array(rawTestData.map(mapJsonEntry))
    .shuffle(rawTestData.length)
    .batch(50);

  const trainingValidationData = tf.data
    .array(rawTestData.map(mapJsonEntry))
    .batch(rawTestData.length);

  const model = tf.sequential();
  model.add(
    tf.layers.dense({ units: 16, activation: "relu", inputShape: [1] }),
  );
  model.add(
    tf.layers.dense({ units: TOTAL_POSSIBLE_STATES, activation: "softmax" }),
  );

  model.compile({
    optimizer: tf.train.adam(),
    loss: "sparseCategoricalCrossentropy",
    metrics: ["accuracy"],
  });

  const numTrainingIterations = 100;
  for (var j = 0; j < numTrainingIterations; j++) {
    console.log(`Training iteration : ${j + 1} / ${numTrainingIterations}`);
    await model.fitDataset(trainingData, { epochs: 1 });
    console.log(
      "accuracyPerClass",
      await evaluate(model, trainingValidationData, true),
    );
    await new Promise((r) => setTimeout(r, TIMEOUT_BETWEEN_EPOCHS_MS));
  }
};

const mapJsonEntry = ({ number, state }) => ({ xs: [number], ys: state });

async function evaluate(model, trainingValidationData, useTestData) {
  let results = {};
  await trainingValidationData.forEachAsync((stateBatch) => {
    console.log(stateBatch.xs);
    const values = model.predict(stateBatch.xs).dataSync();
    const classSize = rawTestData.length / TOTAL_POSSIBLE_STATES;
    for (let i = 0; i < TOTAL_POSSIBLE_STATES; i++) {
      results[state(i)] = {
        training: calcPitchClassEval(i, classSize, values),
      };
    }
  });

  // if (useTestData) {
  //   await testValidationData.forEachAsync((pitchTypeBatch) => {
  //     const values = model.predict(pitchTypeBatch.xs).dataSync();
  //     const classSize = TEST_DATA_LENGTH / TOTAL_POSSIBLE_STATES;
  //     for (let i = 0; i < TOTAL_POSSIBLE_STATES; i++) {
  //       results[pitchFromClassNum(i)].validation = calcPitchClassEval(
  //         i,
  //         classSize,
  //         values,
  //       );
  //     }
  //   });
  // }
  return results;
}

// Determines accuracy evaluation for a given pitch class by index
function calcPitchClassEval(pitchIndex, classSize, values) {
  // Output has 7 different class values for each pitch, offset based on
  // which pitch class (ordered by i)
  let index = pitchIndex * classSize * TOTAL_POSSIBLE_STATES + pitchIndex;
  let total = 0;
  for (let i = 0; i < classSize; i++) {
    total += values[index];
    index += TOTAL_POSSIBLE_STATES;
  }
  return total / classSize;
}

const state = (value) => (value === 0 ? "even" : "odd");

start()
  .then(() => console.log("complete"))
  .catch((error) => console.error(error));
