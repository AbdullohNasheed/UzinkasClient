import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import DefaultButton from '../../../../../../components/general/DefaultButton';
import QRCode from 'react-native-qrcode-svg';
import ReactNativeModal from 'react-native-modal';
import {normalizePrice} from '../../../../../../utils/string';
import {requests} from '../../../../../../api/requests';

export let statuses = {
  '0': ' Новая заявка',
  '1': ' Принята инкасатором',
  '2': ' Привязано инкасатору',
  '3': ' Отмененная инкасация',
};
let phone = 998595937;
const MyOrderView = ({order}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleDispatchTextModal = () => {
    setModalVisible(true);
  };

  const [loading, setLoading] = useState(false);

  const onCancel = async () => {
    try {
      let res = await requests.order.cancel(order.id);
    } catch (error) {}
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <View style={styles.flexOne}>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>{order?.date}</Text>
            </View>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>Статус:</Text>
              <Text style={styles.textTwo}>{statuses[order?.status]}</Text>
            </View>
          </View>
          <View style={styles.flexTwo}>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>Ташрифлар сони</Text>
            </View>
            <View style={styles.historyBoxOne}>
              <View style={styles.box}>
                <Text style={styles.textThree}>Режали</Text>
                <Text style={styles.textOne}>4</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.textThree}>Кушимча</Text>
                <Text style={styles.textOne}>0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.textName}>Сумма</Text>
          <Text style={styles.textNumber}>{normalizePrice(order?.amount)}</Text>
        </View>
        <View style={styles.one}>
          <View style={styles.flexTwo}>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>Ташрифлар сони</Text>
            </View>
            <View style={styles.historyBoxOne}>
              <View style={styles.box}>
                <Text style={styles.textThree}>Катьий</Text>
                <Text style={styles.textOne}>{normalizePrice('100000')}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.textThree}>%</Text>
                <Text style={styles.textOne}>{normalizePrice('66500')}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.textName}>Тулов суммаси</Text>
          <Text style={styles.textNumber}>{normalizePrice(order?.amount)}</Text>
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.text}>Инкассатор</Text>
          <Text style={styles.Text}>{order?.client?.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <QRCode size={150} value={order?.hash} />
          </View>
        </View>
      </View>
      <View style={{marginVertical: 20}}>
        <DefaultButton
          onPress={() => {
            Linking.openURL(`tel:${phone}`);
          }}
          text={'Позвонить инкассатору'}
        />
        <DefaultButton text="Отмена" onPress={onCancel} />
        <ReactNativeModal
          backdropOpacity={0.5}
          onBackdropPress={() => setModalVisible(false)}
          isVisible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={{height: '50%', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.modalTextOne}>
                  Вы уверены, что хотите отменить заказ?
                </Text>
              </View>
              <View style={styles.modalBox}>
                <TouchableOpacity>
                  <Text style={styles.modalTextTwo}>Да</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalTextThree}>Нет</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ReactNativeModal>
      </View>
    </>
  );
};

export default MyOrderView;
