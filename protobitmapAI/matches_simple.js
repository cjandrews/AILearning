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

const matchstats = [
  { a:1, HG:0.2, AG:0.1 },
  { a:1, HG:0.3, AG:0.1 },
  { a:1, HG:0.4, AG:0.1 },
  { a:1, HG:0.5, AG:0.1 },
  { a:1, HG:0.6, AG:0.1 },
  { c:1, HG:0.2, AG:0.1 },
  { d:1, HG:0.3, AG:0.1 },
  { e:1, HG:0.4, AG:0.1 },
  { f:1, HG:0.2, AG:0.1 },
  { d:1, HG:0.3, AG:0.1 },
  { d:1, HG:0.4, AG:0.1 },
  { b:1, HG:0.3, AG:0.1 },
  { b:1, HG:0.2, AG:0.1 },//breaks the pattern
];

// const matchstats = [
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 1 ],
//   [ 0 ],
// ];

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

console.log("ec ");
console.log(net.run(
  { e:1, c:1 }
));
console.log("ce ");
console.log(net.run(
  { c:1, e:1 }
));
console.log("bc ");
console.log(net.run(
  { b:1, c:1 }
));
console.log("cb ");
console.log(net.run(
  { c:1, b:1 }
));
