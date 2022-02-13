import React from 'react';
import { Email } from '../Models/Email';

type Props = {
  selectedEmail: Email;
};

const EmailView = ({ selectedEmail }: Props) => {
  return (
    <div>
      <div>Subject: {selectedEmail.subject}</div>
      <div>Body: {selectedEmail.body}</div>
    </div>
  );
};

export default EmailView;
