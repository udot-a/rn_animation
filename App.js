import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageList from "./src/screens/ImageList";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ChangeColorScreen from "./src/screens/ChangeColorScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    New: ComponentsScreen,
    List: ListScreen,
    Images: ImageList,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Change: ChangeColorScreen,
    Input: TextScreen,
    BoxScreen: BoxScreen
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
