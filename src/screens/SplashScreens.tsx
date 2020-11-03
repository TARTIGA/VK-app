import React, { useState, useEffect } from 'react';
import { View, Panel, PanelHeader, Gallery, Div,Headline,Title, Text, Button} from '@vkontakte/vkui';
import type { TScreen } from '../types';

export const SplashScreens = ({ id, activePanel, headerLabel, handleGoTo }: TScreen) => {
  const [slideIdx, setslideIdx] = useState(0)
  useEffect(() => {
    console.log(['id', id]);
    console.log(['activePanel', activePanel]);
  }, []);
  const SPLASH_SCREENS_LIST = [
    {title: 'КБМ блабла 1', text:'крутая приложуха, 100%, отвечаю', backgroundColorVal:'var(--destructive)' },
    {title: 'КБМ блабла 2',  text:'ты чо, не веришь?', backgroundColorVal:'var(--destructive)' },
    {title: 'КБМ блабла 3',  text:'сам попробуй!', backgroundColorVal:'var(--destructive)'},
  ];
  const checkSplashEnd = (idx:number) => {
    return idx === SPLASH_SCREENS_LIST.length -1
  }
  const goToNext = (idx:number) => {
    if(!checkSplashEnd(idx)){
      setslideIdx(slideIdx+1);
    } else {
      handleGoTo()
      alert ("GO TO APP")
    }
  }
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <Gallery
                style={{ height: '90vh' }}
                initialSlideIndex={0}
                slideIndex={slideIdx}
                onChange={(slideIdx)=>{setslideIdx(slideIdx)}}
                align={'center'}
                bullets={'light'}
              >
                {SPLASH_SCREENS_LIST.map((item,idx)=>(
                  <Div key={idx.toString()} style={{ backgroundColor: `${item.backgroundColorVal}`, display:'flex', alignItems:'space-between', flexDirection:'column', justifyContent:'space-around' }} >
                   <Div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                   <Title level="1" weight="semibold" style={{ marginBottom: 16, color:'#fff' }}>{item.title}</Title>
                   <Text weight="regular" style={{  color:'#fff',  marginBottom: 16}}>{item.text}</Text>
                   </Div>
                   <Div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                   <Button size='l' onClick={()=>{goToNext(idx)}}>{checkSplashEnd(idx)? 'Начать пользоваться' : 'Продолжить'}</Button>
                   </Div>
                 </Div>
                ))}
              </Gallery>
      </Panel>
    </View>
  );
};
