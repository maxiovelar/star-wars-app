import { getImagePath } from "./helpers";

describe("getImagePath", () => {
  it("should return the correct image path when valid name and basePath are provided", () => {
    const name = "Luke Skywalker";
    const basePath = "/images/people/";
    const expectedPath = "/images/people/luke-skywalker.webp";

    expect(getImagePath(name, basePath)).toBe(expectedPath);
  });

  it("should throw an error if name is not provided", () => {
    const basePath = "/images/people/";

    expect(() => getImagePath("", basePath)).toThrow("Image name is required");
  });

  it("should throw an error if basePath is not provided", () => {
    const name = "Luke Skywalker";

    expect(() => getImagePath(name, "")).toThrow("Image basepath is required");
  });

  it("should format the name correctly by replacing spaces and special characters", () => {
    const name = "R2-D2?";
    const basePath = "/images/robots/";
    const expectedPath = "/images/robots/r2-d2-.webp";

    expect(getImagePath(name, basePath)).toBe(expectedPath);
  });
});