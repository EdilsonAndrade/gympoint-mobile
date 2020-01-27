import Reactotron, {asyncStorage} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(asyncStorage())
    .use(reactotronRedux())
    .connect({host: '192.168.15.101'});

  console.tron = tron;

  tron.clear();
}
