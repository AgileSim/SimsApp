
# Hibrid Web-UI App version

Include the webapp (production version) in a WebView (native app) using Apache Cordova.

## Prerequisites

- Install Mobile SDKs (android, ios or whatever you want to run) and updated dependecies.
- Install Apache Cordova: ```npm install -g cordova```
- [Optional] Install Ionic: ```npm install -g ionic```
- Developer mode enabled in your phone.
- Fill the URL_API property in the file /src/environments/environment.prod.tx

## Install and configure enviroment

```bash
# Add platforms (choose which you need)
cordova platform add android
cordova platform add ios

# (Optional) Install and debug iOS apps without using Xcode
npm install -g ios-deploy

# (Optional) Install and configure cocoapods (dependency manager for Swift and Objective-C)
sudo gem install cocoapods
pod setup
```
## Build and deploy apps in the real devices (only Android) and emulators

```bash
# Android
cordova run android

# iOS
cordova run ios
```

## Update icon and splash screen

1. Update resources/icon.psd and/or resources/splash.psd
2. Execute ``ìonic resources```