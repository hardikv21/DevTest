export function findOutlier(integers: number[]): number {
  const evenNumbers = integers.filter(num => {
    return num % 2 === 0;
  });
  const oddNumbers = integers.filter(num => {
    return num % 2 !== 0;
  });
  return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];
}