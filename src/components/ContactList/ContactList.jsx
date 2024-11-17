import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export default function ContactList() {
  const { items, error } = useSelector(state => state.contacts);
  const { name } = useSelector(state => state.filters);

  const visibleContacts = useMemo(
    () =>
      items.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      ),
    [items, name]
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.length > 0 && !error ? (
        visibleContacts?.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))
      ) : (
        <li>
          <p className={css.emptyList}>List is empty</p>
        </li>
      )}
    </ul>
  );
}
