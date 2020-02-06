import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import {
  Layout, Spinner, Text,
} from '@ui-kitten/components';
import { useForm } from 'react-hook-form';
import {StyleSheet} from 'react-native';

export function SplashScreen(): React.ReactElement {
  const { control } = useForm();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <Spinner size='giant'/>
        <Text style={styles.text} category='h3'>Loading...</Text>
      </Layout>
    </SafeAreaView>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 20
  }
});
