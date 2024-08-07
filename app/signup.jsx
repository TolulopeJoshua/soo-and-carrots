import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto, AntDesign, Feather } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { signupActions } from "../store";

import Button from "../components/button";
import Input from "../components/input";

export default function Signup() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [privacy, setPrivacy] = useState(false);
  const [password, setPassword] = useState(true); // password hidden

  const dispatch = useDispatch();
  const { competition } = useSelector(({ signup }) => signup.details);

  const onChangeText = (key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };
  const submit = () => {
    dispatch(signupActions.updateDetails(form));
    router.push("/welcome");
  };
  const validateForm = () => {
    let found = false;
    setErrors({});
    if (!competition) {
      found = true;
      setErrors((prev) => ({
        ...prev,
        competition: "You must pick a competition to register",
      }));
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      found = true;
      setErrors((prev) => ({
        ...prev,
        email: "Email format is invalid",
      }));
    }
    if (!form.password || !/^[a-zA-Z0-9]{8,}$/.test(form.password)) {
      found = true;
      const password = [];
      password.push("At least 8 letters");
      password.push(
        "Include uppercase letter(s), lowercase letter(s), and number(s)"
      );
      setErrors((prev) => ({
        ...prev,
        password,
      }));
    }
    if (form.password !== form.confirmPassword) {
      found = true;
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "New password and Confirm password do not match.",
      }));
    }
    if (!form.firstName) {
      found = true;
      setErrors((prev) => ({
        ...prev,
        firstName: "This is a required field.",
      }));
    }
    if (!form.lastName) {
      found = true;
      setErrors((prev) => ({
        ...prev,
        lastName: "This is a required field.",
      }));
    }
    return !found;
  };

  const passwordIcon = (
    <Pressable onPress={() => setPassword(!password)}>
      <Feather name={password ? "eye-off" : "eye"} size={24} color="#475467" />
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 24, height: "100%" }}>
        <View style={{ gap: 8 }}>
          <Pressable
            style={styles.input}
            onPress={() => router.push("/competition")}
          >
            <Text>{competition?.name || "Competition to sign up * "}</Text>
            <AntDesign name="down" size={24} color="#475467" />
          </Pressable>
          {errors.competition ? (
            <Text style={styles.errorText}>{errors.competition}</Text>
          ) : (
            ""
          )}
          <Input
            inputMode="email"
            placeholder="Email"
            value={form.email}
            onChangeText={(e) => onChangeText("email", e)}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : (
            ""
          )}
          <View>
            <Input
              secureTextEntry={password}
              value={form.password}
              placeholder="Password"
              onChangeText={(e) => onChangeText("password", e)}
              icon={passwordIcon}
            />
            <Input
              secureTextEntry={password}
              value={form.confirmPassword}
              placeholder="Confirm Password"
              onChangeText={(e) => onChangeText("confirmPassword", e)}
              icon={passwordIcon}
            />
          </View>
          {errors.password?.length
            ? errors.password.map((err) => (
                <Text key={err} style={styles.errorText}>
                  {err}
                </Text>
              ))
            : ""}
          {errors.confirmPassword ? (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          ) : (
            ""
          )}
          <Input
            value={form.firstName}
            placeholder="First Name in English *"
            onChangeText={(e) => onChangeText("firstName", e)}
          />
          {errors.firstName ? (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          ) : (
            ""
          )}
          <Input
            value={form.lastName}
            placeholder="Last Name in English *"
            onChangeText={(e) => onChangeText("lastName", e)}
          />
          {errors.lastName ? (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          ) : (
            ""
          )}
        </View>
        <View style={{ paddingVertical: 64, gap: 24 }}>
          <Pressable style={styles.terms} onPress={() => setPrivacy(!privacy)}>
            {privacy ? (
              <Fontisto name="checkbox-active" size={24} color="#D3D8FF" />
            ) : (
              <Fontisto name="checkbox-passive" size={24} color="#D3D8FF" />
            )}
            <Text style={styles.termsText}>
              By signing up, I agree to Soo and Carrot's Terms &
              Conditions and Privacy Policy.
            </Text>
          </Pressable>
          <Button onPress={() => validateForm() && submit()}>Sign Up</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
  },
  competitionText: {
    color: "#667085",
  },
  errorText: {
    color: "#FF2323",
  },
  action: {
    backgroundColor: "#253BFF",
    paddingVertical: 14,
    borderRadius: 48,
    alignItems: "center",
  },
  terms: {
    flexDirection: "row",
    gap: 8,
  },
  termsText: {
    color: "#475467",
  },
});
