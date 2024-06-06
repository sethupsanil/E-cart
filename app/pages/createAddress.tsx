import { Text, View } from "@/components/Themed";
import Border from "@/components/atom/Border";
import CustomButton from "@/components/atom/CustomButton";
import FloatingTextInput from "@/components/atom/FloatingTextInput";
import Colors from "@/constants/Colors";
import { Address } from "@/interfaces/Address.interface";
import { addAddress } from "@/utils/api.util";
import { Formik } from "formik";
import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useColorScheme,
} from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import * as Yup from "yup";
import AddressList from "./components/addressList";

const createAddress = () => {
  const theme = useColorScheme();
  const radioButtons: any = useMemo(
    () => [
      {
        id: "1",
        label: "Myself",
        value: "myself",
        borderColor: Colors.green,
        containerStyle: { color: Colors.green },
        color: Colors.green,
        labelStyle: { color: theme === "dark" ? "#fff" : "#000" },
      },
      {
        id: "2",
        label: "Other",
        value: "other",
        borderColor: Colors.green,
        color: Colors.green,
        labelStyle: { color: theme === "dark" ? "#fff" : "#000" },
      },
    ],
    [theme]
  );

  const addressList = useMemo(
    () => [
      { title: "Home", icon: "home" },
      { title: "Work", icon: "building" },
      { title: "Hotel", icon: "hotel" },
      { title: "Other", icon: "location-arrow" },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState("2");
  const [activeIndex, setActiveIndex] = useState(0);

  const addressSelectionHandler = (index: number) => {
    setActiveIndex(index);
  };

  const addressSchema = Yup.object().shape({
    orderingFor: Yup.string(),
    addressType: Yup.string().required("Select address type"),
    buildingName: Yup.string().required(
      "Flat / House no / Building name is required"
    ),
    floor: Yup.string(),
    area: Yup.string().required("Area / Sector / Locality is required"),
    landmark: Yup.string(),
    name: Yup.string()
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Only alphabets allowed"
      )
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be a number")
      .min(10, "Phone number must be 10 digits")
      .max(12),
  });

  const initialValues: Address = {
    orderingFor: selectedId,
    addressType: activeIndex,
    buildingName: "",
    floor: "",
    area: "",
    landmark: "",
    name: "",
    phone: "",
  };

  const onOrderingForPress = (index: string) => {
    setSelectedId(index);
  };

  const handleSubmit = async (values: any) => {
    try {
      console.log(values);
      await addAddress(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={120}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={addressSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          isValid,
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <View className="w-full h-full pl-2">
            <View className="justify-center">
              <Text className="text-lg font-bold pt-2">
                Enter complete address
              </Text>
            </View>
            <Border />
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* View 1 */}
              <View className="justify-start items-start">
                <Text>Who you are ordering for?</Text>
                <RadioGroup
                  layout="row"
                  radioButtons={radioButtons}
                  onPress={(selectedItem) => {
                    setFieldValue("orderingFor", selectedItem);
                    onOrderingForPress(selectedItem);
                  }}
                  selectedId={selectedId}
                />
              </View>
              {/* View 2 */}
              <View className="mt-2">
                <Text>Save address as </Text>
                <View className="flex-row justify-evenly mt-1">
                  {addressList.map((item: any, index) => (
                    <AddressList
                      icon={item.icon}
                      title={item.title}
                      key={index}
                      index={index}
                      activeIndex={activeIndex}
                      onPressHandler={() => {
                        addressSelectionHandler(index);
                        setFieldValue("addressType", index);
                      }}
                    />
                  ))}
                </View>
              </View>
              {/* View 3 */}
              <View className="mt-4">
                <FloatingTextInput
                  label={"Flat / House no / Building name *"}
                  value={values.buildingName}
                  onChangeText={handleChange("buildingName")}
                  onBlur={handleBlur("buildingName")}
                  errors={errors}
                  touched={touched}
                  formikKey="buildingName"
                />
              </View>
              {/* view 4 */}
              <View className="mt-4">
                <FloatingTextInput
                  label={"Floor (optional)"}
                  value={values.floor}
                  onChangeText={handleChange("floor")}
                  onBlur={handleBlur("floor")}
                  errors={errors}
                  touched={touched}
                  formikKey="floor"
                />
              </View>
              {/* view 5 */}
              <View className="mt-4">
                <FloatingTextInput
                  label={"Area / Sector / Locality *"}
                  value={values.area}
                  onChangeText={handleChange("area")}
                  onBlur={handleBlur("area")}
                  errors={errors}
                  touched={touched}
                  formikKey="area"
                />
              </View>
              {/* view 6 */}
              <View className="mt-4">
                <FloatingTextInput
                  label={"Landmark (optional)"}
                  value={values.landmark}
                  onChangeText={handleChange("landmark")}
                  onBlur={handleBlur("landmark")}
                  errors={errors}
                  touched={touched}
                  formikKey="landmark"
                />
              </View>
              {/* view 7 */}
              <View className="mt-4">
                <Text className="text-white-placeholder">
                  Enter your details for seamless delivery experience
                </Text>
              </View>
              {/* view 8 */}
              <View className="mt-2">
                <FloatingTextInput
                  label={"Your name *"}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  errors={errors}
                  touched={touched}
                  formikKey="name"
                />
              </View>
              {/* view 9 */}
              <View className="mt-4">
                <FloatingTextInput
                  label={"Your phone number (optional)"}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  errors={errors}
                  touched={touched}
                  formikKey="phone"
                  maxLength={12}
                  keyboardType="phone-pad"
                />
              </View>
            </ScrollView>
            {/* View 10 */}
            <CustomButton
              title="Save Address"
              containerStyles={"mt-4 bg-green h-10"}
              handlePress={handleSubmit} // Formik's handleSubmit handles the form submission
              textStyles={"text-white text-lg font-pregular"}
            />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default createAddress;
