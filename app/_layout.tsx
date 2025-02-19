import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "outfit": require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
  })
  return(
  <Stack>
    <Stack.Screen name="(tabs)" options={{
      headerShown: false,
      //You can also disable the header on the Stack level above using the same code as above.
      //You can also remove the headers in the _layout.tsx file inside the Tabs using the 
      //screenOptions={{ headerShown: false }} prop. This should be on the top-level Tab.
    }}/>
  </Stack>
  );
}
