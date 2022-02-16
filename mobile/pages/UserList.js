import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { fetchUsers } from "lib/api";
import userData from "../api/users.json"
import UserCard from "../components/UserCard";

function UserList() {

  return (
    <FlatList
      style={{
        backgroundColor: "#EEEEEE",
        padding: 3,
      }}
      data={userData.data}
      renderItem={({item})=>{
          return <UserCard item={item} />
      }}
      keyExtractor={(x) => x.id}
    />
  );
}

export default UserList;
