import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function IndexScreen() {
    return (
        <ThemedView>
            <ThemedText>Hello from Home</ThemedText>
            <Link
                href={{
                    pathname: "/(product)/details/[id]",
                    params: { id: 1 },
                }}
            >
                <ThemedText>View product 1 details</ThemedText>
            </Link>

            <Link
                href={{
                    pathname: "/(product)/details/[id]",
                    params: { id: 2 },
                }}
            >
                <ThemedText>View product 2 details</ThemedText>
            </Link>

            <Link
                href={{
                    pathname: "/(product)/details/[id]",
                    params: { id: 3 },
                }}
            >
                <ThemedText>View product 3 details</ThemedText>
            </Link>
        </ThemedView>
    );
}
