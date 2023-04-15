import logger from "@/utils/logger";

describe("Logger", () => {
  test("Logger should exist", () => {
    expect(logger).toBeDefined();
  });

  test("Logger should log messages", () => {
    const spy = jest.spyOn(logger, "info");
    logger.info("Test message");
    expect(spy).toHaveBeenCalled();
  });

  test("Logger should log errors", () => {
    const spy = jest.spyOn(logger, "error");
    logger.error("Test error");
    expect(spy).toHaveBeenCalled();
  });
});
