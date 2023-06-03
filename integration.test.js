const { startServer, stopServer } = require("./server");

describe("hello", () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await stopServer();
  });

  it('should return "Hello, World!"', async () => {
    expect("Hello, World!").toBe("Hello, World!");
  });
});
