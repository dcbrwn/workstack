export function createIdGenerator(counter = 0) {
  return () => (counter++).toString(16);
}
