export const checkIfContactExists = (contacts, newContactName) => {
  if (!contacts.length) return false;
  const isContactExist = contacts.some(
    ({ contactName }) =>
      contactName.toLowerCase() === newContactName.toLowerCase()
  );
  return isContactExist;
};
