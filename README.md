# SNS names API using Express Wrapper

This is a simple Express.js wrapper for the GeniiData API. This wrapper provides two endpoints that allow users to query ORDINALS domain information by name and to fetch specific fields for a given domain.

Credits: @fservin

Give a follow [Fservin.btc](https://twitter.com/fservin) and show me on Twitter if you run your own!
Let's build the decentralized internet together!

## Setup

### Prerequisites

- Node.js
- Express.js

### Installation

1. Clone this repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd <directory-name>
```

3. Install dependencies:

```bash
npm install
```

## Usage

### Start the server:

```bash
node <entry-file-name>
```

Replace `<entry-file-name>` with the name of the file that uses this module, if it's not provided in the provided code.

### API Endpoints:

1. **Get Domain Information**

- **URL**: `/domain/:name`
- **Method**: `GET`
- **URL Params**: `name=[string]` - The name of the domain you want to retrieve information about.

2. **Get Specific Field for Domain**

- **URL**: `/domain/:name/:field`
- **Method**: `GET`
- **URL Params**:
  - `name=[string]` - The name of the domain.
  - `field=[string]` - The specific field you want to retrieve from the domain's information.

### Example:

To get information about the domain "example":

```bash
curl http://localhost:3000/domain/example
```

To get the "registrant" field for the domain "example":

```bash
curl http://localhost:3000/domain/example/registrant
```

## Important Notes

- The `cors` middleware is commented out in the provided code. If you need CORS support, you can uncomment and configure it as needed.
- Ensure you have proper permissions and rights to use the `api-key` provided in the code. Exposing the API key in public code is not recommended for production use. Consider using environment variables or other secure methods to store and access your API key.

## Contributing

Feel free to raise an issue or submit a pull request if you have any enhancements or fixes.

## License

This project is under the MIT License. See [LICENSE](LICENSE) file for more details.
