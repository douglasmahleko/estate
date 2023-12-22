import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../screens/signIn";
import RegistrationScreen from "../screens/registrationScreen";
import BottomTab from "./bottomTab";
import MoreAboutHouse from "../screens/agents/moreAboutHouse";
import ShowMoreClientInfor from "../screens/agents/showMoreClientInfor";
import EditData from "../screens/agents/editData";
import MoreAboutAgent from "../screens/clients/moreAboutAgent";
import MoreAboutHome from "../screens/clients/moreAboutHome";
import PaymentScreen from "../screens/clients/paymentScreen";

const screens = {
    SignUp : {
        screen: SignIn
    },
    MoreAboutHouse : {
        screen: MoreAboutHouse
    },
    ShowMoreClientInfor : {
        screen : ShowMoreClientInfor
    },
    EditData : {
        screen : EditData
    },
    MoreAboutAgent : {
        screen: MoreAboutAgent
    },
    MoreAboutHome : {
        screen : MoreAboutHome
    },
    PaymentScreen : {
        screen : PaymentScreen
    },
    RegistrationScreen : {
        screen : RegistrationScreen
    },
    Dashboard: {
        screen: BottomTab,
        navigationOptions:{
            headerShown:false
        }
    }
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)