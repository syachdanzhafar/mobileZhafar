import { Button, View, Text } from 'react-native';
export default function Home({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Button
                onPress={() => navigation.navigate('Notif')}
                title="Go to notifications"
            />
            <Text>Syachdan Zhafar Shadiq Dj</Text>
        </View>
    );
}