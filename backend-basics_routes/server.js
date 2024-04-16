import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log(request.url);

  if (request.url.startsWith("/api/fish")) {
    if (request.url === "/api/fish/1") {
      response.statusCode = 200;
      response.end("Shrimp");
    } else if (request.url === "/api/fish/2") {
      response.statusCode = 200;
      response.end("Anemonefish");
    } else {
      response.statusCode = 404;
      response.end("Not found");
    }
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});

export { server };
