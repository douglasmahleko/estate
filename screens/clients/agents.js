import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList,TouchableHighlight,StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native"

function Agents({navigation}){
    const [agents, setAgents] = useState([])
    useEffect(() => {
        axios.get('http://192.168.56.1/kutsvaga/kutsvaga.php')
        .then(req => {
            setAgents(req.data)
            console.log(re.data)
            console.log('clients data', clients)
        })
        .catch((e) => {
            e.message
        })
       }
       )
        const LineDivider = () => {
            return(
                <View style={{ height: 1, paddingVertical:5}}>
                    <View style={{flex:1, borderBottomColor:"black", borderBottomWidth:1}} />
                </View>
            )
        }
        const Cart = ({item}) => {
            return (
                <ScrollView>
                    <TouchableHighlight 
                    activeOpacity={0.9} 
                    underlayColor={"white"} 
                    onPress={()=> navigation.navigate("MoreAboutAgent", item)}
                >
                    <View style={styles.cartcard}>
                        <View style={{
                            flex:1, 
                            height:150,
                            paddingVertical:20,
                            marginLeft:10
                            }}>
                            <Text style={{fontWeight:'bold', fontSize:16}}> Agent Name : {item.name}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:16}}> Agent surname : {item.surname}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:16}}> Agent email : {item.email}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:16}}> Agent ratings : {item.ratings}</Text>
                        </View >
                    </View>
                </TouchableHighlight>
                </ScrollView>
            )
       }
    return(
        <SafeAreaView>
                 <FlatList 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:80}}
                    ListHeaderComponentStyle={{paddingHorizontal:20, marginTop:20}}
                    data={agents}
                    renderItem={({item}) => <Cart item={item} />}
                    /> 
        </SafeAreaView>
    )
}
export default Agents

const styles = StyleSheet.create({
    cartcard:{
        
        elevation:15,
        borderRadius:10,
        backgroundColor: "white",
        marginHorizontal:20,
        marginVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center'
    }
})