import React, {useEffect} from "react";
import {FlatList, Text, View} from "react-native";
import deviceData from "../api/devices.json"
import UserCard from "../components/UserCard";
import DeviceCard from "../components/DeviceCard";


const DeviceList = () => {

    useEffect(() => {
        console.log(deviceData)
    }, []);

    return <FlatList style={{padding: 3,}} data={deviceData.data} renderItem={({item, index}) => {
        return <DeviceCard item={item}/>
    }
    }/>
}


export default DeviceList
