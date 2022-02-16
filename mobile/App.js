import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import UserList from "pages/UserList";
import SwitchTab from "./components/SwitchTab";
import DeviceList from "./pages/DeviceList";

export default function App() {

    const data = [
        {id: "1", title: "Devices"},
        {id: "2", title: "Users"},
    ];


    const [active, setActive] = useState("")


    return (
        <View style={styles.container}>

            <View style={{flex: 1}}>

                <SwitchTab color="primary" options={data} active={active} setActive={setActive}/>
                {

                    <View style={[active !== "1" && styles.hide]}>
                        <DeviceList/>
                    </View>
                }

                {
                    <View style={[active !== "2" && styles.hide]}>
                        <UserList/>
                    </View>
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        backgroundColor: "#eee",
    },
    hide: {width: 0, height: 0}

});
