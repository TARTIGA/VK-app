import React, { FunctionComponent, useState, useEffect } from 'react';
import { Card, Cell, Switch, RichCell, Button } from '@vkontakte/vkui';
import Icon28DoneOutline from '@vkontakte/icons/dist/28/done_outline';
import '@vkontakte/vkui/dist/vkui.css';

//TODO:
type TCard = {
  title: string;
  date: string;
  status: string;
};

export const CardComponent = ({ title, date, status }: TCard) => {
  return (
    <Card size="l" mode="shadow" style={{ height: 96 }}>
      <RichCell
        multiline
        before={
          <Icon28DoneOutline style={{ marginRight: 10, color: 'green' }} />
        }
        text="Заявка на проверку КБМ"
        caption={date}
        after={status}
      >
        {title}
      </RichCell>
    </Card>
  );
};
