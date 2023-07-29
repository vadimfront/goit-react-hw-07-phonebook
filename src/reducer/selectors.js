export const selectFilterByName = state => state.filter.filterByName;
export const selectAllContacts = state => state.contacts;

export const selectFilteredContacts = state => {
  const filter = selectFilterByName(state);
  const { contacts, isLoading, error } = selectAllContacts(state);

  if (!filter.trim().length || !contacts.length)
    return { contacts, isLoading, error };

  const filterByName = filter.trim().toLowerCase();
  const filtered = contacts.filter(contact =>
    contact.contactName.toLowerCase().includes(filterByName)
  );

  const newObj = {
    contacts: filtered.length ? filtered : [],
    isLoading: isLoading,
    error: error,
  };

  return newObj;
};
