# Feudmem

## Installation
Use lts version of node for stability
```
nvm install --lts
nvm use --lts
```
Make sure npm is latest
`nvm install-latest-npm`

Install yarn for easier package management
`brew install yarn`

Then simply `yarn` in the directory to update everything

However, expo-cli seems to need manual updating:
`yarn add expo-cli`
(`yarn add` is both installing and updating)

Use `npm doctor` to check everything is correctly linked.

nvm install

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


## Instructions for fetching a list

1. understand the use of state hooks to store your retrieved orders list as a persistent state variable
- https://reactjs.org/docs/hooks-state.html

2. actually the whole retrieveCustomerOrders() function needs to be in your Vendorpage.js
  - I realized you cannot call the async function in Firestore.js from this Vendorpage.js because you need to save the returned query snapshot object into a javascript array (as a state variable) that persists in your Vendorpage. That can only be done within the async function, so that function needs to be in Vendorpage.
  - note that this means you need to import the necessary variables from Firebase.js (mainly your current `orders` collection variable)

3. in the retrieveCustomerOrders() function you need to store the retrieved `allOrders` object into a state variable as a javascript array 
  - access the allOrders.docs array
  - you can read up on the javascript array map function to do this

4. read up on effect hooks to make your Vendorpage immediately call the retrieveCustomerOrders()
   upon rendering the page
  - https://reactjs.org/docs/hooks-effect.html
  - (you basically just need to have the retrieveCustomerOrders() function within the useEffect() lambda function block)

5. use the javascript array state variable you stored and map each element into a view using jsx
  - you can once again use the array map to do this
  - an example is here http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx

export default function Vendorpage() {
  // 1. you need to do this to be able to store your orders list as a persistent state variable
  const [orders, setOrders] = useState([]);

  // 2. copy the code from your Firestore.js as all asynchronous activity needs to be 
  // contained in the async function. 
  // (I realized you cannot call the async function in Firestore.js from this Vendorpage.js)
  // In other words, you need to save the returned query snapshot object into a js array that 
  // persists in your Vendorpage, and that can only be done within the async function,
  // so that function needs to be here.
  const retrieveCustomerOrders = async () => {
    console.log("fetching orders...");
    const querySnapshot = await getDocs(memoryRef)
    
    // debugging code to check that we retrieved the right orders
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
    })
    
    // convert the list of query snapshots into a regular javascript array containing 
    // records with the id and the title
    const allMemories = querySnapshot.docs.map((doc) => ({
      id: doc.id, 
      title: doc.data().title
    }))
    const allMemories = querySnapshot.docs.map(doc => doc.data().title)

    // see what is the last item
    console.log(allMemories[allMemories.length-1])

    // store the array as a persistent state variable
    setMemories(allMemories)
  }

  useEffect(() => {
    //db.collection("memories")
    ////.onSnapshot()
    //.get()
    //.then((result) => {
    //result.docs;
    //})
    //.then((docs) => {
    //console.log("received results:", docs);
    //docs.map((doc) => ({ id: doc.data().id, title: doc.data().title }));
    //});

    // TODO remove this debug adding of record in db
    //createMem();

    // fetch all memories
    fetchAllMem()

    //querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data())
    //})
  }, []);

  // NOTE the key attrib that is needed for each child item created from a jsx array 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.inputTitle]}>Memories...</Text>

      {memories?.map((memory) => (
        <View key={memory.id} style={styles.memoryItem}>
          <Text>{memory.title}</Text>
        </View>
      ))}
      <Button
        style={styles.buttonText}
        onPress={() => {
          navigation.replace("Home");
        }}
        title="Create"
      />
      <Button
        style={styles.buttonText}
        onPress={() => {
          logout(() => {
            navigation.replace("Login");
          });
        }}
        title="Logout"
      />
    </SafeAreaView>
  );
}

