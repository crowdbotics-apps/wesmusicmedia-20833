import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen15116250Navigator from '../features/BlankScreen15116250/navigator';
import ArticleList116218Navigator from '../features/ArticleList116218/navigator';
import ArticleList116217Navigator from '../features/ArticleList116217/navigator';
import ArticleList116216Navigator from '../features/ArticleList116216/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen15116250: { screen: BlankScreen15116250Navigator },
ArticleList116218: { screen: ArticleList116218Navigator },
ArticleList116217: { screen: ArticleList116217Navigator },
ArticleList116216: { screen: ArticleList116216Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
