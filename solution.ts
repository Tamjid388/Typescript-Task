// Problem 1

type Value = string | boolean | number;
const formatValue = (value: Value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "boolean") {
    return !value;
  }
  if (typeof value === "number") {
    return value * 10;
  }
};

const getLength = (value: string | unknown[]) => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};
