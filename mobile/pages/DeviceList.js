import React, {useEffect} from "react";
import {FlatList} from "react-native";
import deviceData from "../api/devices.json"
import DeviceCard from "../components/DeviceCard";


const DeviceList = () => {

    return <FlatList style={{padding: 3,}} data={deviceData.data} renderItem={({item, index}) => {
        return <DeviceCard item={item}/>
    }
    }/>
}


export default DeviceList
