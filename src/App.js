import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Root,
  CellButton,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  Cell,
  Search,
  Avatar,
  PanelHeaderBack,
  Spinner,
  PanelHeaderButton,
  PanelHeaderEdit,
  PanelHeaderContent,
  PanelHeaderContext,
  List,
  ScreenSpinner,
  Snackbar,
  Alert,
  Div,
  ModalRoot,
  ModalPage,
  ModalCard,
  ModalPageHeader,
  InfoRow,
} from '@vkontakte/vkui';

import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28MusicOutline from '@vkontakte/icons/dist/28/music_outline';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon28DownloadOutline from '@vkontakte/icons/dist/28/download_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28BlockOutline from '@vkontakte/icons/dist/28/block_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import '@vkontakte/vkui/dist/vkui.css';

const blueBackground = {
  backgroundColor: 'var(--accent)',
};

const App = () => {
  const [activeView, setactiveView] = useState('view1');
  const [activePanel, setactivePanel] = useState('panel1');
  const [headerContentActive, setHeaderContentActive] = useState(false);
  const [popup, setPopup] = useState(null);
  const [snackbar, setSnackbar] = useState(null);
  const [alert, setAlert] = useState(null);
  const [actionLog, setactionLog] = useState([]);
  const [activeModal, setactiveModal] = useState(null);

  const toggleHeader = () => {
    setHeaderContentActive(!headerContentActive);
  };
  const getData = () => {
    setPopup(<ScreenSpinner />);
    setTimeout(() => setPopup(null), 2000);
  };
  const getNotify = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        layout="vertical"
        onClose={() => setSnackbar(null)}
        before={
          <Avatar size={24} style={blueBackground}>
            <Icon24Done fill="#fff" width={14} height={14} />
          </Avatar>
        }
      >
        Уведомления о подкастах включены
      </Snackbar>
    );
  };
  const addActionLogItem = (value) => {
    console.log(['addActionLogItem', value]);
    setactionLog([...actionLog, value]);
  };
  const getAlert = () => {
    setAlert(
      <Alert
        actions={[
          {
            title: 'Отмена',
            autoclose: true,
            mode: 'cancel',
            action: () =>
              addActionLogItem('Право на модерацию контента ОТМЕНА.'),
          },
          {
            title: 'Добавить',
            autoclose: true,
            action: () =>
              addActionLogItem('Право на модерацию контента добавлено.'),
          },
        ]}
        onClose={() => setAlert(null)}
      >
        <h2>Подтвердите действие</h2>
        <p>Добавить пользователю право на модерацию контента.</p>
      </Alert>
    );
  };
  const modal = (
    <ModalRoot activeModal={activeModal} onClose={() => setactiveModal(null)}>
      <ModalPage
        id="modalPage"
        onClose={() => setactiveModal(null)}
        header={
          <ModalPageHeader
            left={
              <PanelHeaderButton onClick={() => setactiveModal(null)}>
                <Icon24Done />
              </PanelHeaderButton>
            }
            right={
              <PanelHeaderButton onClick={() => setactiveModal(null)}>
                <Icon24Done />
              </PanelHeaderButton>
            }
          >
            Информация о пользователе
          </ModalPageHeader>
        }
        dynamicContentHeight
      >
        <List>
          <Cell>
            <InfoRow header="Дата рождения">30 января 1993</InfoRow>
          </Cell>
          <Cell>
            <InfoRow header="Родной город">Ереван</InfoRow>
          </Cell>
          <Cell>
            <InfoRow header="Место работы">Команда ВКонтакте</InfoRow>
          </Cell>
        </List>
      </ModalPage>

      <ModalCard
        id="faq"
        onClose={() => setactiveModal(null)}
        dynamicContentHeight
      >
        FAQ
      </ModalCard>
    </ModalRoot>
  );

  return (
    <Root activeView={activeView}>
      <View
        activePanel={activePanel}
        id="view1"
        popout={(popup, alert)}
        modal={modal}
      >
        <Panel id="panel1">
          <PanelHeader
            left={
              <PanelHeaderButton>
                <Icon28UsersOutline />
              </PanelHeaderButton>
            }
            right={<PanelHeaderEdit />}
          >
            <PanelHeaderContent
              aside={
                <Icon16Dropdown
                  style={{
                    transform: `rotate(${
                      headerContentActive ? '180deg' : '0'
                    })`,
                  }}
                />
              }
              onClick={() => toggleHeader()}
            >
              REACT APP VK
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext
            opened={headerContentActive}
            onClose={toggleHeader}
          >
            <List>
              <Cell before={<Icon28UsersOutline />} data-mode="all">
                Communities
              </Cell>
              <Cell before={<Icon28SettingsOutline />} data-mode="managed">
                Managed Communities
              </Cell>
            </List>
          </PanelHeaderContext>
          <Group>
            <Cell
              expandable
              before={<Icon28UserOutline />}
              onClick={() => setactivePanel('panel2')}
            >
              Friends
            </Cell>
            <Cell
              expandable
              before={<Icon28UsersOutline />}
              onClick={() => setactivePanel('panel2')}
            >
              Communities
            </Cell>
            <Cell
              expandable
              before={<Icon28MusicOutline />}
              onClick={() => setactivePanel('panel2')}
            >
              Music
            </Cell>
            <Cell
              expandable
              before={<Icon28DownloadOutline />}
              onClick={() => getData()}
            >
              Start Spinner
            </Cell>
            <Cell
              expandable
              before={<Icon28Notifications />}
              onClick={() => getNotify()}
            >
              NotifySnack
            </Cell>
            <Cell
              expandable
              before={<Icon28BlockOutline style={{ color: 'red' }} />}
              onClick={() => getAlert()}
            >
              Alert
            </Cell>
            <Cell
              expandable
              before={<Icon24CommentOutline style={{ color: 'blue' }} />}
              onClick={() => setactiveModal('faq')}
            >
              Modal FAQ
            </Cell>
            <Cell
              expandable
              before={<Icon24CommentOutline style={{ color: 'green' }} />}
              onClick={() => setactiveModal('modalPage')}
            >
              Modal Page
            </Cell>
          </Group>
          {snackbar}
          {actionLog.map((value, i) => (
            <Div key={i}>{value}</Div>
          ))}
        </Panel>
        <Panel id="panel2">
          <PanelHeader
            separator={false}
            left={<PanelHeaderBack onClick={() => setactivePanel('panel1')} />}
          >
            Communities
          </PanelHeader>
          <Search />
          <Cell
            description="Humor"
            // before={<Avatar />}
            onClick={() => setactivePanel('panel3')}
          >
            Swipe Right
          </Cell>
          <Cell
            description="Cultural Center"
            // before={<Avatar />}
            onClick={() => setactivePanel('panel3')}
          >
            Out Cinema
          </Cell>
          <Cell
            description="Movies"
            // before={<Avatar />}
            onClick={() => setactivePanel('panel3')}
          >
            #ARTPOKAZ
          </Cell>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader
            left={<PanelHeaderBack onClick={() => setactivePanel('panel2')} />}
          >
            Out Cinema
          </PanelHeader>
          <Spinner />
          <div style={{ marginTop: 10 }}>Centered Content</div>
        </Panel>
      </View>
    </Root>
  );
};

export default App;
