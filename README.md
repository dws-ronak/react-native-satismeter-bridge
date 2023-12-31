# react-native-satismeter-bridge

This package providing native satismeter module from our npm package

## Installation

```sh
npm install react-native-satismeter-bridge
```

for ios -

```sh
npx pod-install

or

cd ios && pod install && cd ..
```

## Usage

```js
import * as React from 'react';
import { Text, View } from 'react-native';
import SatismeterBridge from 'react-native-satismeter-bridge';

export default function App() {
  const [status, setStatus] = React.useState('');
  const [message, setMessage] = React.useState('');

  SatismeterBridge.hook('007', 'K7eMIPEXyPMlG7fu', {}, (message: string) => {
    setStatus('native callback received');
    setMessage(message);
  });

  return (
    <View>
      <Text>status: {status}</Text>
      <Text>message: {message}</Text>
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
