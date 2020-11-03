import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { changeProfile, checkFormData } from "../actions/user";
import { Dispatch } from "redux";
import {
  View,
  Panel,
  PanelHeader,
  Div,
  FormLayout,
  Input,
  Button,
  Title,
  Caption,
  Checkbox,
  Link,
} from "@vkontakte/vkui";
import type { TScreen } from "../types";

export const Form = ({ id, activePanel, headerLabel }: TScreen) => {
  //TODO: type USER
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);
  const store = useStore();
  const {
    first_name, last_name, middle_name,dob, serial, acceptRules
  } = userData;

  const [formValid, setFormValid] = useState<boolean>(true); 

  useEffect(() => {
    console.log(["USER === ", userData]);
    console.log(["first_name", first_name]);
    console.log(["last_name", last_name]);
  });

  useEffect(() => {
    setFormValid(!(first_name !== null && last_name !== null && middle_name !== null && dob !== null && serial !== null && acceptRules !== false))
  }, [first_name,last_name,middle_name,dob,serial,acceptRules])

  const LABEL_BTN_POST = "Проверить КБМ";
  const TOP_TEXT =
    "Восстановим КБМ и снизим стоимость ОСАГО";
  const INFO_TEXT =
    "*Средний срок обработки заявки 1 - 3 дня. Максимально возможный - 7 дней. Если КБМ уменьшится на 5% или мы не сможем его уменьшить - мы вернём вам деньги";



  const handlerChangeField = (evt: any) => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const key = evt.target.name
    changeProfile({[key]:value})(dispatch);
  };


  const sendForm = (evt:any) => {
    console.log(['sendForm', ])
    checkFormData({
      dob,
      first_name,
      last_name,
      middle_name,
      serial 
    })(dispatch, store.getState);
  }
  return (
    <View id={id} activePanel={activePanel}>
      <Panel id={id}>
        <PanelHeader>{headerLabel}</PanelHeader>
        <Title
          style={{ textAlign: "center", margin: "20px 0" }}
          level="2"
          weight="bold"
        >
          {TOP_TEXT}
        </Title>
        <FormLayout style={{ margin: "10px" }}>
          {/* TODO: for fields */}
        {/*onChange={ (evt) => handlerChangeField(evt, "last_name")} */}
          <Input
            top="Фамилия"
            type="text"
            name="last_name"
            value={last_name}
            status={last_name? "valid" : "error"}
            bottom={last_name? "" : "Пожалуйста, введите Фамилию."}
            onChange={(e)=>{handlerChangeField(e)}}
          />
          <Input
            top="Имя"
            type="text"
            name="first_name"
            value={first_name }
            status={first_name? "valid" : "error"}
            bottom={first_name? "" : "Пожалуйста, введите Имя."}
            onChange={(e)=>{handlerChangeField(e)}}
          />
          <Input
            top="Отчество"
            type="text"
            name="middle_name"
            value={middle_name}
            status={middle_name? "valid" : "error"}
            bottom={middle_name? "" : "Пожалуйста, введите Отчество."}
            onChange={(e)=>{handlerChangeField(e)}}
          />
          <Input
            top="Дата рождения"
            type="date"
            name="dob"
            value={dob}
            status={dob? "valid" : "error"}
            bottom={dob? "" : "Пожалуйста, введите Дату рождения."}
            onChange={(e)=>{handlerChangeField(e)}}
          />
          <Input
            top="Номер водительского удостоверения"
            type="text"
            name="serial"
            value={serial}
            status={serial ? "valid" : "error"}
            bottom={
              serial ? "" : "Поле номер в/у обязательно для заполнения"
            }
            onChange={(e)=>{handlerChangeField(e)}}
          />
           <Checkbox   name="acceptRules"  value={acceptRules} onChange={(e)=>{handlerChangeField(e)}}>Согласен с <Link>пользовательским соглашением</Link></Checkbox>
          <Button type='submit' size="xl" disabled={formValid} onClick={(evt)=>sendForm(evt)}>{LABEL_BTN_POST}</Button>
           <Caption level="1" weight="regular" style={{ marginBottom: 16 }}>{INFO_TEXT}</Caption>
        </FormLayout>
      </Panel>
    </View>
  );
};
