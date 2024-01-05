import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function ItemInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your shopping list!"
        onChangeText={props.itemInputHandler}
        value={props.enteredText}
      />
      <Button title="+" onPress={props.addItemHandler} />
    </View>
  );
}
export default ItemInput;

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 1,
  }
});
