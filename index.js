const server = require("./server");

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.send("Welcome to base camp.");
});

server.listen(PORT, () => {
  console.log(`\n:::I'm working on port ${PORT}:::\n`);
});
