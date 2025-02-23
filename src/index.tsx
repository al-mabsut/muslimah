import content from "@hanafi/en/1_indeterminate_ruling_on_initial_bleeding"
import { Text, View } from "react-native";

export function multiply(a: number, b: number): number {
  console.log('content', content.title);
  return a + b;
}

export const Istihadah = () => (
  <View>
    <Text>Title: {content.title}</Text>
    <Text>guidance: {content.guidance}</Text>
    <Text>maritalClarifications: {content.maritalClarifications}</Text>
    <Text>additionalClarifications: {content.additionalClarifications}</Text>
    <Text>ramadanClarifications: {content.ramadanClarifications}</Text>
  </View>
);
