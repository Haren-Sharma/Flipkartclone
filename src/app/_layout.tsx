import { Stack } from "expo-router";
import { ProductsCartProvider } from "../context/ProductsCartContext";

export default function RootLayout() {
  return (
    <ProductsCartProvider>
      <Stack
        screenOptions={{
          statusBarHidden: true,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ProductsCartProvider>
  );
}
