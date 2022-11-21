export default {
  expo: {
    name: 'collected',
    slug: 'collected',
    version: '1.0.0',
    sdkVersion: '47.0.0',
    jsEngine: 'hermes',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    backgroundColor: '#877473',
    primaryColor: '#fcba03',
    androidStatusBar: {
      barStyle: 'light-content',
      translucent: false,
    },
    androidNavigationBar: {
      barStyle: 'light-content',
      backgroundColor: '#877473',
    },
    scheme: 'collected',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF',
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
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.collectedapp.www',
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
