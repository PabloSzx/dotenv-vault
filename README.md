From the same people that pioneered [dotenv](https://github.com/motdotla/dotenv).

# dotenv-vault

<img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/dotenv-vault.png" alt="dotenv-vault" align="right" />

Dotenv Vault securely syncs secrets and app configuration across your machines, environments, and team members. Stop sharing .env files over insecure channels like Slack and email.

Learn more at [dotenv.org](https://dotenv.org).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dotenv-vault.svg)](https://npmjs.org/package/dotenv-vault)
[![Downloads/week](https://img.shields.io/npm/dw/dotenv-vault.svg)](https://npmjs.org/package/dotenv-vault)
[![License](https://img.shields.io/npm/l/dotenv-vault.svg)](https://github.com/dotenv-org/dotenv-vault/blob/master/package.json)

## Works With

Dotenv Vault works with the following integration partners and more.

<table>
  <tbody>
    <tr>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/github.png" alt="dotenv-vault + github", width="30" />
        GitHub
      </td>
      <td align="left" valign="middle">
        <a href="https://www.dotenv.org/integrations/heroku">
          <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/heroku.png" alt="dotenv-vault + Heroku", width="30" />
          Heroku
        </a>
      </td>
      <td align="left" valign="middle">
        <a href="https://www.dotenv.org/integrations/slack">
          <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/slack.png" alt="dotenv-vault + Slack", width="30" />
          Slack
        </a>
      </td>
    </tr>
    <tr>
      <td align="left" valign="middle">
        <a href="https://www.dotenv.org/integrations/vercel">
          <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/vercel.png" alt="dotenv-vault + Vercel", width="30" />
          Vercel
        </a>
      </td>
      <td align="left" valign="middle">
        <a href="https://www.dotenv.org/integrations/netlify">
          <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/netlify.png" alt="dotenv-vault + Netlify", width="30" />
          Netlify
        </a>
      </td>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/aws.png" alt="dotenv-vault + AWS Secrets", width="30" />
        AWS Secrets
      </td>
    </tr>
    <tr>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/aws.png" alt="dotenv-vault + AWS Parameter Store", width="30" />
        AWS Parameter Store
      </td>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/microsoft.png" alt="dotenv-vault + Azure Key Vault", width="30" />
        Azure Key Vault
      </td>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/docker.png" alt="dotenv-vault + Docker Compose", width="30" />
        Docker Compose
      </td>
    </tr>
    <tr>
      <td align="left" valign="middle">
        <a href="https://www.dotenv.org/integrations/docker">
          <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/docker.png" alt="dotenv-vault + Docker", width="30" />
          Docker
        </a>
      </td>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/digitalocean.png" alt="dotenv-vault + Digital Ocean", width="30" />
        Digital Ocean
      </td>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/google.png" alt="dotenv-vault + Google Cloud", width="30" />
        Google Cloud
      </td>
    </tr>
    <tr>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/circleci.png" alt="dotenv-vault + CircleCI", width="30" />
        CircleCI
      </td>
      <td align="left" valign="middle">
        <img src="https://raw.githubusercontent.com/dotenv-org/dotenv-vault/master/partners/serverless.png" alt="dotenv-vault + Serverless", width="30" />
        Serverless
      </td>
      <td align="left" valign="middle">
      </td>
    </tr>
  </tbody>
</table>

## Usage

Usage is easy! Run the command:

```bash
$ npx dotenv-vault new
```

Follow those instructions and then run:

```bash
$ npx dotenv-vault push
```

And if you need to pull changes that another teammate made, run:

```bash
$ npx dotenv-vault pull
```

That's it!

Read our [security statement](https://www.dotenv.org/security).

💡 **ProTip!** Append @latest to dotenv-vault to always run the latest version. For example: `npx dotenv-vault@latest push`. (otherwise, npx caches the first version it encounters on your machine)

## How It Works

Dotenv Vault holds your secrets in a secure and sophisticated way. [Learn more](https://dotenv.org/vault#how-it-works)

* **Step 1** You run <code>npx dotenv-vault push</code>. The request is started.
* **Step 2** The .env file is encrypted and sent securely over SSL to Dotenv's in-memory servers.
* **Step 3** This encrypted payload is decrypted and briefly held in memory to complete the next steps. Afterward, the memory is flushed. Rest assured the decrypted version is never peristed to Dotenv systems.
* **Step 4** The .env file is parsed line by line - in memory. Note: There are some differences between dotenv parsers across various languages and frameworks. So far Dotenv Vault handles these 100%, and we continue to add test cases to cover all edge cases.
* **Step 5** Each key/value pair (and any comments) are extracted - in memory.
* **Step 6** The secret is divided into its separate key and value. This is by design. They will be stored in separate databases for added security. This way if an attacker somehow gained access to one database they would not be able to make sense of the data - having only half of the puzzle.
* **Step 7** The <code>KEY</code> is encrypted. The <code>VALUE</code> is encrypted. They are encrypted with different master encryption keys. This way if an attacker somehow gained access to the <code>VALUE</code> decryption key they would find the data useless. They would not know if the secret belonged to Twilio or to AWS. **Encryption uses the AES-GCM algorithm.** It is:
  * well-studied
  * NIST recommended
  * an IETF standard
  * fast thanks to a dedicated instruction set
  * Additionally, all master encryption keys are rotated on an unpublished schedule, further adding to the level of security.
* **Step 8** The encrypted <code>VALUE</code> is sent to Dotenv Vault for safe storage. A token is returned as an identifier. The token is used in the next step for mapping the <code>KEY</code> to the <code>VALUE</code> for later secure-read operations. **Multiple security measures go into the Vault.** They include but are not limited to: 
  * Separate datastore from the application database
  * Not accessible via the internet and all external connections are prevented
  * Encrypted clients are required and these clients have to go through the application - which has its own additional layers of encryption
  * There are stricter TLS requirements for connecting to the Vault. TLS 1.0 cannot be used to connect.
  * The secrets stored in the Vault are not just encrypted at the datastore level. They are also encrypted at each datastore entry as you saw in the prior step(s).
* **Step 9** Lastly, the encrypted <code>KEY</code> and token (representing the encrypted <code>VALUE</code>) are placed in an envelope and stored together in the application database.
* **Step 10** success message is returned to the user.

[Learn more](https://dotenv.org/vault#how-it-works)

## Commands

### `dotenv-vault new`

Create your project at Dotenv Vault.

Example:

```bash
$ dotenv-vault new
```

### `dotenv-vault push [FILENAME] [ENVIRONMENT]`

Push your `.env` file securely to Dotenv Vault

Example:

```bash
$ dotenv-vault push
# pushes local .env to remote development
```

#### Arguments

##### [FILENAME]

Set input filename. Defaults to .env.

Example:

```bash
$ dotenv-vault push .env.development
# pushes .env.development to remote development environment
```

##### [ENVIRONMENT]

Example:

```bash
$ dotenv-vault push .env.production production
# pushes local .env.production to remote production environment
```

#### Options

##### --dotenvMe

Directly pass your `DOTENV_ME` value to the command line, instead of reading from a `.env.me` file.

Examples:

```bash
$ dotenv-vault push .env.development --dotenvMe=me_1234
# pushes local .env.development to remote development
```

### `dotenv-vault pull [ENVIRONMENT] [FILENAME]`

Pulls your development|staging|ci|production environment(s) to your machine.

Example:

```bash
$ dotenv-vault pull
# pulls remote development envs to .env
```

#### Arguments

##### [ENVIRONMENT]

Pull .env.ci, .env.staging, and .env.production

Example:

```bash
$ dotenv-vault pull staging
# pulls remote staging envs to .env.staging
```

##### [FILENAME]

Set output filename. Defaults to .env for development and .env.{environment} for other environments. Exception: When using <code>DOTENV_IT</code> tokens it defaults to `.env` for all environments.

Example:

```bash
$ dotenv-vault pull production .env
# pulls remote production envs to .env
```

#### Options

##### --dotenvMe

Directly pass your `DOTENV_ME` value to the command line, instead of reading from a `.env.me` file.

Examples:

```bash
$ dotenv-vault pull staging --dotenvMe=me_1234
# pulls remote staging envs to .env.staging

$ dotenv-vault pull production .env --dotenvMe=me_1234
# pulls remote production envs to .env
```

### `dotenv-vault help [COMMAND]`

Display help for dotenv-vault commands.

```
USAGE
  $ dotenv-vault help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

Example:

```
$ dotenv-vault help push
```



## Development

```
NODE_TLS_REJECT_UNAUTHORIZED=0 DOTENV_API_URL=https://vault.dotenv.development ./bin/dev
```

### Testing

```
npm test
```

### Publishing

Only for those with permission.

```
npm version patch
npm publish
```

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## CHANGELOG

See [CHANGELOG.md](CHANGELOG.md)
