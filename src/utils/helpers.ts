export const getImagePath = (name: string, basePath: string): string => {
  const formatedName = name.toLowerCase().replace(/[ /?]/g, "-");
  return `${basePath}${formatedName}.webp`;
};
