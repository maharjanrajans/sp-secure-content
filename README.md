# sp-secure-content

## Setup project

1. Clone the project repository

```
git clone https://github.com/maharjanrajans/sp-secure-content.git
```

2. Add .env file with following details

```
REACT_APP_HASH_KEY=test-secret
```

3. Install node_modules

```
npm install
```

# Generate encrypted file

1. Make changes as required to the featureFlags.json

2. Run the following command; this will generate the encrypted txt file

```
node app.js
```