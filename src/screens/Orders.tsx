import React, { useState, useEffect } from 'react';
import {
  View,
  Panel,
  PanelHeader,
  PullToRefresh,
  Div,
  CardGrid,
  Group,
} from '@vkontakte/vkui';
import type { TScreen } from '../types';
import { CardComponent } from '../components/CardComponent';

export const Orders = ({ id, activePanel, headerLabel }: TScreen) => {
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    console.log(['id', id]);
    console.log(['activePanel', activePanel]);
  }, []);
  const handlerRefresh = () => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  };
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <PanelHeader>{headerLabel}</PanelHeader>
        <PullToRefresh onRefresh={handlerRefresh} isFetching={isFetching}>
          <Group separator="hide">
            <CardGrid>
              <CardComponent
                title={'Заявка №228'}
                date={'11.11.2020'}
                status={'Выполнено'}
              />
              <CardComponent
                title={'Заявка №228'}
                date={'11.11.2020'}
                status={'Выполнено'}
              />

              <CardComponent
                title={'Заявка №228'}
                date={'11.11.2020'}
                status={'Выполнено'}
              />
            </CardGrid>
          </Group>
        </PullToRefresh>
      </Panel>
    </View>
  );
};
