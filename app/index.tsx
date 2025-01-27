import { useAuth } from "@clerk/clerk-expo";
import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";

const Home = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.replace("/(auth)/welcome");
      }
    }
  }, [isLoaded, isSignedIn]);
  
  return <Redirect href="/(root)/(tabs)/home" />;
};

export default Home;