import PropTypes from 'prop-types';
import { List, Item, Name, BtnDel } from 'PhoneBook.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={number}>
            <Name>{name}</Name>
            <Name>{number}</Name>
            <BtnDel type="button" onClick={() => deleteContact(id)}>
              Delete
            </BtnDel>
          </Item>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};