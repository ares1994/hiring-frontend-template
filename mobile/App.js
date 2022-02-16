import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import UserList from "pages/UserList";
import SwitchTab from "./components/SwitchTab";
import DeviceList from "./pages/DeviceList";

export default function App() {

  const data = [
    {id:"1",title:"Devices"},
    {id:"2",title:"Users"},
  ];

  const [active, setActive] = useState("")


  return (
    <View style={styles.container}>

      <View style={{flex:1}}>

        <SwitchTab color="primary" options={data} active={active} setActive={setActive}/>
        {
          active==="1"&&
          <DeviceList/>
        }

        {
          active==="2"&&
          <UserList/>

        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:25,
    backgroundColor: "#eee",
  },
});
