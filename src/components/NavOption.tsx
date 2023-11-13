import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";

interface NavOptionProps {}

type NavOptions = {
  id: string;
  title: string;
  image: string;
  screen: string;
};

const data: NavOptions[] = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOption: FC<NavOptionProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold ">{item.title}</Text>
          </View>
          <Icon
            type="antdesign"
            name="arrowright"
            color="white"
            className="p-2 bg-black rounded-full w-10 mt-4"
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavOption;
