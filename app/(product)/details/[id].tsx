import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";

const products = [
    { id: 1, name: "keyboard" },
    { id: 2, name: "mouse" },
];

export default function DetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const product = products.find((p) => p.id === parseInt(id));
    return (
        <ThemedView>
            <ThemedText>
                Details of product {product ? product.name : "Not Found"}
            </ThemedText>
        </ThemedView>
    );
}
