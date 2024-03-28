export const isFormInvalid = (err: Object) => {
  if (Object.keys(err).length > 0) return true;
  return false;
}