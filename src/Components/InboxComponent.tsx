import React from 'react';
import { Email } from '../Models/Email';
import InboxItem from './InboxItem';

type Props = {
  emails: Email[];
  selectedEmailChanged(email: Email): void;
};

const InboxComponent = ({ emails, selectedEmailChanged }: Props) => {
  const setEmail = (id: number) => {
    const emailById = emails.find((e) => e.id === id);
    if (emailById) {
      selectedEmailChanged(emailById);
    }
  };

  return (
    <>
      <div className='inboxContainer'>Inbox ({emails.length})</div>
      {emails.map((inboxItem) => {
        return (
          <div onClick={() => setEmail(inboxItem.id)}>
            <InboxItem key={inboxItem.id} inboxItem={inboxItem} />
          </div>
        );
      })}
    </>
  );
};

export default InboxComponent;
