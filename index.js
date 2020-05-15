const server = require("./api/server.js");

const port = process.env.PORT || 5151;

server.listen(port, () => {
  console.log(
    `\n******* server up on port ${port} 
    but also server up console log tip of the day lets look into getting the reduce method down
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15
    ******\n`
  );
});
