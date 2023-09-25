import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-satismeter-bridge' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const SatismeterBridge = NativeModules.SatismeterBridge
  ? NativeModules.SatismeterBridge
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default SatismeterBridge;
