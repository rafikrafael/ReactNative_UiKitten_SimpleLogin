import React from 'react';
import { View } from 'react-native';
import {
  Button,
  CheckBox,
  Icon,
  IconElement,
  Input,
  Layout,
  StyleType,
  Text,
  ThemeType,
  Toggle,
  withStyles,
} from '@ui-kitten/components';
import {
  SafeAreaLayout,
  SaveAreaInset,
} from 'src/components/safeAreaLayout/SafeAreaLayout';
import {
  AppTheme,
  ThemeContext,
  ThemeContextType,
} from 'src/contexts/ThemeContext';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext, AuthContextType } from 'src/contexts/AuthContext';

const userIcon = (style: StyleType) => <Icon name='person-outline' {...style} />

enum OnChangeType {
  Text = 'text',
  Checked = 'checked'
}

const LoginContainer = ({ navigation, ...props }): React.ReactElement => {

  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [shouldRemember, setShouldRemember] = React.useState<boolean>(false);
  const themeContext: ThemeContextType = React.useContext(ThemeContext);
  
  const authContextValues: AuthContextType = React.useContext(AuthContext);
  const { authContextActions: { signIn } } = authContextValues;

  const { control, handleSubmit } = useForm();

  const onSubmit = (values: any) => {
    signIn(values);
  }

  const onChange = (type: OnChangeType) => (args: any) => (
    type === dsdOnChangeType.Text 
      ? { value: args[0].nativeEvent.text }
      : { checked: args[0] });

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const onThemeToggleChange = (checked: boolean): void => {
    const nextTheme: AppTheme = checked ? AppTheme.dark : AppTheme.light;
    themeContext.setTheme(nextTheme);
  };

  const renderPasswordIcon = (style: StyleType): IconElement => (
    <Icon {...style} name={passwordVisible ? 'eye' : 'eye-off'}/>
  );

  return (
    <SafeAreaLayout
      style={props.themedStyle.container}
      insets={SaveAreaInset.TOP}
      level='4'>
      <Layout style={props.themedStyle.cardContainer}>
        <Layout
          style={props.themedStyle.cardHeader}
          level='4'>
          <View style={props.themedStyle.themeToggleContainer}>
            <Text
              style={props.themedStyle.themeText}
              category='s2'>
              Dark Mode
            </Text>
            <Toggle
              size='small'
              checked={themeContext.isDarkMode()}
              onChange={onThemeToggleChange}
            />
          </View>
          <View style={props.themedStyle.welcomeContainer}>
            <Text category='h6'>Welcome</Text>
            <Text category='s1'>Sign up to your account</Text>
          </View>
        </Layout>
        <Layout
          style={props.themedStyle.formContainer}
          level='1'>
          <Controller
            name='email'
            control={control}
            onChange={onChange(OnChangeType.Text)}
            defaultValue=""
            as={<Input
                  style={props.themedStyle.formInput}
                  label='Email'
                  placeholder='email@email.com'
                  icon={userIcon}
                />
            }
          />
          
          <Controller
            name='password'
            control={control}
            onChange={onChange(OnChangeType.Text)}
            defaultValue=""
            as={<Input
                  style={props.themedStyle.formInput}
                  secureTextEntry={!passwordVisible}
                  label='Password'
                  placeholder='********'
                  icon={renderPasswordIcon}
                  onIconPress={onPasswordIconPress}
                />
            }
          />
          <View style={props.themedStyle.forgotPasswordContainer}>
            <Controller
              name='remember'
              control={control}
              valueName='checked'
              onChange={onChange(OnChangeType.Checked)}
              defaultValue={false}
              as={<CheckBox
                  // checked={shouldRemember}
                  // onChange={setShouldRemember}
                  text='I agree to T&C'
                  />
              }
            />
            <Button
              style={props.themedStyle.forgotPasswordButton}
              appearance='ghost'
              status='basic'>
              Forgot password?
            </Button>
          </View>
          <Button
            style={props.themedStyle.signupButton}
            appearance='ghost'
            status='basic'
          >
            No account yet?
          </Button>
        </Layout>
        <Button style={props.themedStyle.signInButton} onPress={handleSubmit(onSubmit)}>SIGN IN</Button>
      </Layout>
    </SafeAreaLayout>
  );
};

const LoginScreen = withStyles(LoginContainer, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 4,
    marginHorizontal: 24,
    marginVertical: 24,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 24,
  },
  themeToggleContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeText: {
    marginHorizontal: 8,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderWidth: 4,
    borderColor: theme['border-basic-color-4'],
  },
  welcomeContainer: {
    paddingHorizontal: 16,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  formInput: {
    marginVertical: 4,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signupButton: {
    marginVertical: 32,
  },
  signInButton: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
}));

export default LoginScreen;