# The AK Residential

The public property website and its owner-only Firebase admin editor live in
this folder. Firebase Hosting publishes only this folder, not the surrounding
Desktop, documents, or other projects.

## What to edit

- `firebase.js`: shared Firebase app, Authentication, Firestore, and Storage
  connection. It contains the public Web app configuration from Firebase
  Console.
- `firebase-config.js`: business contact details and the admin ID used at
  sign-in.
- `property-data.js`: the starter property listings shown before the Firebase
  database has been initialized.
- `index.html`: the public website.
- `admin.html`: the private admin ID/password sign-in and property editor.
- `firestore.rules` and `storage.rules`: server-enforced owner permissions.

Once Firebase is configured, open `/admin.html`, enter the admin login ID
`amanyadavadmin` and its private password, and select **Import starter listings**
once. The public site will then use the shared Firestore listings. Change
listing details, remove/add photos, and create/delete listings from the editor.

For local testing, do not open `admin.html` directly from File Explorer (a
`file:///` URL). Chrome blocks the Firebase JavaScript modules on file URLs.
From this folder, run `python -m http.server 8765` in a terminal and visit
`http://localhost:8765/admin.html`. The `localhost` hostname must be listed
under Firebase Authentication > Settings > Authorized domains.

## Firebase project setup and deployment

This site is connected to the Firebase project `akresidential`. The public web
app configuration is in `firebase.js`; Firebase Authentication, Firestore, and
Storage SDKs are initialized there and shared by both pages.

1. In the `akresidential` project at <https://console.firebase.google.com/>,
   confirm **Authentication > Sign-in method** has **Email/Password** enabled.
   Add your deployed website domain and `localhost` to
   **Authentication > Settings > Authorized domains**.
2. In **Authentication > Users**, add the admin account with the internal
   Firebase email `amanyadavadmin@ak-residential.invalid` and a private
   password (12 or more characters is recommended). This internal address is
   used by Firebase behind the scenes. At sign-in, use `amanyadavadmin` or
   this configured Firebase email. Never put the password in the website's
   source files or use the login ID as the password.
3. Confirm that Cloud Firestore and a Storage bucket exist in this project.
   Depending on current Firebase plan requirements, enabling Storage may ask
   you to attach a billing account.
4. In the Firebase Console, confirm the Web app belongs to the project ID
   `akresidential`; its configuration is already connected in `firebase.js`.
5. Keep the internal admin identity and `ownerLoginId` in sync. The internal
   Firebase email must also match the owner identity in both rule files. If you
   change the admin account, update the identity in `firebase-config.js`,
   `firestore.rules`, and `storage.rules` before deploying the rules.
6. Install Node.js, then install the Firebase CLI in a terminal:

   ```text
   npm install --global firebase-tools
   firebase login
   ```

7. From this folder, deploy the site and security rules:

   ```text
   firebase deploy --only hosting,firestore:rules,storage
   ```

8. Visit the Hosting URL, open `/admin.html`, sign in with `amanyadavadmin` and
   the password you set for its internal Firebase Authentication account, then
   import the starter listings. Confirm that another account cannot save or
   delete a listing.

## Admin sign-in troubleshooting

If sign-in shows `auth/invalid-credential`, open Firebase Console and verify
the selected project ID is `akresidential`. Under **Authentication > Users**,
confirm `amanyadavadmin@ak-residential.invalid` exists with the
**Email/Password** provider, then reset the password for that exact account.
The website sends this configured email to Firebase even when you enter
`amanyadavadmin` in the login field.

## Security notes

The Firebase web-app config is not a secret. The Firestore and Storage rules
are the authorization boundary: anyone may read public listings and listing
photos, but only the dedicated admin account can create, edit, or delete them.
Image uploads are restricted to image files smaller than 10 MB. Keep the
internal admin identity consistent in the config and both rule files.

Opening the HTML from disk or from a generic static host does not provision
Firebase. Use Firebase Hosting and complete the one-time setup above to enable
admin ID/password sign-in, persistent edits, and image uploads.
