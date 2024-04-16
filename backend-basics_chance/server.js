import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  const message = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(message);
});

export { server };
