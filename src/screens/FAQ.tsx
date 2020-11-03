import React, { useState, useEffect } from 'react';
import { View, Panel, PanelHeader, List, Cell } from '@vkontakte/vkui';
import type { TScreen } from '../types';

export const FAQ = ({ id, activePanel, headerLabel }: TScreen) => {
  useEffect(() => {
    console.log(['id', id]);
    console.log(['activePanel', activePanel]);
  }, []);
  const QUESTIONS_LIST = [
    { key: '0', label: 'Question 1?' },
    { key: '1', label: 'Question 2?' },
    { key: '2', label: 'Question 3?' },
  ];
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <PanelHeader>{headerLabel}</PanelHeader>
        <List>
          {QUESTIONS_LIST.map((item, idx) => (
            <Cell expandable>{item.label}</Cell>
          ))}
        </List>
      </Panel>
    </View>
  );
};
