import React from 'react'
import { AsyncStorage } from 'react-native';

export interface StateContextType {
  isLoading: boolean,
  isSignout: boolean,
  userToken: string,
  authenticated: boolean,
};

export interface AuthContextActionsType {
  signIn: Function,
  signOut: Function,
  signUp: Function,
}

export interface AuthContextType {
  state: StateContextType,
  authContextActions: AuthContextActionsType,
}

const defaultValuesReducer: StateContextType = {
  isLoading: true,
  isSignout: false,
  userToken: '',
  authenticated: false,
}

export const AuthContext = React.createContext<AuthContextType>({
  state: {
    ...defaultValuesReducer
  },
  authContextActions: {
    signIn: () => {},
    signOut: () => {},
    signUp: () => {},
  }
})

const { Provider } = AuthContext;

type AuthProviderProps = {
  children: React.ReactNode,
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: "",
      };
  }
}

const AuthProvider = (props: AuthProviderProps) => {

  const { children } = props
  const [state, dispatch] = React.useReducer(reducer,defaultValuesReducer);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  
  const authContextActions: AuthContextActionsType = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        console.log(data);
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return <Provider value={{ state, authContextActions }}>{children}</Provider>
};

export default AuthProvider;