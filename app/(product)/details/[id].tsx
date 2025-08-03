import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

const products = [
    { id: 1, name: "keyboard" },
    { id: 2, name: "mouse" },
];

export default function DetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const product = products.find((p) => p.id === parseInt(id));
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: `Producto ${product?.name}` });
    }, []);

    return (
        <ThemedView>
            <ThemedText>
                Details of product {product ? product.name : "Not Found"}
            </ThemedText>
        </ThemedView>
    );
}
