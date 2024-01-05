import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import ShoppingItem from "./components/ShoppingItem.js";
import ItemInput from "./components/ItemInput.js";

export default function App() {
  //enteredText is automatically retrieved by js due to onChangetext prop
  const [enteredItem, setEnteredItem] = useState("");
  const [itemsList, setItemsList] = useState([]);
  function itemInputHandler(enteredText) {
    // console.log(enteredText)
    setEnteredItem(enteredText);
  }
  function addItemHandler() {
    //Another recommended or best practice way to write the below line:
    //setItemsList([...itemsList, enteredItem]);
    //----------Another method
    // setItemsList((currentItemsListStateParameter) => [
    //   ...currentItemsListStateParameter,
    //   enteredItem,
    // ]);
    //do the below way so you can have a list of data objects (which includes text, key and some other stuff. Works well with flatlist cuz they operate on data objects)
    setItemsList((currentItemsList) => [
      ...currentItemsList,
      { text: enteredItem, id: Math.random().toString() },
    ]);

    setEnteredItem('');
  }
  function deleteItemHandler(id) {
    setItemsList(currentItemsList=>{
      return (currentItemsList.filter((item)=> item.id !== id)
      )
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <ItemInput itemInputHandler={itemInputHandler} addItemHandler={addItemHandler} enteredText={enteredItem}/>
        {/* <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your shopping list!"
            onChangeText={itemInputHandler}
          />
          <Button title="Add Goal" onPress={addItemHandler} />
        </View> */}

        <View style={styles.displayContainer}>
          <Text style={styles.displayTitle}>Items list:</Text>
          <FlatList
            data={itemsList}
            renderItem={(itemObject) => {
              return (
                <ShoppingItem text={itemObject.item.text} id={itemObject.item.id} deleteItem={deleteItemHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            showsVerticalScrollIndicator={false}
          />
          {/* ALTERNATE WAY INSTEAD OF FLATLIST */}
          {/* <Text>{itemsList}</Text> - an alternative and recommended way to do this! check below */}
          {/* {itemsList.map((eachItemInItemsList) => (
              <View key={eachItemInItemsList} style={styles.displayListText}>
                <Text style={styles.listText}>
                  {eachItemInItemsList}
                </Text>
              </View>
            ))} */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: 50,
    backgroundColor: "#F2F2F2",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  displayContainer: {
    marginTop: 30,
  },
  displayTitle: {
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 25,
  },
});
