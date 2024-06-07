import { Icon, Text, View } from "@/components/Themed";
import AnimatedView from "@/components/molecule/AnimatedView";
import BottomSheet from "@/components/organism/BottomSheet";
import Colors from "@/constants/Colors";
import { useGlobalContext } from "@/context/GlobalContext.context";
import { Address } from "@/interfaces/Address.interface";
import { getAllAddress } from "@/utils/api.util";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import SavedAddresses from "./components/savedAddresses";
import CreateAddress from "./createAddress";

const ListAddress = () => {
  const { loading, setLoading } = useGlobalContext();
  const [address, setAddress] = useState<Address[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [totalAddressCount, setTotalAddressCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    // Get all address
    setAddress([]);
    setTotalAddressCount(0);
    setCurrentPage(0);
    fetchAllAddress(0);
  }, []);
  const handleAddNewAddressPress = () => {
    setIsVisible((prev) => !prev);
  };
  const fetchAllAddress = (page: number = currentPage) => {
    setIsVisible(false);
    setLoading(true);
    getAllAddress(page)
      .then((data) => {
        setAddress((prev) => [...prev, ...data?.data]);
        setTotalAddressCount(data?.totalCount);
      })
      .finally(() => setLoading(false));
  };
  const handleScrollEnd = () => {
    if (address.length < totalAddressCount) {
      setCurrentPage((prev) => {
        const nextPage = prev + 1;
        fetchAllAddress(nextPage);
        return nextPage;
      });
    }
  };
  return (
    <>
      <View className="bg-white-secondary h-full p-3">
        {/* Add Address */}
        <AnimatedView onPress={handleAddNewAddressPress}>
          <View className=" flex-row justify-start  items-center bg-white h-7 rounded pl-1">
            <Icon name="plus" size={15} color={Colors.green} />
            <Text className="text-green pl-1">Add new address</Text>
          </View>
        </AnimatedView>
        <View>
          <Text className="text-xs text-white-placeholder mt-2">
            Your saved addresses
          </Text>
        </View>

        <FlatList
          data={address}
          showsVerticalScrollIndicator={false}
          onEndReached={handleScrollEnd}
          renderItem={({ item, index }) => (
            <SavedAddresses key={index} address={item} />
          )}
          onEndReachedThreshold={0.11}
          ListFooterComponent={() =>
            loading && (
              <View className="h-full flex-1 justify-center items-center">
                <ActivityIndicator size="large" color={Colors.green} />
              </View>
            )
          }
        ></FlatList>
      </View>
      <BottomSheet
        isVisible={isVisible}
        onCloseClickHandler={handleAddNewAddressPress}
        renderItem={<CreateAddress afterSubmit={fetchAllAddress} />}
      />
    </>
  );
};

export default ListAddress;
