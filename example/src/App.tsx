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
