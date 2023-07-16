export const getImagePath = (name: string, basePath: string): string => {
  const formatedName = name.toLowerCase().replace(/[ /?]/g, "-");
  console.log(formatedName);
  return `${basePath}${formatedName}.webp`;
};
