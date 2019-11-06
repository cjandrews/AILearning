const matches = [
  { a:1, b:1 },
  { a:1, c:1 },
  { a:1, d:1 },
  { a:1, e:1 },
  { a:1, f:1 },
  { c:1, b:1 },
  { d:1, b:1 },
  { e:1, b:1 },
  { f:1, b:1 },
  { d:1, a:1 },
  { d:1, b:1 },
  { b:1, c:1 },
  { c:1, b:1 },
];

// const matchstats = [
//   { a:1 },
//   { a:1 },
//   { a:1 },
//   { a:1 },
//   { a:1 },
//   { c:1 },
//   { d:1 },
//   { e:1 },
//   { f:1 },
//   { d:1 },
//   { d:1 },
//   { b:1 },
//   { c:1 },
// ];

const matchstats = [
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 1 ],
  [ 0 ],
];

const trainingData = [];

for (let i = 0; i < matches.length; i++) {
    trainingData.push({
        input: matches[i],
        output: matchstats[i]
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [5] });

const stats = net.train(trainingData);

console.log(stats);
console.log(".");

console.log("ce ");
console.log(net.run(
  { e:1, c:1 }
));
console.log("ce ");
console.log(net.run(
  { c:1, e:1 }
));
console.log("cb ");
console.log(net.run(
  { b:1, c:1 }
));
console.log("cb ");
console.log(net.run(
  { c:1, b:1 }
));
