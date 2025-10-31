import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // TS only; remove if JS

const client = generateClient<Schema>(); // JS: leave off <Schema>

export default function AmplifyGate() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div style={{ padding: 24 }}>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={() => signOut()}>Sign out</button>

          <hr />

          <button
            onClick={async () => {
              const res = await client.models.Note.create({ content: 'Hello from Amplify' });
              console.log('created', res);
              const list = await client.models.Note.list();
              console.log('list', list.data);
              alert(`Notes: ${list.data.length}`);
            }}
          >
            Create & List Notes
          </button>
        </div>
      )}
    </Authenticator>
  );
}
