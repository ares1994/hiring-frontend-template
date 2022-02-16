import React, {useEffect} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import dayjs from "dayjs";
import styles from "../constants/styles";
import format from "../util/format";

function UserStartEndTime({ starts_at, ends_at }) {


  return (
    <Text style={styles.date} numberOfLines={1}>
      {format(starts_at)} - {format(ends_at)}
    </Text>
  );
}

const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

function UserStatus({ status }) {
  const styles = { paddingHorizontal: 10,paddingVertical: 5, textTransform:"uppercase", fontWeight:"600"}
  return <View style={{ alignItems:"flex-end"}}>
      <View style={{borderRadius:15,  backgroundColor: statusColors[status] }}>
          <Text style={styles}>{status}</Text>
      </View>
  </View>
}

function UserInfo({
  name,
  email,
  status,
  starts_at,
  ends_at,
  device_time_zone
}) {
  return (
    <View style={{ flexDirection: "column",flex:1,alignItems:"stretch",justifyContent:"space-between",height:100,marginStart:10 }}>
      <View>
          <Text style={styles.title}>{name}</Text>
          {email&&<Text style={styles.subTitle}>{email}</Text>}
          {
              status==="upcoming"&&<UserStartEndTime
              starts_at={starts_at}
              ends_at={ends_at}
              device_time_zone={device_time_zone}
              />
          }
      </View>
      <UserStatus status={status} />
    </View>
  );
}

function UserCard({ item: { attributes } }) {
  return (
    <View style={styles.container}>
      <View
          style={{
              borderRadius:50,
              width:100,
              height:100,
              backgroundColor:"#eee",
              borderWidth:1,
              borderColor:"#ccc"
          }}
      />
      <UserInfo {...attributes} />
    </View>
  );
}
export default UserCard;
