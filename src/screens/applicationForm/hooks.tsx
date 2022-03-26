import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {requests} from '../../api/requests';
import {QuestionnaireRequest} from '../../api/types';
import {ROUTES} from '../../navigation/ROUTES';

export const useContractScreenData = () => {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState<QuestionnaireRequest>({
    name_object: '',
    amount_money: '',
    location: '',
    plan_visit_inkass: '',
    work_plan: '',
  });
  const navigation = useNavigation();
  const effect = async () => {
    try {
      setLoading(true)
      let res = await requests.questionnaire.createQuestionnaire(send);
      navigation.navigate(ROUTES.APPLICATION, {send});
      console.log(res.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (key: keyof QuestionnaireRequest) => (value: string) => {
    setSend({...send, [key]: value});
  };
  const onSavePress = () => {
    effect();
  };
  return {send, handleChange, onSavePress, loading };
};
