import React, { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import {
  Epic,
  Tabbar,
  TabbarItem,
  ModalRoot,
  ModalPage,
  Div,
} from '@vkontakte/vkui';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28ArchiveOutline from '@vkontakte/icons/dist/28/archive_outline';
import Icon28MessagesOutline from '@vkontakte/icons/dist/28/messages_outline';
import '@vkontakte/vkui/dist/vkui.css';
import {
  VK_APP_NAME,
  LABEL_TAB_FORM,
  LABEL_TAB_ORDERS,
  LABEL_TAB_FAQ,
  LABEL_TAB_SPLASH
} from './constants';

import { Form, Orders, FAQ, SplashScreens } from './screens';
import { OrderState } from './reducers/orders';

import { initVK } from './actions/vk';
import { getUserInfo } from './actions/user';

//TODO:
type TPanelHeaderContent = {
  children?: string;
};

export const PanelHeaderContentComp: FunctionComponent<TPanelHeaderContent> = (
  props
) => <div>{props.children}</div>;

export const App = () => {
  const dispatch = useDispatch();
  const store = useStore();

  const [activeStory, setActiveStory] = useState<string>('form'); //splash for init
  const APP_NAME: string = VK_APP_NAME;
  const [activeModal, setactiveModal] = useState<string | null>(null);
  const [ordersBadgeCount, setordersBadgeCount] = useState<number | null>(3);
  const isFetching = useSelector(
    (state: OrderState) => state.orders.isFetching
  );

  useEffect(() => {
    console.log(['isFetching', isFetching]);
    initVK();
    getUserInfo()(dispatch, store.getState);
  });
//TODO: for INIT production
 const handleGoToFirstScreen = () => {
    setActiveStory('form')
  }

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage id="modalMain">...</ModalPage>
      {/* <ModalCard id="faq">...</ModalCard> */}
    </ModalRoot>
  );

  const TABS = [
    {
      story: 'form',
      label: LABEL_TAB_FORM,
      icon: <Icon28ArticleOutline />,
      component:
        <Form id={'form'} activePanel={'form'} headerLabel={LABEL_TAB_FORM}  handleGoTo={()=>{}} />
     ,
    },
    {
      story: 'orders',
      label: LABEL_TAB_ORDERS,
      icon: <Icon28ArchiveOutline />,
      component:
        <Orders
          id={'orders'}
          activePanel={'orders'}
          headerLabel={LABEL_TAB_ORDERS}
          handleGoTo={()=>{}}
        />
      ,
    },
    {
      story: 'faq',
      label: LABEL_TAB_FAQ,
      icon: <Icon28MessagesOutline />,
      component:
        <FAQ id={'faq'} activePanel={'faq'} headerLabel={LABEL_TAB_FAQ}  handleGoTo={()=>{}} />
     ,
    },
    // {
    //   story: 'splash',
    //   label: LABEL_TAB_SPLASH,
    //   icon: <Icon28MessagesOutline />,
    //   component: 
    //     <SplashScreens id={'splash'} activePanel={'splash'} headerLabel={LABEL_TAB_SPLASH}  />
    //  ,
    // },
  ];
  // if(activeStory == 'splash'){
  //   return <SplashScreens id={'splash'} activePanel={'splash'} headerLabel={LABEL_TAB_SPLASH} handleGoTo={handleGoToFirstScreen} />
  // }
  return (
    <Epic
      activeStory={activeStory}
      tabbar={
        <Tabbar shadow={false}>
          {TABS.map((item, idx) => {
            return (
              <TabbarItem
                key={idx.toString()}
                label={item.story === 'orders' ? ordersBadgeCount : null}
                onClick={() => setActiveStory(item.story)}
                selected={activeStory === item.story}
                data-story={item.story}
                text={item.label}
              >
                {item.icon}
              </TabbarItem>
            );
          })}
        </Tabbar>
      }
    >
      {TABS.map((item, idx) => {
        return (
          item.component
        );
      })}
    </Epic>
  );
};
