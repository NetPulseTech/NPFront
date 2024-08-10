export const DynamicNumberArray = (totalLength: number, emptySpace: number) => {
  return Array.from(
    { length: totalLength },
    (_, index) => `${String(index + 1).padStart(emptySpace, "0")}`
  );
};


export const dynamicNumber = (totalLength: number) => {
  return Array.from({ length: totalLength }, (_, index) => index + 1);
 };