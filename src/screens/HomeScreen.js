import { View, Text, FlatList, StyleSheet } from 'react-native';
import LojaCard from '../components/LojaCard';
import {LOJAS} from '../data/mockData';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lojas Próximas</Text>
            <FlatList
                data={LOJAS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <LojaCard loja={item} />}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    list: {
        paddingBottom: 16,
    },
});
    