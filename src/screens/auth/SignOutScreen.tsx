import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Layout,
  Modal,
  Text,
} from '@ui-kitten/components';
import { AuthContext } from 'src/contexts/AuthContext';
import { AppRoute } from 'src/navigation/app-routes';

const SignOutScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const { authContextActions } = React.useContext(AuthContext);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsVisible(true);
    });

    return unsubscribe;
  }, [navigation]);

  const handleOnConfirm = () => {
    authContextActions.signOut();
  }
  const handleOnCancel = () => {
    setIsVisible(false);
    navigation.navigate(AppRoute.HOME);
  };

  const renderModalElement = () => (
    <Layout
      level='1'
      style={styles.modalContainer}>
      <Layout level='4' style={styles.cardHeader}>
        <Text>Confirm Sign Out?</Text>
      </Layout>
      
      <Layout level='1' style={styles.modalContainerButtons}>
        <Button style={styles.buttons} status='danger' onPress={handleOnConfirm}>
          Confirm
        </Button>
        <Button style={styles.buttons} onPress={handleOnCancel}>
          Cancel
        </Button>
      </Layout>
    </Layout>
  );

  return (
    <Modal
      backdropStyle={styles.backdrop}
      visible={isVisible}>
      {renderModalElement()}
    </Modal>
  );
};

export default SignOutScreen; 

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 256,
    // padding: 16,
  },
  cardHeader: {
    flex: 0.30,
    flexDirection: 'row',
    justifyContent: 'center',
    // height: '25%',
    width: '100%',
    // paddingHorizontal: 24,
    paddingVertical: 10,
  },
  modalContainerButtons: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttons: {
    margin: 10
  },
});