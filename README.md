# Feudmem

## Dependencies

### firebase@9.6.11

Needs to be 9.6.11 as the latest version contains iOS bugs with this idb module.
Can continue to monitor this issue thread 
- https://stackoverflow.com/questions/72179070/react-native-bundling-failure-error-message-while-trying-to-resolve-module-i

Use `yarn upgrade firebase@9.6.11` or `npm install firebase@9.6.11 --save` to install the specific version, and change packages.json to point to the specific version (without `^`).

A nice firebase expo tutorial is at https://www.youtube.com/watch?v=ql4J6SpLXZA
- need to change the way you interact with Firebase when using version ^9


Configuration tips:
- Remember to choose web app.
- Use cloud firestore and not realtime database.

### @react-navigation/native@6.0.10 @react-navigation/native-stack@6.6.2

Navigation system to stack screens in a view and switch between them.

## Deploying in XCode

Open the .xcworkspace instead of .xcodeproj for all dependencies to link properly.

need to `brew install ios-deploy`

## Testing on iOS Simulator

Need to manually open the simulator from Xcode -> Open Developer Tools -> Simulator
or
`open -a Simulator.app`


## References

### Firebase auth with navigation stacks
https://youtu.be/ql4J6SpLXZA

### Poor video but has the right way to import (compat) for Firebase ^9, and fetch data
https://youtu.be/evS7V2M1xq4

### Learn React's JSX and component architecture
https://www.robinwieruch.de/react-function-component/

### Learn React's hooks that exposes React features to functions
- useState to make functions become pseudo-classes which can maintain state between re-renders
https://reactjs.org/docs/hooks-state.html

- useEffect() to do stuff right after render
https://reactjs.org/docs/hooks-effect.html

### Use FlatList for displaying lists
https://docs.expo.dev/versions/latest/react-native/flatlist/#example
