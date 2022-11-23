export default {
  expo: {
    name: 'collected',
    slug: 'collected',
    version: '1.0.0',
    sdkVersion: '47.0.0',
    jsEngine: 'hermes',
    orientation: 'portrait',
    icon: './assets/collectedLogoXL.png',
    userInterfaceStyle: 'light',
    backgroundColor: '#FF0000',
    primaryColor: '#fcba03',
    androidStatusBar: {
      barStyle: 'light-content',
      translucent: false,
    },
    androidNavigationBar: {
      barStyle: 'light-content',
      backgroundColor: '#000000',
    },
    scheme: 'collected',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FF0000',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: false,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptiveLogoSM.png',
        backgroundColor: '#F5F5F5',
      },
      package: 'com.collectedapp.www',
      splash: {
        backgroundColor: '##FFA500',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: '6259e058-8794-4c8f-bf6d-b32f27d652bf',
      },
    },
  },
};
