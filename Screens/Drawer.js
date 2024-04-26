import { createDrawerNavigator } from "@react-navigation/drawer"
import DetailsScreen from "./DetailsScreen"
import HomeScreen from "./HomeScreen"
import CustomDrawerNavigation from "./CustomDrawerNavigation"

const Drawer = createDrawerNavigator()
const MyDrawer = ()=>{
return(
    <Drawer.Navigator drawerContent={(props)=> <CustomDrawerNavigation {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Details" component={DetailsScreen}/>
    </Drawer.Navigator>)
}
export default MyDrawer;