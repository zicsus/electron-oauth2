# oauth2-for-electron

## What's this

A super lightweight and simple OAuth2 utility for Electron. Only Authorization Code Grant supported.

## Usage

#### Install

`npm install oauth2-for-electron`

#### Uninstall

`npm uninstall oauth2-for-electron`

#### Config

```js

const config = {
	auth_url: '', // URL to authorize endpoint. 
	token_url: '', // URL to token endpoint.
	client_id: '',
	client_secret: '',
	redirect_uri: '',
	scope: [], // All the required scopes in a array.
	scope_deliminator: '', // (OPTIONAL) This is use for joininig the scopes provided in scope array. default value ' '. 
	state: '' // (OPTIONAL) An unique value used by the client to maintain state between the request and callback.
};
```

#### Access Token

```js

const OAuth2 = require('oauth2-for-electron');

const window = new BrowserWindow({
  width: 600,
  height: 800,
  webPreferences: {
    nodeIntegration: false // Recommend disabling for security.
    contextIsolation: true // Recommend enabling for security.
    // see https://github.com/electron/electron/blob/master/docs/tutorial/security.md
  },
})

const provider = new OAuth2(config);
provider.begin(win, (err, response) => 
{
	if(err)
	{
		// Something bad happened.
	}

	// Access token should be present in response.
});
```

#### Refresh Token

```js

const OAuth2 = require('oauth2-for-electron');

const provider = new OAuth2(config);
provider.refreshToken(refresh_token)
.then(response => 
{
	// New access token.
})
.catch(err => 
{
	// Something bad happened.
});
```
