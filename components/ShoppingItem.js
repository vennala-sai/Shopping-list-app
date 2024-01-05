import { StyleSheet, View, Text, Pressable, ProgressBarAndroidBase } from "react-native";
function ShoppingItem(props) {
  return (
    
      <View style={styles.displayListText}>
        <Pressable onPress={props.deleteItem.bind(this, props.id)} android_ripple={{color:'dddddd'}} style={({pressed})=> pressed && styles.pressedItem}>
          {/* We can give any string instead of text after props. in the below line, but that string should match in main file when you are calling the component */}
          <Text style={styles.listText}>{props.text}</Text>
        </Pressable>
      </View>
    
  );
}
export default ShoppingItem;

const styles = StyleSheet.create({
  displayListText: {
    margin: 8,
    borderRadius: 11,
    backgroundColor: "#D1FFD6",
    marginLeft: 2,
  },
  listText: {
    fontWeight: "normal",
    fontSize: 20,
    padding: 10,
    lineHeight: 30,
  },
  pressedItem: {
    opacity: 0.5
  }
});

