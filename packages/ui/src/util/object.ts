export function isObject(obj: any) {
  const isArray = Array.isArray(obj);

  return obj !== null && typeof obj === 'object' && !isArray;
}