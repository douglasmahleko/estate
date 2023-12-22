import { ScrollView,Image,StyleSheet, Text, View } from "react-native"

function MoreAboutAgent({navigation}){
    const img1 = navigation.getParam('img')
    const username = navigation.getParam('username')
    const email = navigation.getParam('email')
    const ratings = navigation.getParam('ratings')
    const LineDivider = () => {
        return(
            <View style={{width:1, paddingHorizontal:18}}>
                <View style={{flex:1, borderLeftColor:"black", borderBottomWidth:1}}></View>
            </View>
        )
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems:'center', height:280, justifyContent:'center'}}>
            <Image style={{height:220, width:220}} source={img1}  />
            </View>
            <LineDivider />
            <View style={styles.details}>
                <Text>Username : </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{username}</Text>
                <LineDivider />
                <Text >Email : </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{email}</Text>
                <LineDivider />
                <Text>Ratings : </Text>
                <Text style={styles.textDetails}>{ratings}</Text>
                <LineDivider />
            </View>
        </ScrollView>
    )
}
export default MoreAboutAgent

const styles = StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal:20
    },
    details:{
        paddingHorizontal:20,
        paddingTop:40,
        paddingBottom:60,
        backgroundColor:"coral",
        borderTopRightRadius:40,
        borderTopLeftRadius:40
    },
    iconContainer:{
        height:50,
        width: 50,
        borderRadius:30,
        alignItems: 'center',
        backgroundColor: "white",
        justifyContent:'center'
    },
    textDetails:{
        marginTop:10,
        lineHeight:22,
        fontSize:16,
        color:"white"
    }
})