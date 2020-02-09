export const ifNullSetValue = (itemToCheck, ValueToSet) => {
  if (!itemToCheck) {
    return (itemToCheck = ValueToSet);
  }
};
