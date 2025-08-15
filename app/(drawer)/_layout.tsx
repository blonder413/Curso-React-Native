import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{ drawerLabel: "Home", title: "Overview" }}
                />
                <Drawer.Screen
                    name="about"
                    options={{ drawerLabel: "About", title: "About Me" }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
