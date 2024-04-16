import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.end("Hello, [your name]!");
});

export { server };
