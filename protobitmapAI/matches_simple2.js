const matches = [
  { a:1, b:1, home: "a" },
  { a:1, c:1, home: "a"  },
  { a:1, d:1, home: "a"  },
  { a:1, e:1, home: "a"  },
  { a:1, f:1, home: "a"  },
  { c:1, b:1, home: "c"  },
  { d:1, b:1, home: "d"  },
  { e:1, b:1, home: "e"  },
  { f:1, b:1, home: "f"  },
  { d:1, a:1, home: "d"  },
  { d:1, b:1, home: "d"  },
  { b:1, c:1, home: "b"  },
  { c:1, b:1, home: "c"  },
];

const matchstats = [
  { a:1, hg:1, ag: 0 },
  { a:1, hg:1, ag: 0 },
  { a:1, hg:1, ag: 0 },
  { a:1, hg:4, ag: 2 },
  { a:1, hg:2, ag: 1 },
  { c:1, hg:1, ag: 0 },
  { d:1, hg:1, ag: 0 },
  { e:1, hg:3, ag: 1 },
  { f:1, hg:1, ag: 0 },
  { d:1, hg:2, ag: 1 },
  { d:1, hg:1, ag: 0 },
  { b:1, hg:2, ag: 0 },
  { b:1, hg:1, ag: 2 },//breaks the pattern
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
  { e:1, c:1, home: "e"  }
));
console.log("ce ");
console.log(net.run(
  { c:1, e:1, home: "c"  }
));
console.log("bc ");
console.log(net.run(
  { b:1, c:1, home: "b"  }
));
console.log("cb ");
console.log(net.run(
  { c:1, b:1, home: "c"  }
));
