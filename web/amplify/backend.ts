import { defineBackend } from '@aws-amplify/backend';
import { auth } from '@aws-amplify/backend';

defineBackend({
  auth: auth({
    loginWith: { email: true },      // email sign-in
    userAttributes: {
      // add/adjust later as needed
    }
  }),
});
