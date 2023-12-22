import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList,TouchableHighlight,StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native"
// import desired from "../../constants/clientsInfo"
// import houses from '../../constants/houses'


function ClientsInfo({navigation}){
    const [clientHouses, setClientHouses] = useState([])
    useEffect(() => {
        axios.get('http://192.168.56.1/kutsvaga/kutsvaga3.php')
        .then(req => {
            setClientHouses(req.data)
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
                    onPress={()=> navigation.navigate("ShowMoreClientInfor", item, myHouses)}
                >
                    <View style={styles.cartcard}>
                        <View style={{
                            flex:1, 
                            height:150,
                            paddingVertical:20,
                            marginLeft:10
                            }}>
                            {/* <Text style={{fontWeight:'bold', fontSize:16}}> Client Name : {item.clientName}</Text>
                            <LineDivider /> */}
                            <Text style={{fontWeight:'bold', fontSize:16}}> Client email : {item.email}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:16}}> Client contact : {item.contact}</Text>
                            <LineDivider />
                            <Text style={{fontWeight:'bold', fontSize:17}}>duration of stay : {item.location}</Text>
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
                    Only houses you look after will be displayed
                </Text>
            </View>
                 <FlatList 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:80}}
                    ListHeaderComponentStyle={{paddingHorizontal:20, marginTop:20}}
                    data={clientHouses}
                    renderItem={({item}) => <Cart item={item} />}
                    
                    />
        </SafeAreaView>
    )
}
export default ClientsInfo

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