import React from 'react';
import { Filter, Field } from './PhoneBookFilter.styled';
import { FieldGroup, Label } from '../PhoneBookForm/PhoneBookForm.styled';
import { useDispatch } from 'react-redux';
import { filterContactsByName } from 'reducer/filterSlice';

export const PhoneBookFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContactsByName(value));
  };

  return (
    <Filter>
      <FieldGroup>
        <Field
          type="text"
          id="filter"
          placeholder="Find contacts by name"
          onChange={handleFilter}
          autoComplete="off"
        />
        <Label htmlFor="filter">Find contacts by name</Label>
      </FieldGroup>
    </Filter>
  );
};
