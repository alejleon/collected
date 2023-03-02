export default {
  expo: {
    name: 'collected',
    slug: 'collected',
    originalFullName: '@alejleon/collected',
    version: '1.0.0',
    sdkVersion: '47.0.0',
    jsEngine: 'hermes',
    orientation: 'portrait',
    icon: './assets/collectedIcon.png',
    userInterfaceStyle: 'light',
    backgroundColor: '#f5f5f5',
    primaryColor: '#FF0000',
    androidStatusBar: {
      barStyle: 'dark-content',
      translucent: false,
    },
    androidNavigationBar: {
      barStyle: 'light-content',
      backgroundColor: '#000000',
    },
    scheme: 'collected',
    splash: {
      image: './assets/collectedSplash.png',
      backgroundColor: '#f5f5f5',
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
        foregroundImage: './assets/collectedAdaptiveIcon.png',
        backgroundColor: '#F5F5F5',
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
