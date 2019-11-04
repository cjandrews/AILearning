// rawData = ' # ';

function toArray(string) { // normalize
    if (string.length !== 7 * 7) throw new Error('string in wrong size');
    return string.split('').map(toNumber);
}
function toNumber(character) {
    return character === '#' ? 1 : 0;
}

const zero = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#######'
);
const one = toArray(
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   '
);
const two = toArray(
    '#######' +
    '#     #' +
    '      #' +
    '     # ' +
    '   #   ' +
    ' #     ' +
    '#######'
);
  const three = toArray(
    '#######' +
    '      #' +
    '      #' +
    ' ######' +
    '      #' +
    '      #' +
    '#######'
);
const four = toArray(
    '#     #' +
    '#     #' +
    '#     #' +
    '#######' +
    '      #' +
    '      #' +
    '      #'
);
const five = toArray(
    '#######' +
    '#      ' +
    '#      ' +
    '#######' +
    '      #' +
    '      #' +
    '#######'
);
const six = toArray(
    '      #' +
    '    #  ' +
    '  #    ' +
    ' ######' +
    '#     #' +
    '#     #' +
    '#######'
);
const seven = toArray(
    '#######' +
    '     # ' +
    '    #  ' +
    '   #   ' +
    '  #    ' +
    ' #     ' +
    '#      '
);
const eight = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#######' +
    '#     #' +
    '#     #' +
    '#######'
);
const nine = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#######' +
    '      #' +
    '      #' +
    '      #'
);

const net = new brain.NeuralNetwork();
const trainingData = [
    { input: zero, output: { zero: 1 } },
    { input: one, output: { one: 1 } },
    { input: two, output: { two: 1 } },
    { input: three, output: { three: 1 } },
    { input: four, output: { four: 1 } },
    { input: five, output: { five: 1 } },
    { input: six, output: { six: 1 } },
    { input: seven, output: { seven: 1 } },
    { input: eight, output: { eight: 1 } },
    { input: nine, output: { nine: 1 } }
];

net.train(trainingData);

// const result = net.run(toArray(
//     '#######' +
//     '#     #' +
//     '#     #' +
//     '#######' +
//     '#     #' +
//     '#     #' +
//     '#######'
// ));

console.log(net.run(toArray(
    '# ## ##' +
    '#     #' +
    '#     #' +
    '##  ###' +
    '      #' +
    '      #' +
    '#   ###'
)));

const result = brain.likely(toArray(
    '# ## ##' +
    '#     #' +
    '#     #' +
    '##  ###' +
    '      #' +
    '      #' +
    '#   ###'
), net);

console.log(result);
console.log('.');

//name, goals, shots, shots on goal, possession, pass accuracy
//const scores = [
///    ['Newcastle', 3, 24, 16, 0.6, 0.83, 'Watford', 2, 18, 9, 0.4, 0.9],
//    ['Newcastle', 3, 24, 16, 0.6, 0.83, 'Watford', 2, 18, 9, 0.4, 0.9],
//    ['Newcastle', 3, 24, 16, 0.6, 0.83, 'Watford', 2, 18, 9, 0.4, 0.9],
//    ['Newcastle', 3, 24, 16, 0.6, 0.83, 'Watford', 2, 18, 9, 0.4, 0.9],
//   ['Newcastle', 3, 24, 16, 0.6, 0.83, 'Watford', 2, 18, 9, 0.4, 0.9],
//]



// input: { red, green, blue }
// ouput: { light, neutral, dark }

// const colors = [
//     { green: 0.2, blue: 0.4 },
//     { green: 0.4, blue: 0.6 },
//     { red: 0.2, green: 0.8, blue: 0.8 },
//     { green: 1, blue: 1 },
//     { red: 0.8, green: 1, blue: 1 },
//     { red: 1, green: 1, blue: 1 },
//     { red: 1, green: 0.8, blue: 0.8 },
//     { red: 1, green: 0.6, blue: 0.6 },
//     { red: 1, green: 0.4, blue: 0.4 },
//     { red: 1, green: 0.31, blue: 0.31 },
//     { red: 0.8 },
//     { red: 0.6, green: 0.2, blue: 0.2 }
// ];


const matches = [
    {a:1, b:1},
    {c:1, b:1},
    {a:1, d:1},
    {d:1, b:1},
    {e:1, a:1},
    {a:1, c:1},
    {b:1, e:1},
    {d:1, c:1},
];

const matchstats = [
    { g1: 0.3, s1: 0.2, g2: 0.2, s2:0.7 },
    { g1: 0.2, s1: 0.9, g2: 0.1, s2:0.2 },
    { g1: 0.1, s1: 0.2, g2: 0.4, s2:0.2 },
    { g1: 0.0, s1: 0.7, g2: 0.0, s2:0.7 },
    { g1: 0.1, s1: 0.8, g2: 0.4, s2:0.3 },
    { g1: 0.0, s1: 0.5, g2: 0.1, s2:0.9 },
    { g1: 0.2, s1: 0.5, g2: 0.1, s2:0.9 },
    { g1: 0.2, s1: 0.5, g2: 0.7, s2:0.9 },
];

const trainingData = [];

for (let i = 0; i < matches.length; i++) {
    trainingData.push({
        input: matches[i],
        output: matchstats[i]
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [5,5] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({
    c: 1, d:1
}));
