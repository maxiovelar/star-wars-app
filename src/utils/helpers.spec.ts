import { getImagePath } from "./helpers";

describe("getImagePath", () => {
  it("should return the image path with the extension", () => {
    expect(getImagePath("Image Name/Test", "/base/path/")).toBe(
      "/base/path/image-name-test.webp"
    );
  });

  it("should throw an error if the image name is empty", () => {
    expect(() => getImagePath("", "/base/path/")).toThrow();
  });

  it("should throw an error if the image path is empty", () => {
    expect(() => getImagePath("image name", "")).toThrow();
  });
});
