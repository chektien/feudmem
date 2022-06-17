# Issues

## Dependencies

### firebase@9.6.11
Needs to be 9.6.11 as the latest version contains iOS bugs with this idb module.
Can continue to monitor this issue thread 
- https://stackoverflow.com/questions/72179070/react-native-bundling-failure-error-message-while-trying-to-resolve-module-i

Use `yarn upgrade firebase@9.6.11` or `npm install firebase@9.6.11 --save` to install the specific version, and change packages.json to point to the specific version (without `^`).

Another thing is that the tutorials online did not add the `compat` folder when importing firebase dependencies.

A nice firebase expo tutorial is at https://www.youtube.com/watch?v=ql4J6SpLXZA
- need to change the way you interact with Firebase when using version ^9

This is very poor video but has the right way to import for Firebase ^9
https://youtu.be/evS7V2M1xq4

### Configuration tips
Remember to choose web app.

User cloud firestore and not realtime database.

## Deploying in XCode
Open the .xcworkspace instead of .xcodeproj for all dependencies to link properly.

need to `brew install ios-deploy`


## Testing on iOS Simulator

Need to manually open the simulator from Xcode -> Open Developer Tools -> Simulator
or
`open -a Simulator.app`
