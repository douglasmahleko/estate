import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import DataInput from '../screens/agents/dataInput'
import ClientsInfo from '../screens/agents/clientsInfo'
import ViewYourHouses from '../screens/agents/viewYourHouses'
import RenewalScreen from '../screens/agents/renewalScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useState } from "react"
import AvailableHome from "../screens/clients/availableHome"
import ProposedHouses from "../screens/clients/proposedHouses"
import Agents from "../screens/clients/agents"
import Requirements from "../screens/clients/requirements"

const Tabs = createBottomTabNavigator()

function BottomTab({navigation}){
    var client = navigation.getParam("agent")
    return(
        <NavigationContainer>
            {
                (client) ? ( <Tabs.Navigator 
                    screenOptions={{
                        tabBarShowLabel:false,
                        style:{
                            position: 'absolute',
                            bottom:0,
                            left:0,
                            right:0,
                            elevation:0,
                            backgroundColor:"transparent"
                        },
                        
                    }}
                >
                    <Tabs.Screen name="ViewYourHouses" component={ViewYourHouses} 
                        options={{
                            tabBarIcon:({focused}) => (<Icon name="view-list" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                        }}
                    /> 
                    <Tabs.Screen name="DataInput" component={DataInput} 
                        options={{
                            tabBarIcon:({focused}) => (<Icon name="add-business" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                        }}
                    /> 
                    <Tabs.Screen name="ClientsAndDesiredHouses" component={ClientsInfo} 
                        options={{
                            tabBarIcon:({focused}) => (<Icon name="people" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                        }}
                    />
                    <Tabs.Screen name="RenewalScreen" component={RenewalScreen} 
                        options={{
                            tabBarIcon:({focused}) => (<Icon name="autorenew" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                        }}
                    /> 
                </Tabs.Navigator> ) :
           ( 

            <Tabs.Navigator 
                screenOptions={{
                    tabBarShowLabel:false,
                    style:{
                        position: 'absolute',
                        bottom:0,
                        left:0,
                        right:0,
                        elevation:0,
                        backgroundColor:"transparent"
                    },
                    
                }}
            >
                <Tabs.Screen name="AvailableHome" component={AvailableHome} 
                    options={{
                        tabBarIcon:({focused}) => (<Icon name="event-available" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                    }}
                /> 
                <Tabs.Screen name="ProposedHoused" component={ProposedHouses} 
                    options={{
                        tabBarIcon:({focused}) => (<Icon name="filter-list" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                    }}
                /> 
                <Tabs.Screen name="Agents" component={Agents} 
                    options={{
                        tabBarIcon:({focused}) => (<Icon name="support-agent" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                    }}

                />
                <Tabs.Screen name="Requirements" component={Requirements} 
                    options={{
                        tabBarIcon:({focused}) => (<Icon name="question-answer" size={25} style={{color:focused ? 'purple' : 'coral'}} />),
                    }}
                /> 
            </Tabs.Navigator>
           )
            }
        </NavigationContainer>
        
    )
}

export default BottomTab