import { Stack } from "expo-router";

export default function RootLayout() {
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
