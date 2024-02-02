## How to use

### Clone or download the repository.
### Go to the directory.
### Create a .env file on the root directory.
### Then copy the following environment variables to .env file.
```
VITE_REACT_APP_API_KEY={Your web app's Firebase apiKey}
VITE_REACT_APP_AUTH_DOMAIN={Your web app's Firebase authDomain}
VITE_REACT_APP_PROJECT_ID={Your web app's Firebase projectId}
VITE_REACT_APP_STORAGE_BUCKET={Your web app's Firebase storageBucket}
VITE_REACT_APP_MESSAGING_SENDER_ID={Your web app's Firebase messagingSenderId}
VITE_REACT_APP_APP_ID={Your web app's Firebase appId}
```
### Copy the firebase config information from your database on the google firebase and place it after "=".
## Example
```
VITE_REACT_APP_API_KEY=12345678910
VITE_REACT_APP_AUTH_DOMAIN=ABCDEFG
```
### Open the terminal or command prompt and type the following:
```
$ npm install
$ npm start
```
