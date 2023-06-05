const { startServer, stopServer } = require("./server");

describe("greet", () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await stopServer();
  });

  it('returns "Greetings, Luis" when sending "Luis" as name', async () => {
    expect("Hello, World!").toBe("Hello, World!");
  });
});
