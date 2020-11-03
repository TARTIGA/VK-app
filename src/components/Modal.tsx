import React, { FunctionComponent, useState, useEffect } from 'react';
import {
  PanelHeaderButton,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import '@vkontakte/vkui/dist/vkui.css';

export const Modal = ({}) => {
  return null;
  //   (
  //     <ModalRoot activeModal={activeModal} onClose={() => setactiveModal(null)}>
  //       <ModalPage
  //         id="modalPage"
  //         onClose={() => setactiveModal(null)}
  //         header={
  //           <ModalPageHeader
  //             left={
  //               <PanelHeaderButton onClick={() => setactiveModal(null)}>
  //                 <Icon24Done />
  //               </PanelHeaderButton>
  //             }
  //             right={
  //               <PanelHeaderButton onClick={() => setactiveModal(null)}>
  //                 <Icon24Done />
  //               </PanelHeaderButton>
  //             }
  //           >
  //             Информация о пользователе
  //           </ModalPageHeader>
  //         }
  //       >
  //         {/* <List>
  //           <Cell>
  //             <InfoRow header="Дата рождения">30 января 1993</InfoRow>
  //           </Cell>
  //           <Cell>
  //             <InfoRow header="Родной город">Ереван</InfoRow>
  //           </Cell>
  //           <Cell>
  //             <InfoRow header="Место работы">Команда ВКонтакте</InfoRow>
  //           </Cell>
  //         </List> */}
  //       </ModalPage>
  //     </ModalRoot>
  //   );
};
