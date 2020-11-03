import { Dispatch } from 'redux';
import { START, SUCCESS, FAIL } from './../constants/index';
import { VK_API } from '../constants/api';
import bridge from '@vkontakte/vk-bridge';

export const initVK = () => {
  try {
    bridge.subscribe((e) => console.log(e));
    const data = bridge.send('VKWebAppInit', {});
    // Handling received data
    console.log('bridge data', data);
    if (bridge.supports('VKWebAppResizeWindow')) {
      bridge.send('VKWebAppResizeWindow', { width: 800, height: 1000 });
    }
  } catch (error) {
    console.log(['ERROR vkINIT', error]);
  }
};
