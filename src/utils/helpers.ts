export const getImagePath = (name: string, basePath: string): string => {
  if (!name) {
    throw new Error("Image name is required");
  }
  if (!basePath) {
    throw new Error("Image basepath is required");
  }
  const formatedName = name.toLowerCase().replace(/[ /?]/g, "-");
  return `${basePath}${formatedName}.webp`;
};
