import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageList from "./src/screens/ImageList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    New: ComponentsScreen,
    List: ListScreen,
    Images: ImageList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Dron application",
      headerStyle: {
        height: 100,
        backgroundColor: "yellow"
      }
    }
  }
);

export default createAppContainer(navigator);
