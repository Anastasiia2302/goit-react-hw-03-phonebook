import { Formik } from 'formik';
import * as Yup from 'yup';
import { customAlphabet } from 'nanoid';
import PropTypes from 'prop-types';
import { Forma, Wrap, Label, Input, ErrorMes, Btn } from 'PhoneBook.styled';

const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.string().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export default function Phonebook({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id' + nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma>
        <Wrap>
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="text" id="name" />
          <ErrorMes name="name" component="div"></ErrorMes>
        </Wrap>

        <Wrap>
          <Label htmlFor="number">Number</Label>
          <Input name="number" type="tel" id="number" />
          <ErrorMes name="number" component="div"></ErrorMes>
        </Wrap>
        <Btn type="submit">Add contact</Btn>
      </Forma>
    </Formik>
  );
}

Phonebook.propTypes = { onSubmit: PropTypes.func.isRequired };