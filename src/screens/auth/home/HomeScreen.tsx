import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Layout,
  Text,
  Button,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import { AppRoute } from 'src/navigation/app-routes';

export function HomeScreen({ navigation }) {
  
  const handleGoToHome2 = () => {
    navigation.navigate(AppRoute.HOME2, { tabBarVisible: false })
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <Text style={styles.textTitle}>Home</Text>
        <Button onPress={handleGoToHome2}>Go to home2</Button>
      </Layout>
    </SafeAreaView>
  );
}

export default HomeScreen;

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
