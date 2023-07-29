import React, { useEffect } from 'react';
import {
  BtnDelete,
  ContactName,
  ContactNumber,
  List,
  ListItem,
  NotFound,
} from './PhoneBookList.styed';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterByName, selectFilteredContacts } from 'reducer/selectors';
import { deleteContact, fetchAll } from 'reducer/operations';
import Spinner from 'components/Spinner/Spinner';
import { ReactComponent as IconDelete } from '../../assets/svg/iconDelete.svg';

export const PhoneBookList = () => {
  const { contacts, isLoading, error } = useSelector(selectFilteredContacts);
  const filterTerm = useSelector(selectFilterByName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const delContactHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Spinner />}
      {error && error}
      {!(isLoading && error) && contacts.length > 0 && (
        <List>
          {contacts.map(({ contactName, phoneNamber, id }) => (
            <ListItem key={id}>
              <ContactName>{contactName}</ContactName>
              <ContactNumber>{phoneNamber}</ContactNumber>
              <BtnDelete size="small" onClick={() => delContactHandler(id)}>
                <IconDelete />
              </BtnDelete>
            </ListItem>
          ))}
        </List>
      )}
      {!contacts.length && filterTerm.length && (
        <NotFound>There is no matches</NotFound>
      )}
    </>
  );
};
