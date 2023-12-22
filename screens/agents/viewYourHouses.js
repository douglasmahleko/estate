import axios from "axios"
import { useEffect, useState } from "react"
import { FlatList, Text, View, StyleSheet, SafeAreaView, Image, TouchableHighlight, ScrollView } from "react-native"



function ViewYourHouses({navigation}){
    const [houses, setHouses] = useState([])
    useEffect(() => {
        axios.get('http://192.168.56.1/kutsvaga/kutsvaga2.php')
        .then(req => {
            setHouses(req.data)
            console.log(re.data)
            console.log('clients data', clients)
        })
        .catch((e) => {
            e.message
        })  
    }  
       )

    const Cart = ({item}) => {
        return (
            <ScrollView>
                <TouchableHighlight 
                activeOpacity={0.9} 
                underlayColor={"white"} 
                onPress={()=> navigation.navigate("MoreAboutHouse", item)}
            >
                <View style={styles.cartcard}>
                    <Image style={{height:80, width:80, borderRadius:80}} />
                    <View style={{
                        flex:1, 
                        height:100,
                        paddingVertical:20,
                        marginLeft:10
                        }}>
                        <Text style={{fontWeight:'bold', fontSize:16}}> Amount : $ {item.amount}</Text>
                        <Text style={{color:"grey", fontSize:13}}>The street : {item.city}</Text>
                        <Text style={{fontWeight:'bold', fontSize:17}}>Available Slots : {item.slots}</Text>
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
                    data={houses}
                    renderItem={({item}) => <Cart item={item} />}
                    
                    />
        </SafeAreaView>
    )
}
export default ViewYourHouses

const styles = StyleSheet.create({
    cartcard:{
        height:100,
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