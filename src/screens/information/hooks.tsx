import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requests} from '../../api/requests';
import userSlice, {
  selectUser,
  userLoggedOut,
} from '../../store/slices/userSlice';
export const useInformationScreenHook = () => {
  let user = useSelector(selectUser);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleVisibleModal = () => {
    setModalVisible(true);
  };
  const onLogoutPress = () => {
    dispatch(userLoggedOut());
  };

  return {
    userSlice,
    user,
    modalVisible,
    toggleVisibleModal,
    setModalVisible,
    useDispatch,
    onLogoutPress,
  };
};
