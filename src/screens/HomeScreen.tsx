import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOption from "../components/NavOption";

export type IHomeScreenProps = {};

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  return (
    <SafeAreaView>
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
      <NavOption />
    </SafeAreaView>
  );
};

export { HomeScreen };
