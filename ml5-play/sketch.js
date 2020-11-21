let neuralNetwork = null;

const start = () => {
  // const nnOptions = {
  //   inputs: ["number"],
  //   outputs: ["state"],
  //   task: "classification",
  //   debug: true,
  // };

  const nnOptions = {
    task: "classification",
    debug: true,
  };

  console.log("setup network");
  neuralNetwork = ml5.neuralNetwork(nnOptions);

  startTraining();
};

const startTraining = () => {
  console.log("start training");
  data.forEach((item) => {
    neuralNetwork.addData(
      [JSON.stringify([{ number: item.number }])],
      [item.state],
    );
  });

  const trainingOptions = {
    epochs: 50,
    batchSize: 64,
  };
  neuralNetwork.train(trainingOptions, () => {}, afterTraining);
};

function afterTraining() {
  neuralNetwork.classify(
    [JSON.stringify([{ number: 50 }])],
    (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(result);
    },
  );
}

const data = [
  {
    number: 1,
    state: "odd",
  },
  {
    number: 2,
    state: "even",
  },
  {
    number: 3,
    state: "odd",
  },
  {
    number: 4,
    state: "even",
  },
  {
    number: 5,
    state: "odd",
  },
  {
    number: 6,
    state: "even",
  },
  {
    number: 7,
    state: "odd",
  },
  {
    number: 8,
    state: "even",
  },
  {
    number: 9,
    state: "odd",
  },
  {
    number: 10,
    state: "even",
  },
  {
    number: 11,
    state: "odd",
  },
  {
    number: 12,
    state: "even",
  },
  {
    number: 13,
    state: "odd",
  },
  {
    number: 14,
    state: "even",
  },
  {
    number: 15,
    state: "odd",
  },
  {
    number: 16,
    state: "even",
  },
  {
    number: 17,
    state: "odd",
  },
  {
    number: 18,
    state: "even",
  },
  {
    number: 19,
    state: "odd",
  },
  {
    number: 20,
    state: "even",
  },
  {
    number: 21,
    state: "odd",
  },
  {
    number: 22,
    state: "even",
  },
  {
    number: 23,
    state: "odd",
  },
  {
    number: 24,
    state: "even",
  },
  {
    number: 25,
    state: "odd",
  },
  {
    number: 26,
    state: "even",
  },
  {
    number: 27,
    state: "odd",
  },
  {
    number: 28,
    state: "even",
  },
  {
    number: 29,
    state: "odd",
  },
  {
    number: 30,
    state: "even",
  },
  {
    number: 31,
    state: "odd",
  },
  {
    number: 32,
    state: "even",
  },
  {
    number: 33,
    state: "odd",
  },
  {
    number: 34,
    state: "even",
  },
  {
    number: 35,
    state: "odd",
  },
  {
    number: 36,
    state: "even",
  },
  {
    number: 37,
    state: "odd",
  },
  {
    number: 38,
    state: "even",
  },
  {
    number: 39,
    state: "odd",
  },
  {
    number: 40,
    state: "even",
  },
  {
    number: 41,
    state: "odd",
  },
  {
    number: 42,
    state: "even",
  },
  {
    number: 43,
    state: "odd",
  },
  {
    number: 44,
    state: "even",
  },
  {
    number: 45,
    state: "odd",
  },
  {
    number: 46,
    state: "even",
  },
  {
    number: 47,
    state: "odd",
  },
  {
    number: 48,
    state: "even",
  },
  {
    number: 49,
    state: "odd",
  },
  {
    number: 50,
    state: "even",
  },
  {
    number: 51,
    state: "odd",
  },
  {
    number: 52,
    state: "even",
  },
  {
    number: 53,
    state: "odd",
  },
  {
    number: 54,
    state: "even",
  },
  {
    number: 55,
    state: "odd",
  },
  {
    number: 56,
    state: "even",
  },
  {
    number: 57,
    state: "odd",
  },
  {
    number: 58,
    state: "even",
  },
  {
    number: 59,
    state: "odd",
  },
  {
    number: 60,
    state: "even",
  },
  {
    number: 61,
    state: "odd",
  },
  {
    number: 62,
    state: "even",
  },
  {
    number: 63,
    state: "odd",
  },
  {
    number: 64,
    state: "even",
  },
  {
    number: 65,
    state: "odd",
  },
  {
    number: 66,
    state: "even",
  },
  {
    number: 67,
    state: "odd",
  },
  {
    number: 68,
    state: "even",
  },
  {
    number: 69,
    state: "odd",
  },
  {
    number: 70,
    state: "even",
  },
  {
    number: 71,
    state: "odd",
  },
  {
    number: 72,
    state: "even",
  },
  {
    number: 73,
    state: "odd",
  },
  {
    number: 74,
    state: "even",
  },
  {
    number: 75,
    state: "odd",
  },
  {
    number: 76,
    state: "even",
  },
  {
    number: 77,
    state: "odd",
  },
  {
    number: 78,
    state: "even",
  },
  {
    number: 79,
    state: "odd",
  },
  {
    number: 80,
    state: "even",
  },
  {
    number: 81,
    state: "odd",
  },
  {
    number: 82,
    state: "even",
  },
  {
    number: 83,
    state: "odd",
  },
  {
    number: 84,
    state: "even",
  },
  {
    number: 85,
    state: "odd",
  },
  {
    number: 86,
    state: "even",
  },
  {
    number: 87,
    state: "odd",
  },
  {
    number: 88,
    state: "even",
  },
  {
    number: 89,
    state: "odd",
  },
  {
    number: 90,
    state: "even",
  },
  {
    number: 91,
    state: "odd",
  },
  {
    number: 92,
    state: "even",
  },
  {
    number: 93,
    state: "odd",
  },
  {
    number: 94,
    state: "even",
  },
  {
    number: 95,
    state: "odd",
  },
  {
    number: 96,
    state: "even",
  },
  {
    number: 97,
    state: "odd",
  },
  {
    number: 98,
    state: "even",
  },
  {
    number: 99,
    state: "odd",
  },
  {
    number: 100,
    state: "even",
  },
  {
    number: 101,
    state: "odd",
  },
  {
    number: 102,
    state: "even",
  },
  {
    number: 103,
    state: "odd",
  },
  {
    number: 104,
    state: "even",
  },
  {
    number: 105,
    state: "odd",
  },
  {
    number: 106,
    state: "even",
  },
  {
    number: 107,
    state: "odd",
  },
  {
    number: 108,
    state: "even",
  },
  {
    number: 109,
    state: "odd",
  },
  {
    number: 110,
    state: "even",
  },
  {
    number: 111,
    state: "odd",
  },
  {
    number: 112,
    state: "even",
  },
  {
    number: 113,
    state: "odd",
  },
  {
    number: 114,
    state: "even",
  },
  {
    number: 115,
    state: "odd",
  },
  {
    number: 116,
    state: "even",
  },
  {
    number: 117,
    state: "odd",
  },
  {
    number: 118,
    state: "even",
  },
  {
    number: 119,
    state: "odd",
  },
  {
    number: 120,
    state: "even",
  },
  {
    number: 121,
    state: "odd",
  },
  {
    number: 122,
    state: "even",
  },
  {
    number: 123,
    state: "odd",
  },
  {
    number: 124,
    state: "even",
  },
  {
    number: 125,
    state: "odd",
  },
  {
    number: 126,
    state: "even",
  },
  {
    number: 127,
    state: "odd",
  },
  {
    number: 128,
    state: "even",
  },
  {
    number: 129,
    state: "odd",
  },
  {
    number: 130,
    state: "even",
  },
  {
    number: 131,
    state: "odd",
  },
  {
    number: 132,
    state: "even",
  },
  {
    number: 133,
    state: "odd",
  },
  {
    number: 134,
    state: "even",
  },
  {
    number: 135,
    state: "odd",
  },
  {
    number: 136,
    state: "even",
  },
  {
    number: 137,
    state: "odd",
  },
  {
    number: 138,
    state: "even",
  },
  {
    number: 139,
    state: "odd",
  },
  {
    number: 140,
    state: "even",
  },
  {
    number: 141,
    state: "odd",
  },
  {
    number: 142,
    state: "even",
  },
  {
    number: 143,
    state: "odd",
  },
  {
    number: 144,
    state: "even",
  },
  {
    number: 145,
    state: "odd",
  },
  {
    number: 146,
    state: "even",
  },
  {
    number: 147,
    state: "odd",
  },
  {
    number: 148,
    state: "even",
  },
  {
    number: 149,
    state: "odd",
  },
  {
    number: 150,
    state: "even",
  },
  {
    number: 151,
    state: "odd",
  },
  {
    number: 152,
    state: "even",
  },
  {
    number: 153,
    state: "odd",
  },
  {
    number: 154,
    state: "even",
  },
  {
    number: 155,
    state: "odd",
  },
  {
    number: 156,
    state: "even",
  },
  {
    number: 157,
    state: "odd",
  },
  {
    number: 158,
    state: "even",
  },
  {
    number: 159,
    state: "odd",
  },
  {
    number: 160,
    state: "even",
  },
  {
    number: 161,
    state: "odd",
  },
  {
    number: 162,
    state: "even",
  },
  {
    number: 163,
    state: "odd",
  },
  {
    number: 164,
    state: "even",
  },
  {
    number: 165,
    state: "odd",
  },
  {
    number: 166,
    state: "even",
  },
  {
    number: 167,
    state: "odd",
  },
  {
    number: 168,
    state: "even",
  },
  {
    number: 169,
    state: "odd",
  },
  {
    number: 170,
    state: "even",
  },
  {
    number: 171,
    state: "odd",
  },
  {
    number: 172,
    state: "even",
  },
  {
    number: 173,
    state: "odd",
  },
  {
    number: 174,
    state: "even",
  },
  {
    number: 175,
    state: "odd",
  },
  {
    number: 176,
    state: "even",
  },
  {
    number: 177,
    state: "odd",
  },
  {
    number: 178,
    state: "even",
  },
  {
    number: 179,
    state: "odd",
  },
  {
    number: 180,
    state: "even",
  },
  {
    number: 181,
    state: "odd",
  },
  {
    number: 182,
    state: "even",
  },
  {
    number: 183,
    state: "odd",
  },
  {
    number: 184,
    state: "even",
  },
  {
    number: 185,
    state: "odd",
  },
  {
    number: 186,
    state: "even",
  },
  {
    number: 187,
    state: "odd",
  },
  {
    number: 188,
    state: "even",
  },
  {
    number: 189,
    state: "odd",
  },
  {
    number: 190,
    state: "even",
  },
  {
    number: 191,
    state: "odd",
  },
  {
    number: 192,
    state: "even",
  },
  {
    number: 193,
    state: "odd",
  },
  {
    number: 194,
    state: "even",
  },
  {
    number: 195,
    state: "odd",
  },
  {
    number: 196,
    state: "even",
  },
  {
    number: 197,
    state: "odd",
  },
  {
    number: 198,
    state: "even",
  },
  {
    number: 199,
    state: "odd",
  },
  {
    number: 200,
    state: "even",
  },
  {
    number: 201,
    state: "odd",
  },
  {
    number: 202,
    state: "even",
  },
  {
    number: 203,
    state: "odd",
  },
  {
    number: 204,
    state: "even",
  },
  {
    number: 205,
    state: "odd",
  },
  {
    number: 206,
    state: "even",
  },
  {
    number: 207,
    state: "odd",
  },
  {
    number: 208,
    state: "even",
  },
  {
    number: 209,
    state: "odd",
  },
  {
    number: 210,
    state: "even",
  },
  {
    number: 211,
    state: "odd",
  },
  {
    number: 212,
    state: "even",
  },
  {
    number: 213,
    state: "odd",
  },
  {
    number: 214,
    state: "even",
  },
  {
    number: 215,
    state: "odd",
  },
  {
    number: 216,
    state: "even",
  },
  {
    number: 217,
    state: "odd",
  },
  {
    number: 218,
    state: "even",
  },
  {
    number: 219,
    state: "odd",
  },
  {
    number: 220,
    state: "even",
  },
  {
    number: 221,
    state: "odd",
  },
  {
    number: 222,
    state: "even",
  },
  {
    number: 223,
    state: "odd",
  },
  {
    number: 224,
    state: "even",
  },
  {
    number: 225,
    state: "odd",
  },
  {
    number: 226,
    state: "even",
  },
  {
    number: 227,
    state: "odd",
  },
  {
    number: 228,
    state: "even",
  },
  {
    number: 229,
    state: "odd",
  },
  {
    number: 230,
    state: "even",
  },
  {
    number: 231,
    state: "odd",
  },
  {
    number: 232,
    state: "even",
  },
  {
    number: 233,
    state: "odd",
  },
  {
    number: 234,
    state: "even",
  },
  {
    number: 235,
    state: "odd",
  },
  {
    number: 236,
    state: "even",
  },
  {
    number: 237,
    state: "odd",
  },
  {
    number: 238,
    state: "even",
  },
  {
    number: 239,
    state: "odd",
  },
  {
    number: 240,
    state: "even",
  },
  {
    number: 241,
    state: "odd",
  },
  {
    number: 242,
    state: "even",
  },
  {
    number: 243,
    state: "odd",
  },
  {
    number: 244,
    state: "even",
  },
  {
    number: 245,
    state: "odd",
  },
  {
    number: 246,
    state: "even",
  },
  {
    number: 247,
    state: "odd",
  },
  {
    number: 248,
    state: "even",
  },
  {
    number: 249,
    state: "odd",
  },
  {
    number: 250,
    state: "even",
  },
  {
    number: 251,
    state: "odd",
  },
  {
    number: 252,
    state: "even",
  },
  {
    number: 253,
    state: "odd",
  },
  {
    number: 254,
    state: "even",
  },
  {
    number: 255,
    state: "odd",
  },
  {
    number: 256,
    state: "even",
  },
  {
    number: 257,
    state: "odd",
  },
  {
    number: 258,
    state: "even",
  },
  {
    number: 259,
    state: "odd",
  },
  {
    number: 260,
    state: "even",
  },
  {
    number: 261,
    state: "odd",
  },
  {
    number: 262,
    state: "even",
  },
  {
    number: 263,
    state: "odd",
  },
  {
    number: 264,
    state: "even",
  },
  {
    number: 265,
    state: "odd",
  },
  {
    number: 266,
    state: "even",
  },
  {
    number: 267,
    state: "odd",
  },
  {
    number: 268,
    state: "even",
  },
  {
    number: 269,
    state: "odd",
  },
  {
    number: 270,
    state: "even",
  },
  {
    number: 271,
    state: "odd",
  },
  {
    number: 272,
    state: "even",
  },
  {
    number: 273,
    state: "odd",
  },
  {
    number: 274,
    state: "even",
  },
  {
    number: 275,
    state: "odd",
  },
  {
    number: 276,
    state: "even",
  },
  {
    number: 277,
    state: "odd",
  },
  {
    number: 278,
    state: "even",
  },
  {
    number: 279,
    state: "odd",
  },
  {
    number: 280,
    state: "even",
  },
  {
    number: 281,
    state: "odd",
  },
  {
    number: 282,
    state: "even",
  },
  {
    number: 283,
    state: "odd",
  },
  {
    number: 284,
    state: "even",
  },
  {
    number: 285,
    state: "odd",
  },
  {
    number: 286,
    state: "even",
  },
  {
    number: 287,
    state: "odd",
  },
  {
    number: 288,
    state: "even",
  },
  {
    number: 289,
    state: "odd",
  },
  {
    number: 290,
    state: "even",
  },
  {
    number: 291,
    state: "odd",
  },
  {
    number: 292,
    state: "even",
  },
  {
    number: 293,
    state: "odd",
  },
  {
    number: 294,
    state: "even",
  },
  {
    number: 295,
    state: "odd",
  },
  {
    number: 296,
    state: "even",
  },
  {
    number: 297,
    state: "odd",
  },
  {
    number: 298,
    state: "even",
  },
  {
    number: 299,
    state: "odd",
  },
  {
    number: 300,
    state: "even",
  },
  {
    number: 301,
    state: "odd",
  },
  {
    number: 302,
    state: "even",
  },
  {
    number: 303,
    state: "odd",
  },
  {
    number: 304,
    state: "even",
  },
  {
    number: 305,
    state: "odd",
  },
  {
    number: 306,
    state: "even",
  },
  {
    number: 307,
    state: "odd",
  },
  {
    number: 308,
    state: "even",
  },
  {
    number: 309,
    state: "odd",
  },
  {
    number: 310,
    state: "even",
  },
  {
    number: 311,
    state: "odd",
  },
  {
    number: 312,
    state: "even",
  },
  {
    number: 313,
    state: "odd",
  },
  {
    number: 314,
    state: "even",
  },
  {
    number: 315,
    state: "odd",
  },
  {
    number: 316,
    state: "even",
  },
  {
    number: 317,
    state: "odd",
  },
  {
    number: 318,
    state: "even",
  },
  {
    number: 319,
    state: "odd",
  },
  {
    number: 320,
    state: "even",
  },
  {
    number: 321,
    state: "odd",
  },
  {
    number: 322,
    state: "even",
  },
  {
    number: 323,
    state: "odd",
  },
  {
    number: 324,
    state: "even",
  },
  {
    number: 325,
    state: "odd",
  },
  {
    number: 326,
    state: "even",
  },
  {
    number: 327,
    state: "odd",
  },
  {
    number: 328,
    state: "even",
  },
  {
    number: 329,
    state: "odd",
  },
  {
    number: 330,
    state: "even",
  },
  {
    number: 331,
    state: "odd",
  },
  {
    number: 332,
    state: "even",
  },
  {
    number: 333,
    state: "odd",
  },
  {
    number: 334,
    state: "even",
  },
  {
    number: 335,
    state: "odd",
  },
  {
    number: 336,
    state: "even",
  },
  {
    number: 337,
    state: "odd",
  },
  {
    number: 338,
    state: "even",
  },
  {
    number: 339,
    state: "odd",
  },
  {
    number: 340,
    state: "even",
  },
  {
    number: 341,
    state: "odd",
  },
  {
    number: 342,
    state: "even",
  },
  {
    number: 343,
    state: "odd",
  },
  {
    number: 344,
    state: "even",
  },
  {
    number: 345,
    state: "odd",
  },
  {
    number: 346,
    state: "even",
  },
  {
    number: 347,
    state: "odd",
  },
  {
    number: 348,
    state: "even",
  },
  {
    number: 349,
    state: "odd",
  },
  {
    number: 350,
    state: "even",
  },
  {
    number: 351,
    state: "odd",
  },
  {
    number: 352,
    state: "even",
  },
  {
    number: 353,
    state: "odd",
  },
  {
    number: 354,
    state: "even",
  },
  {
    number: 355,
    state: "odd",
  },
  {
    number: 356,
    state: "even",
  },
  {
    number: 357,
    state: "odd",
  },
  {
    number: 358,
    state: "even",
  },
  {
    number: 359,
    state: "odd",
  },
  {
    number: 360,
    state: "even",
  },
  {
    number: 361,
    state: "odd",
  },
  {
    number: 362,
    state: "even",
  },
  {
    number: 363,
    state: "odd",
  },
  {
    number: 364,
    state: "even",
  },
  {
    number: 365,
    state: "odd",
  },
  {
    number: 366,
    state: "even",
  },
  {
    number: 367,
    state: "odd",
  },
  {
    number: 368,
    state: "even",
  },
  {
    number: 369,
    state: "odd",
  },
  {
    number: 370,
    state: "even",
  },
  {
    number: 371,
    state: "odd",
  },
  {
    number: 372,
    state: "even",
  },
  {
    number: 373,
    state: "odd",
  },
  {
    number: 374,
    state: "even",
  },
  {
    number: 375,
    state: "odd",
  },
  {
    number: 376,
    state: "even",
  },
  {
    number: 377,
    state: "odd",
  },
  {
    number: 378,
    state: "even",
  },
  {
    number: 379,
    state: "odd",
  },
  {
    number: 380,
    state: "even",
  },
  {
    number: 381,
    state: "odd",
  },
  {
    number: 382,
    state: "even",
  },
  {
    number: 383,
    state: "odd",
  },
  {
    number: 384,
    state: "even",
  },
  {
    number: 385,
    state: "odd",
  },
  {
    number: 386,
    state: "even",
  },
  {
    number: 387,
    state: "odd",
  },
  {
    number: 388,
    state: "even",
  },
  {
    number: 389,
    state: "odd",
  },
  {
    number: 390,
    state: "even",
  },
  {
    number: 391,
    state: "odd",
  },
  {
    number: 392,
    state: "even",
  },
  {
    number: 393,
    state: "odd",
  },
  {
    number: 394,
    state: "even",
  },
  {
    number: 395,
    state: "odd",
  },
  {
    number: 396,
    state: "even",
  },
  {
    number: 397,
    state: "odd",
  },
  {
    number: 398,
    state: "even",
  },
  {
    number: 399,
    state: "odd",
  },
  {
    number: 400,
    state: "even",
  },
  {
    number: 401,
    state: "odd",
  },
  {
    number: 402,
    state: "even",
  },
  {
    number: 403,
    state: "odd",
  },
  {
    number: 404,
    state: "even",
  },
  {
    number: 405,
    state: "odd",
  },
  {
    number: 406,
    state: "even",
  },
  {
    number: 407,
    state: "odd",
  },
  {
    number: 408,
    state: "even",
  },
  {
    number: 409,
    state: "odd",
  },
  {
    number: 410,
    state: "even",
  },
  {
    number: 411,
    state: "odd",
  },
  {
    number: 412,
    state: "even",
  },
  {
    number: 413,
    state: "odd",
  },
  {
    number: 414,
    state: "even",
  },
  {
    number: 415,
    state: "odd",
  },
  {
    number: 416,
    state: "even",
  },
  {
    number: 417,
    state: "odd",
  },
  {
    number: 418,
    state: "even",
  },
  {
    number: 419,
    state: "odd",
  },
  {
    number: 420,
    state: "even",
  },
  {
    number: 421,
    state: "odd",
  },
  {
    number: 422,
    state: "even",
  },
  {
    number: 423,
    state: "odd",
  },
  {
    number: 424,
    state: "even",
  },
  {
    number: 425,
    state: "odd",
  },
  {
    number: 426,
    state: "even",
  },
  {
    number: 427,
    state: "odd",
  },
  {
    number: 428,
    state: "even",
  },
  {
    number: 429,
    state: "odd",
  },
  {
    number: 430,
    state: "even",
  },
  {
    number: 431,
    state: "odd",
  },
  {
    number: 432,
    state: "even",
  },
  {
    number: 433,
    state: "odd",
  },
  {
    number: 434,
    state: "even",
  },
  {
    number: 435,
    state: "odd",
  },
  {
    number: 436,
    state: "even",
  },
  {
    number: 437,
    state: "odd",
  },
  {
    number: 438,
    state: "even",
  },
  {
    number: 439,
    state: "odd",
  },
  {
    number: 440,
    state: "even",
  },
  {
    number: 441,
    state: "odd",
  },
  {
    number: 442,
    state: "even",
  },
  {
    number: 443,
    state: "odd",
  },
  {
    number: 444,
    state: "even",
  },
  {
    number: 445,
    state: "odd",
  },
  {
    number: 446,
    state: "even",
  },
  {
    number: 447,
    state: "odd",
  },
  {
    number: 448,
    state: "even",
  },
  {
    number: 449,
    state: "odd",
  },
  {
    number: 450,
    state: "even",
  },
  {
    number: 451,
    state: "odd",
  },
  {
    number: 452,
    state: "even",
  },
  {
    number: 453,
    state: "odd",
  },
  {
    number: 454,
    state: "even",
  },
  {
    number: 455,
    state: "odd",
  },
  {
    number: 456,
    state: "even",
  },
  {
    number: 457,
    state: "odd",
  },
  {
    number: 458,
    state: "even",
  },
  {
    number: 459,
    state: "odd",
  },
  {
    number: 460,
    state: "even",
  },
  {
    number: 461,
    state: "odd",
  },
  {
    number: 462,
    state: "even",
  },
  {
    number: 463,
    state: "odd",
  },
  {
    number: 464,
    state: "even",
  },
  {
    number: 465,
    state: "odd",
  },
  {
    number: 466,
    state: "even",
  },
  {
    number: 467,
    state: "odd",
  },
  {
    number: 468,
    state: "even",
  },
  {
    number: 469,
    state: "odd",
  },
  {
    number: 470,
    state: "even",
  },
  {
    number: 471,
    state: "odd",
  },
  {
    number: 472,
    state: "even",
  },
  {
    number: 473,
    state: "odd",
  },
  {
    number: 474,
    state: "even",
  },
  {
    number: 475,
    state: "odd",
  },
  {
    number: 476,
    state: "even",
  },
  {
    number: 477,
    state: "odd",
  },
  {
    number: 478,
    state: "even",
  },
  {
    number: 479,
    state: "odd",
  },
  {
    number: 480,
    state: "even",
  },
  {
    number: 481,
    state: "odd",
  },
  {
    number: 482,
    state: "even",
  },
  {
    number: 483,
    state: "odd",
  },
  {
    number: 484,
    state: "even",
  },
  {
    number: 485,
    state: "odd",
  },
  {
    number: 486,
    state: "even",
  },
  {
    number: 487,
    state: "odd",
  },
  {
    number: 488,
    state: "even",
  },
  {
    number: 489,
    state: "odd",
  },
  {
    number: 490,
    state: "even",
  },
  {
    number: 491,
    state: "odd",
  },
  {
    number: 492,
    state: "even",
  },
  {
    number: 493,
    state: "odd",
  },
  {
    number: 494,
    state: "even",
  },
  {
    number: 495,
    state: "odd",
  },
  {
    number: 496,
    state: "even",
  },
  {
    number: 497,
    state: "odd",
  },
  {
    number: 498,
    state: "even",
  },
  {
    number: 499,
    state: "odd",
  },
  {
    number: 500,
    state: "even",
  },
  {
    number: 501,
    state: "odd",
  },
  {
    number: 502,
    state: "even",
  },
  {
    number: 503,
    state: "odd",
  },
  {
    number: 504,
    state: "even",
  },
  {
    number: 505,
    state: "odd",
  },
  {
    number: 506,
    state: "even",
  },
  {
    number: 507,
    state: "odd",
  },
  {
    number: 508,
    state: "even",
  },
  {
    number: 509,
    state: "odd",
  },
  {
    number: 510,
    state: "even",
  },
  {
    number: 511,
    state: "odd",
  },
  {
    number: 512,
    state: "even",
  },
  {
    number: 513,
    state: "odd",
  },
  {
    number: 514,
    state: "even",
  },
  {
    number: 515,
    state: "odd",
  },
  {
    number: 516,
    state: "even",
  },
  {
    number: 517,
    state: "odd",
  },
  {
    number: 518,
    state: "even",
  },
  {
    number: 519,
    state: "odd",
  },
  {
    number: 520,
    state: "even",
  },
  {
    number: 521,
    state: "odd",
  },
  {
    number: 522,
    state: "even",
  },
  {
    number: 523,
    state: "odd",
  },
  {
    number: 524,
    state: "even",
  },
  {
    number: 525,
    state: "odd",
  },
  {
    number: 526,
    state: "even",
  },
  {
    number: 527,
    state: "odd",
  },
  {
    number: 528,
    state: "even",
  },
  {
    number: 529,
    state: "odd",
  },
  {
    number: 530,
    state: "even",
  },
  {
    number: 531,
    state: "odd",
  },
  {
    number: 532,
    state: "even",
  },
  {
    number: 533,
    state: "odd",
  },
  {
    number: 534,
    state: "even",
  },
  {
    number: 535,
    state: "odd",
  },
  {
    number: 536,
    state: "even",
  },
  {
    number: 537,
    state: "odd",
  },
  {
    number: 538,
    state: "even",
  },
  {
    number: 539,
    state: "odd",
  },
  {
    number: 540,
    state: "even",
  },
  {
    number: 541,
    state: "odd",
  },
  {
    number: 542,
    state: "even",
  },
  {
    number: 543,
    state: "odd",
  },
  {
    number: 544,
    state: "even",
  },
  {
    number: 545,
    state: "odd",
  },
  {
    number: 546,
    state: "even",
  },
  {
    number: 547,
    state: "odd",
  },
  {
    number: 548,
    state: "even",
  },
  {
    number: 549,
    state: "odd",
  },
  {
    number: 550,
    state: "even",
  },
  {
    number: 551,
    state: "odd",
  },
  {
    number: 552,
    state: "even",
  },
  {
    number: 553,
    state: "odd",
  },
  {
    number: 554,
    state: "even",
  },
  {
    number: 555,
    state: "odd",
  },
  {
    number: 556,
    state: "even",
  },
  {
    number: 557,
    state: "odd",
  },
  {
    number: 558,
    state: "even",
  },
  {
    number: 559,
    state: "odd",
  },
  {
    number: 560,
    state: "even",
  },
  {
    number: 561,
    state: "odd",
  },
  {
    number: 562,
    state: "even",
  },
  {
    number: 563,
    state: "odd",
  },
  {
    number: 564,
    state: "even",
  },
  {
    number: 565,
    state: "odd",
  },
  {
    number: 566,
    state: "even",
  },
  {
    number: 567,
    state: "odd",
  },
  {
    number: 568,
    state: "even",
  },
  {
    number: 569,
    state: "odd",
  },
  {
    number: 570,
    state: "even",
  },
  {
    number: 571,
    state: "odd",
  },
  {
    number: 572,
    state: "even",
  },
  {
    number: 573,
    state: "odd",
  },
  {
    number: 574,
    state: "even",
  },
  {
    number: 575,
    state: "odd",
  },
  {
    number: 576,
    state: "even",
  },
  {
    number: 577,
    state: "odd",
  },
  {
    number: 578,
    state: "even",
  },
  {
    number: 579,
    state: "odd",
  },
  {
    number: 580,
    state: "even",
  },
  {
    number: 581,
    state: "odd",
  },
  {
    number: 582,
    state: "even",
  },
  {
    number: 583,
    state: "odd",
  },
  {
    number: 584,
    state: "even",
  },
  {
    number: 585,
    state: "odd",
  },
  {
    number: 586,
    state: "even",
  },
  {
    number: 587,
    state: "odd",
  },
  {
    number: 588,
    state: "even",
  },
  {
    number: 589,
    state: "odd",
  },
  {
    number: 590,
    state: "even",
  },
  {
    number: 591,
    state: "odd",
  },
  {
    number: 592,
    state: "even",
  },
  {
    number: 593,
    state: "odd",
  },
  {
    number: 594,
    state: "even",
  },
  {
    number: 595,
    state: "odd",
  },
  {
    number: 596,
    state: "even",
  },
  {
    number: 597,
    state: "odd",
  },
  {
    number: 598,
    state: "even",
  },
  {
    number: 599,
    state: "odd",
  },
  {
    number: 600,
    state: "even",
  },
  {
    number: 601,
    state: "odd",
  },
  {
    number: 602,
    state: "even",
  },
  {
    number: 603,
    state: "odd",
  },
  {
    number: 604,
    state: "even",
  },
  {
    number: 605,
    state: "odd",
  },
  {
    number: 606,
    state: "even",
  },
  {
    number: 607,
    state: "odd",
  },
  {
    number: 608,
    state: "even",
  },
  {
    number: 609,
    state: "odd",
  },
  {
    number: 610,
    state: "even",
  },
  {
    number: 611,
    state: "odd",
  },
  {
    number: 612,
    state: "even",
  },
  {
    number: 613,
    state: "odd",
  },
  {
    number: 614,
    state: "even",
  },
  {
    number: 615,
    state: "odd",
  },
  {
    number: 616,
    state: "even",
  },
  {
    number: 617,
    state: "odd",
  },
  {
    number: 618,
    state: "even",
  },
  {
    number: 619,
    state: "odd",
  },
  {
    number: 620,
    state: "even",
  },
  {
    number: 621,
    state: "odd",
  },
  {
    number: 622,
    state: "even",
  },
  {
    number: 623,
    state: "odd",
  },
  {
    number: 624,
    state: "even",
  },
  {
    number: 625,
    state: "odd",
  },
  {
    number: 626,
    state: "even",
  },
  {
    number: 627,
    state: "odd",
  },
  {
    number: 628,
    state: "even",
  },
  {
    number: 629,
    state: "odd",
  },
  {
    number: 630,
    state: "even",
  },
  {
    number: 631,
    state: "odd",
  },
  {
    number: 632,
    state: "even",
  },
  {
    number: 633,
    state: "odd",
  },
  {
    number: 634,
    state: "even",
  },
  {
    number: 635,
    state: "odd",
  },
  {
    number: 636,
    state: "even",
  },
  {
    number: 637,
    state: "odd",
  },
  {
    number: 638,
    state: "even",
  },
  {
    number: 639,
    state: "odd",
  },
  {
    number: 640,
    state: "even",
  },
  {
    number: 641,
    state: "odd",
  },
  {
    number: 642,
    state: "even",
  },
  {
    number: 643,
    state: "odd",
  },
  {
    number: 644,
    state: "even",
  },
  {
    number: 645,
    state: "odd",
  },
  {
    number: 646,
    state: "even",
  },
  {
    number: 647,
    state: "odd",
  },
  {
    number: 648,
    state: "even",
  },
  {
    number: 649,
    state: "odd",
  },
  {
    number: 650,
    state: "even",
  },
  {
    number: 651,
    state: "odd",
  },
  {
    number: 652,
    state: "even",
  },
  {
    number: 653,
    state: "odd",
  },
  {
    number: 654,
    state: "even",
  },
  {
    number: 655,
    state: "odd",
  },
  {
    number: 656,
    state: "even",
  },
  {
    number: 657,
    state: "odd",
  },
  {
    number: 658,
    state: "even",
  },
  {
    number: 659,
    state: "odd",
  },
  {
    number: 660,
    state: "even",
  },
  {
    number: 661,
    state: "odd",
  },
  {
    number: 662,
    state: "even",
  },
  {
    number: 663,
    state: "odd",
  },
  {
    number: 664,
    state: "even",
  },
  {
    number: 665,
    state: "odd",
  },
  {
    number: 666,
    state: "even",
  },
  {
    number: 667,
    state: "odd",
  },
  {
    number: 668,
    state: "even",
  },
  {
    number: 669,
    state: "odd",
  },
  {
    number: 670,
    state: "even",
  },
  {
    number: 671,
    state: "odd",
  },
  {
    number: 672,
    state: "even",
  },
  {
    number: 673,
    state: "odd",
  },
  {
    number: 674,
    state: "even",
  },
  {
    number: 675,
    state: "odd",
  },
  {
    number: 676,
    state: "even",
  },
  {
    number: 677,
    state: "odd",
  },
  {
    number: 678,
    state: "even",
  },
  {
    number: 679,
    state: "odd",
  },
  {
    number: 680,
    state: "even",
  },
  {
    number: 681,
    state: "odd",
  },
  {
    number: 682,
    state: "even",
  },
  {
    number: 683,
    state: "odd",
  },
  {
    number: 684,
    state: "even",
  },
  {
    number: 685,
    state: "odd",
  },
  {
    number: 686,
    state: "even",
  },
  {
    number: 687,
    state: "odd",
  },
  {
    number: 688,
    state: "even",
  },
  {
    number: 689,
    state: "odd",
  },
  {
    number: 690,
    state: "even",
  },
  {
    number: 691,
    state: "odd",
  },
  {
    number: 692,
    state: "even",
  },
  {
    number: 693,
    state: "odd",
  },
  {
    number: 694,
    state: "even",
  },
  {
    number: 695,
    state: "odd",
  },
  {
    number: 696,
    state: "even",
  },
  {
    number: 697,
    state: "odd",
  },
  {
    number: 698,
    state: "even",
  },
  {
    number: 699,
    state: "odd",
  },
  {
    number: 700,
    state: "even",
  },
  {
    number: 701,
    state: "odd",
  },
  {
    number: 702,
    state: "even",
  },
  {
    number: 703,
    state: "odd",
  },
  {
    number: 704,
    state: "even",
  },
  {
    number: 705,
    state: "odd",
  },
  {
    number: 706,
    state: "even",
  },
  {
    number: 707,
    state: "odd",
  },
  {
    number: 708,
    state: "even",
  },
  {
    number: 709,
    state: "odd",
  },
  {
    number: 710,
    state: "even",
  },
  {
    number: 711,
    state: "odd",
  },
  {
    number: 712,
    state: "even",
  },
  {
    number: 713,
    state: "odd",
  },
  {
    number: 714,
    state: "even",
  },
  {
    number: 715,
    state: "odd",
  },
  {
    number: 716,
    state: "even",
  },
  {
    number: 717,
    state: "odd",
  },
  {
    number: 718,
    state: "even",
  },
  {
    number: 719,
    state: "odd",
  },
  {
    number: 720,
    state: "even",
  },
  {
    number: 721,
    state: "odd",
  },
  {
    number: 722,
    state: "even",
  },
  {
    number: 723,
    state: "odd",
  },
  {
    number: 724,
    state: "even",
  },
  {
    number: 725,
    state: "odd",
  },
  {
    number: 726,
    state: "even",
  },
  {
    number: 727,
    state: "odd",
  },
  {
    number: 728,
    state: "even",
  },
  {
    number: 729,
    state: "odd",
  },
  {
    number: 730,
    state: "even",
  },
  {
    number: 731,
    state: "odd",
  },
  {
    number: 732,
    state: "even",
  },
  {
    number: 733,
    state: "odd",
  },
  {
    number: 734,
    state: "even",
  },
  {
    number: 735,
    state: "odd",
  },
  {
    number: 736,
    state: "even",
  },
  {
    number: 737,
    state: "odd",
  },
  {
    number: 738,
    state: "even",
  },
  {
    number: 739,
    state: "odd",
  },
  {
    number: 740,
    state: "even",
  },
  {
    number: 741,
    state: "odd",
  },
  {
    number: 742,
    state: "even",
  },
  {
    number: 743,
    state: "odd",
  },
  {
    number: 744,
    state: "even",
  },
  {
    number: 745,
    state: "odd",
  },
  {
    number: 746,
    state: "even",
  },
  {
    number: 747,
    state: "odd",
  },
  {
    number: 748,
    state: "even",
  },
  {
    number: 749,
    state: "odd",
  },
  {
    number: 750,
    state: "even",
  },
  {
    number: 751,
    state: "odd",
  },
  {
    number: 752,
    state: "even",
  },
  {
    number: 753,
    state: "odd",
  },
  {
    number: 754,
    state: "even",
  },
  {
    number: 755,
    state: "odd",
  },
  {
    number: 756,
    state: "even",
  },
  {
    number: 757,
    state: "odd",
  },
  {
    number: 758,
    state: "even",
  },
  {
    number: 759,
    state: "odd",
  },
  {
    number: 760,
    state: "even",
  },
  {
    number: 761,
    state: "odd",
  },
  {
    number: 762,
    state: "even",
  },
  {
    number: 763,
    state: "odd",
  },
  {
    number: 764,
    state: "even",
  },
  {
    number: 765,
    state: "odd",
  },
  {
    number: 766,
    state: "even",
  },
  {
    number: 767,
    state: "odd",
  },
  {
    number: 768,
    state: "even",
  },
  {
    number: 769,
    state: "odd",
  },
  {
    number: 770,
    state: "even",
  },
  {
    number: 771,
    state: "odd",
  },
  {
    number: 772,
    state: "even",
  },
  {
    number: 773,
    state: "odd",
  },
  {
    number: 774,
    state: "even",
  },
  {
    number: 775,
    state: "odd",
  },
  {
    number: 776,
    state: "even",
  },
  {
    number: 777,
    state: "odd",
  },
  {
    number: 778,
    state: "even",
  },
  {
    number: 779,
    state: "odd",
  },
  {
    number: 780,
    state: "even",
  },
  {
    number: 781,
    state: "odd",
  },
  {
    number: 782,
    state: "even",
  },
  {
    number: 783,
    state: "odd",
  },
  {
    number: 784,
    state: "even",
  },
  {
    number: 785,
    state: "odd",
  },
  {
    number: 786,
    state: "even",
  },
  {
    number: 787,
    state: "odd",
  },
  {
    number: 788,
    state: "even",
  },
  {
    number: 789,
    state: "odd",
  },
  {
    number: 790,
    state: "even",
  },
  {
    number: 791,
    state: "odd",
  },
  {
    number: 792,
    state: "even",
  },
  {
    number: 793,
    state: "odd",
  },
  {
    number: 794,
    state: "even",
  },
  {
    number: 795,
    state: "odd",
  },
  {
    number: 796,
    state: "even",
  },
  {
    number: 797,
    state: "odd",
  },
  {
    number: 798,
    state: "even",
  },
  {
    number: 799,
    state: "odd",
  },
  {
    number: 800,
    state: "even",
  },
  {
    number: 801,
    state: "odd",
  },
  {
    number: 802,
    state: "even",
  },
  {
    number: 803,
    state: "odd",
  },
  {
    number: 804,
    state: "even",
  },
  {
    number: 805,
    state: "odd",
  },
  {
    number: 806,
    state: "even",
  },
  {
    number: 807,
    state: "odd",
  },
  {
    number: 808,
    state: "even",
  },
  {
    number: 809,
    state: "odd",
  },
  {
    number: 810,
    state: "even",
  },
  {
    number: 811,
    state: "odd",
  },
  {
    number: 812,
    state: "even",
  },
  {
    number: 813,
    state: "odd",
  },
  {
    number: 814,
    state: "even",
  },
  {
    number: 815,
    state: "odd",
  },
  {
    number: 816,
    state: "even",
  },
  {
    number: 817,
    state: "odd",
  },
  {
    number: 818,
    state: "even",
  },
  {
    number: 819,
    state: "odd",
  },
  {
    number: 820,
    state: "even",
  },
  {
    number: 821,
    state: "odd",
  },
  {
    number: 822,
    state: "even",
  },
  {
    number: 823,
    state: "odd",
  },
  {
    number: 824,
    state: "even",
  },
  {
    number: 825,
    state: "odd",
  },
  {
    number: 826,
    state: "even",
  },
  {
    number: 827,
    state: "odd",
  },
  {
    number: 828,
    state: "even",
  },
  {
    number: 829,
    state: "odd",
  },
  {
    number: 830,
    state: "even",
  },
  {
    number: 831,
    state: "odd",
  },
  {
    number: 832,
    state: "even",
  },
  {
    number: 833,
    state: "odd",
  },
  {
    number: 834,
    state: "even",
  },
  {
    number: 835,
    state: "odd",
  },
  {
    number: 836,
    state: "even",
  },
  {
    number: 837,
    state: "odd",
  },
  {
    number: 838,
    state: "even",
  },
  {
    number: 839,
    state: "odd",
  },
  {
    number: 840,
    state: "even",
  },
  {
    number: 841,
    state: "odd",
  },
  {
    number: 842,
    state: "even",
  },
  {
    number: 843,
    state: "odd",
  },
  {
    number: 844,
    state: "even",
  },
  {
    number: 845,
    state: "odd",
  },
  {
    number: 846,
    state: "even",
  },
  {
    number: 847,
    state: "odd",
  },
  {
    number: 848,
    state: "even",
  },
  {
    number: 849,
    state: "odd",
  },
  {
    number: 850,
    state: "even",
  },
  {
    number: 851,
    state: "odd",
  },
  {
    number: 852,
    state: "even",
  },
  {
    number: 853,
    state: "odd",
  },
  {
    number: 854,
    state: "even",
  },
  {
    number: 855,
    state: "odd",
  },
  {
    number: 856,
    state: "even",
  },
  {
    number: 857,
    state: "odd",
  },
  {
    number: 858,
    state: "even",
  },
  {
    number: 859,
    state: "odd",
  },
  {
    number: 860,
    state: "even",
  },
  {
    number: 861,
    state: "odd",
  },
  {
    number: 862,
    state: "even",
  },
  {
    number: 863,
    state: "odd",
  },
  {
    number: 864,
    state: "even",
  },
  {
    number: 865,
    state: "odd",
  },
  {
    number: 866,
    state: "even",
  },
  {
    number: 867,
    state: "odd",
  },
  {
    number: 868,
    state: "even",
  },
  {
    number: 869,
    state: "odd",
  },
  {
    number: 870,
    state: "even",
  },
  {
    number: 871,
    state: "odd",
  },
  {
    number: 872,
    state: "even",
  },
  {
    number: 873,
    state: "odd",
  },
  {
    number: 874,
    state: "even",
  },
  {
    number: 875,
    state: "odd",
  },
  {
    number: 876,
    state: "even",
  },
  {
    number: 877,
    state: "odd",
  },
  {
    number: 878,
    state: "even",
  },
  {
    number: 879,
    state: "odd",
  },
  {
    number: 880,
    state: "even",
  },
  {
    number: 881,
    state: "odd",
  },
  {
    number: 882,
    state: "even",
  },
  {
    number: 883,
    state: "odd",
  },
  {
    number: 884,
    state: "even",
  },
  {
    number: 885,
    state: "odd",
  },
  {
    number: 886,
    state: "even",
  },
  {
    number: 887,
    state: "odd",
  },
  {
    number: 888,
    state: "even",
  },
  {
    number: 889,
    state: "odd",
  },
  {
    number: 890,
    state: "even",
  },
  {
    number: 891,
    state: "odd",
  },
  {
    number: 892,
    state: "even",
  },
  {
    number: 893,
    state: "odd",
  },
  {
    number: 894,
    state: "even",
  },
  {
    number: 895,
    state: "odd",
  },
  {
    number: 896,
    state: "even",
  },
  {
    number: 897,
    state: "odd",
  },
  {
    number: 898,
    state: "even",
  },
  {
    number: 899,
    state: "odd",
  },
  {
    number: 900,
    state: "even",
  },
  {
    number: 901,
    state: "odd",
  },
  {
    number: 902,
    state: "even",
  },
  {
    number: 903,
    state: "odd",
  },
  {
    number: 904,
    state: "even",
  },
  {
    number: 905,
    state: "odd",
  },
  {
    number: 906,
    state: "even",
  },
  {
    number: 907,
    state: "odd",
  },
  {
    number: 908,
    state: "even",
  },
  {
    number: 909,
    state: "odd",
  },
  {
    number: 910,
    state: "even",
  },
  {
    number: 911,
    state: "odd",
  },
  {
    number: 912,
    state: "even",
  },
  {
    number: 913,
    state: "odd",
  },
  {
    number: 914,
    state: "even",
  },
  {
    number: 915,
    state: "odd",
  },
  {
    number: 916,
    state: "even",
  },
  {
    number: 917,
    state: "odd",
  },
  {
    number: 918,
    state: "even",
  },
  {
    number: 919,
    state: "odd",
  },
  {
    number: 920,
    state: "even",
  },
  {
    number: 921,
    state: "odd",
  },
  {
    number: 922,
    state: "even",
  },
  {
    number: 923,
    state: "odd",
  },
  {
    number: 924,
    state: "even",
  },
  {
    number: 925,
    state: "odd",
  },
  {
    number: 926,
    state: "even",
  },
  {
    number: 927,
    state: "odd",
  },
  {
    number: 928,
    state: "even",
  },
  {
    number: 929,
    state: "odd",
  },
  {
    number: 930,
    state: "even",
  },
  {
    number: 931,
    state: "odd",
  },
  {
    number: 932,
    state: "even",
  },
  {
    number: 933,
    state: "odd",
  },
  {
    number: 934,
    state: "even",
  },
  {
    number: 935,
    state: "odd",
  },
  {
    number: 936,
    state: "even",
  },
  {
    number: 937,
    state: "odd",
  },
  {
    number: 938,
    state: "even",
  },
  {
    number: 939,
    state: "odd",
  },
  {
    number: 940,
    state: "even",
  },
  {
    number: 941,
    state: "odd",
  },
  {
    number: 942,
    state: "even",
  },
  {
    number: 943,
    state: "odd",
  },
  {
    number: 944,
    state: "even",
  },
  {
    number: 945,
    state: "odd",
  },
  {
    number: 946,
    state: "even",
  },
  {
    number: 947,
    state: "odd",
  },
  {
    number: 948,
    state: "even",
  },
  {
    number: 949,
    state: "odd",
  },
  {
    number: 950,
    state: "even",
  },
  {
    number: 951,
    state: "odd",
  },
  {
    number: 952,
    state: "even",
  },
  {
    number: 953,
    state: "odd",
  },
  {
    number: 954,
    state: "even",
  },
  {
    number: 955,
    state: "odd",
  },
  {
    number: 956,
    state: "even",
  },
  {
    number: 957,
    state: "odd",
  },
  {
    number: 958,
    state: "even",
  },
  {
    number: 959,
    state: "odd",
  },
  {
    number: 960,
    state: "even",
  },
  {
    number: 961,
    state: "odd",
  },
  {
    number: 962,
    state: "even",
  },
  {
    number: 963,
    state: "odd",
  },
  {
    number: 964,
    state: "even",
  },
  {
    number: 965,
    state: "odd",
  },
  {
    number: 966,
    state: "even",
  },
  {
    number: 967,
    state: "odd",
  },
  {
    number: 968,
    state: "even",
  },
  {
    number: 969,
    state: "odd",
  },
  {
    number: 970,
    state: "even",
  },
  {
    number: 971,
    state: "odd",
  },
  {
    number: 972,
    state: "even",
  },
  {
    number: 973,
    state: "odd",
  },
  {
    number: 974,
    state: "even",
  },
  {
    number: 975,
    state: "odd",
  },
  {
    number: 976,
    state: "even",
  },
  {
    number: 977,
    state: "odd",
  },
  {
    number: 978,
    state: "even",
  },
  {
    number: 979,
    state: "odd",
  },
  {
    number: 980,
    state: "even",
  },
  {
    number: 981,
    state: "odd",
  },
  {
    number: 982,
    state: "even",
  },
  {
    number: 983,
    state: "odd",
  },
  {
    number: 984,
    state: "even",
  },
  {
    number: 985,
    state: "odd",
  },
  {
    number: 986,
    state: "even",
  },
  {
    number: 987,
    state: "odd",
  },
  {
    number: 988,
    state: "even",
  },
  {
    number: 989,
    state: "odd",
  },
  {
    number: 990,
    state: "even",
  },
  {
    number: 991,
    state: "odd",
  },
  {
    number: 992,
    state: "even",
  },
  {
    number: 993,
    state: "odd",
  },
  {
    number: 994,
    state: "even",
  },
  {
    number: 995,
    state: "odd",
  },
  {
    number: 996,
    state: "even",
  },
  {
    number: 997,
    state: "odd",
  },
  {
    number: 998,
    state: "even",
  },
  {
    number: 999,
    state: "odd",
  },
  {
    number: 1000,
    state: "even",
  },
];

start();
