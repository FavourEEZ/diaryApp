import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DiaryHome from "../screens/diaryHome";
import DiaryScreen from '../screens/addDiaryEntry';

const screens = {
    Home: {
        screen: DiaryHome
    },
    DiaryScreen: {
        screen: DiaryScreen //When we navigate to dScreen, we should DiaryScreen on the screen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);