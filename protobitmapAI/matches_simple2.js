const matches = [
  { ho: {a:1}, aw: {b:1} },
  { ho: {a:1}, aw: {c:1} },
  { ho: {a:1}, aw: {e:1} },
  { ho: {a:1}, aw: {d:1} },
  { ho: {a:1}, aw: {f:1} },
  { ho: {c:1}, aw: {b:1} },
  { ho: {d:1}, aw: {b:1} },
  { ho: {e:1}, aw: {b:1} },
  { ho: {f:1}, aw: {b:1} },
  { ho: {d:1}, aw: {a:1} },
  { ho: {d:1}, aw: {b:1} },
  { ho: {b:1}, aw: {c:1} },
  { ho: {c:1}, aw: {b:1} },
];

const matchstats = [
  { a:1 },
  { a:1 },
  { a:1 },
  { a:1 },
  { a:1 },
  { c:1 },
  { d:1 },
  { e:1 },
  { f:1 },
  { d:1 },
  { d:1 },
  { b:1 },
  { b:1 },//breaks the pattern
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
  { ho: {e:1}, aw: {c:1} }
));
console.log("ce ");
console.log(net.run(
  { ho: {c:1}, aw: {e:1} }
));
console.log("bc ");
console.log(net.run(
  { ho: {b:1}, aw: {c:1} }
));
console.log("cb ");
console.log(net.run(
  { ho: {c:1}, aw: {b:1} }
));
