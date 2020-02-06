import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import {
  Layout,
  Text,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export function ProfileScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <Text style={styles.textTitle}>User Screen</Text>
      </Layout>
    </SafeAreaView>
  );
}

export default ProfileScreen;

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
