import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList,TouchableHighlight,StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native"

function ProposedHouses({navigation}){
    const [proposedHouses, setProposedHouses] = useState([])
    useEffect(() => {
        axios.get('http://192.168.56.1/kutsvaga/kutsvaga0.php')
        .then(req => {
            setProposedHouses(req.data)
            console.log(re.data)
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
                    onPress={()=> navigation.navigate("ShowMoreClientInfor", item)}
                >
                    <View style={styles.cartcard}>
                        <View style={{
                            flex:1, 
                            height:150,
                            paddingVertical:20,
                            marginLeft:10
                            }}>
                            <Text style={{fontWeight:'bold', fontSize:16}}> Client email : {item.email}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:16}}> House location : {item.location}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:16}}> Rent amount : {item.amount}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:17}}>Agent : {item.agent}</Text>
                        </View >
                    </View>
                </TouchableHighlight>
                </ScrollView>
            )
       }

    return(
        <SafeAreaView>
            <View style={{height:50,borderRadius:5,border:1,}}>
                <Text style={{
               marginHorizontal:20,
               height: 50,
               padding:5,
               marginRight:10,
               backgroundColor: "coral",
               fontWeight:'bold',
               fontSize:18,
                alignItems:'center'}}>
                    Only houses you would like will be displayed
                </Text>
            </View>
            {
                proposedHouses.length > 0 ?
                 <FlatList 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:80}}
                    ListHeaderComponentStyle={{paddingHorizontal:20, marginTop:20}}
                    data={proposedHouses}
                    renderItem={({item}) => <Cart item={item} />}
                    
                    /> : 
                <View>
                    <Text> You have not yet make a choice </Text>
                </View>
            }
        </SafeAreaView>
    )
}
export default ProposedHouses

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