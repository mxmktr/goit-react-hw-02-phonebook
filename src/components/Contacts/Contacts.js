import React from 'react';

export default function Contacts({ contacts, filter }) {
  return (
    <ul>
      {filterContacts(contacts, filter).map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
}

function filterContacts(contacts, filter) {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(
    ({ name }) => name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );
}
