import HomeScreen from "./src/Home/";
import CharacteresListScreen from "./src/CharacteresList/";
import CharacterDetailScreen from "./src/CharacterDetail/";
import FavoritesScreen from "./src/Favorites/";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="CharacteresList"
          component={CharacteresListScreen}
          options={{
              headerStyle: {
                backgroundColor: 'transparent',
                shadowOpacity: 0, 
                elevation: 0,
              },
              headerTitle: '', 
          }}
        />
          <Stack.Screen 
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={{
            headerStyle: {
              backgroundColor: 'transparent',
              shadowOpacity: 0, 
              elevation: 0,
            },
            headerTitle: '', 
          }}
        />
          <Stack.Screen 
          name="Favorites"
          component={FavoritesScreen}
          options={{
              headerStyle: {
                backgroundColor: 'transparent',
                shadowOpacity: 0, 
                elevation: 0,
              },
              headerTitle: '', 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}