import { a, defineData } from '@aws-amplify/backend';

// Simple Note model (owner-scoped)
const schema = a.schema({
  Note: a
    .model({
      content: a.string().required(),
      owner: a.string(),
    })
    .authorization((allow) => [allow.owner(), allow.authenticated()]),
});

export const data = defineData({ schema });
