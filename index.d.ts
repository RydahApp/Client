declare module "*.png";
declare module "*.jpg";

declare type AuthStackNavigatorParamList = {
  Onboarding: undefined;
  Register: undefined;
  Login: undefined;
  Verify: { token: string; email: string };
  ForgotPassword: undefined;
  PinVerification: { token: string; email: string };
  SetPassword: undefined;
  SetSuccess: undefined;
};

declare type RootStackParamList = {
  HomeScreen: undefined;
  AddVehicle: undefined;
  BookService: { title: string; id: string };
};

declare type ProfileStackParamList = {
  ProfileSettingsScreen: undefined;
  ProfileInfoScreen: undefined;
};

declare type AuthScreenNavigationProp =
  NativeStackNavigationProp<AuthStackNavigatorParamList>;

declare type HomeStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

declare type ProfileStackNavigationProp =
  NativeStackNavigationProp<ProfileStackParamList>;
