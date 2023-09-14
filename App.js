import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ProfilCard } from "./components/ProfileCard/ProfileCard";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <ProfilCard />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
