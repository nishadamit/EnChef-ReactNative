/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Router from './src/navigation';

AppRegistry.registerComponent(appName, () => Router);
