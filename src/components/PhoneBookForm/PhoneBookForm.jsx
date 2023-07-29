import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  StyledFormikField,
  FieldGroup,
  FormBook,
  Label,
  ErrorMessageText,
} from './PhoneBookForm.styled';
import { nameRegExp, phoneRegExp } from 'components/constants';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfContactExists } from 'utils/phoneBookUtils';
import { selectAllContacts } from 'reducer/selectors';
import { createNewContact } from 'reducer/operations';
import { nanoid } from 'nanoid';

const PhoneBookForm = () => {
  const { contacts, isLoading, error } = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const initialValues = {
    contactName: '',
    phoneNamber: '',
  };

  const validationSchema = Yup.object().shape({
    contactName: Yup.string()
      .matches(nameRegExp, 'Invalid name')
      .required('Name is required'),
    phoneNamber: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone number is required'),
  });

  const handleSubmit = ({ contactName, phoneNamber }, { resetForm }) => {
    const checkResult =
      contacts.length > 0 && checkIfContactExists(contacts, contactName);
    if (checkResult) {
      alert(`${contactName} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      contactName: contactName,
      phoneNamber: phoneNamber,
    };

    dispatch(createNewContact({ ...newContact }));
    resetForm({ values: initialValues });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormBook>
        <FieldGroup>
          <StyledFormikField
            type="text"
            id="phone_book__name"
            name="contactName"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
          />
          <ErrorMessage name="contactName" component={ErrorMessageText} />
          <Label htmlFor="phone_book__name">Name</Label>
        </FieldGroup>
        <FieldGroup>
          <StyledFormikField
            type="tel"
            id="phone_book__number"
            name="phoneNamber"
            placeholder="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoComplete="off"
          />
          <ErrorMessage name="phoneNamber" component={ErrorMessageText} />

          <Label htmlFor="phone_book__number">Number</Label>
        </FieldGroup>
        <Button type="submit">Add contact</Button>
      </FormBook>
    </Formik>
  );
};

export default PhoneBookForm;
