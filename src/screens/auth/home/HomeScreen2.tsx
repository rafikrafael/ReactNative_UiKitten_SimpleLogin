import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Layout,
  Text,
  TopNavigationAction,
  TopNavigation,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import { BackIcon } from 'src/icons';

export function HomeScreen2({ navigation }) {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title='Home Form Screen' alignment='center' leftControl={BackAction()}/>
      <Layout style={styles.container}>
        <Text style={styles.textTitle}>Home 2</Text>
      </Layout>
    </SafeAreaView>
  );
}

export default HomeScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  textSubTitle: {
    fontSize: 14,
    marginBottom: '10%',
    textAlign: 'center',
  },
});
