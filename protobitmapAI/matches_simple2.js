const matches = [
  { {a:1, home:1}, {b:1, home:0} },
  { {a:1, home:1}, {c:1, home:0} },
  { {a:1, home:1}, {d:1, home:0} },
  { {a:1, home:1}, {e:1, home:0} },
  { {a:1, home:1}, {f:1, home:0} },
  { {c:1, home:1}, {b:1, home:0} },
  { {d:1, home:1}, {b:1, home:0} },
  { {e:1, home:1}, {b:1, home:0} },
  { {f:1, home:1}, {b:1, home:0} },
  { {d:1, home:1}, {a:1, home:0} },
  { {d:1, home:1}, {b:1, home:0} },
  { {b:1, home:1}, {c:1, home:0} },
  { {c:1, home:1}, {b:1, home:0} },
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
  { {e:1, home:1}, {c:1, home:0} }
));
console.log("ce ");
console.log(net.run(
  { {c:1, home:1}, {e:1, home:0} }
));
console.log("bc ");
console.log(net.run(
  { {b:1, home:1}, {c:1, home:0} }
));
console.log("cb ");
console.log(net.run(
  { {c:1, home:1}, {b:1, home:0} }
));
