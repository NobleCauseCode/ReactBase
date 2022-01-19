import { ReactElement } from 'react';

type Props = {
  name: string;
};

export default function MyChild({ name }: Props): ReactElement {
  return (
    <>
      <h1>Hello from My Child</h1>
      <h3>My Child sends back: {name}</h3>
    </>
  );
}
