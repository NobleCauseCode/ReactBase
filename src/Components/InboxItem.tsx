import { Email } from '../Models/Email';

type Props = {
  inboxItem: Email;
};

const InboxItem = ({ inboxItem }: Props) => {
  return (
    <div className='itemContainer'>
      <div>{inboxItem.subject}</div>
      <div>{`${inboxItem.body.slice(0, 10)}...`}</div>
    </div>
  );
};

export default InboxItem;
