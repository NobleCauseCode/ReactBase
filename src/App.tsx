import './App.css';
import { useState } from 'react';
import { Email } from './Models/Email';
import InboxItem from './Components/InboxItem';
import EmailView from './Components/EmailView';
import InboxComponent from './Components/InboxComponent';

const Emails = [
  {
    id: 1,
    subject: 'Subject 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    body: 'Nam id nulla in mi condimentum viverra a eget felis.',
    subject: 'Subject 2',
  },
  {
    id: 3,
    body: 'Quisque gravida vulputate viverra.',
    subject: 'Subject 3',
  },
  {
    id: 4,
    body: 'Nulla dignissim, massa in pharetra laoreet, ex justo imperdiet ante, a in',
    subject: 'Subject 4',
  },
  {
    id: 5,
    subject: 'Subject 5',
    body: 'interdum et odio non, varius cursus neque. Morbi arcu ligula, blandit',
  },
] as Email[];

function App() {
  const [emails, setEmails] = useState<Email[]>(Emails);
  const [selectedEmail, setSelectedEmail] = useState<Email>({} as Email);

  return (
    <div className='container'>
      <div className='leftContainer'>
        <InboxComponent emails={emails} selectedEmailChanged={(email) => setSelectedEmail(email)} />
      </div>
      <div className='rightContainer'>
        <div className='emailContainer'>Email View</div>
        <EmailView selectedEmail={selectedEmail} />
      </div>
    </div>
  );
}

export default App;
