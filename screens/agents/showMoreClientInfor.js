import { ScrollView, StyleSheet, Text, View } from "react-native"

function ShowMoreClientInfor({navigation}){
    const clientName = navigation.getParam('clientName')
    const email = navigation.getParam('email')
    const contact = navigation.getParam('contact')
    const duration = navigation.getParam('img3')
    const requirements = navigation.getParam('requirements')
    const LineDivider = () => {
        return(
            <View style={{width:1, paddingHorizontal:18}}>
                <View style={{flex:1, borderLeftColor:"black", borderBottomWidth:1}}></View>
            </View>
        )
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.details}>
                <Text>Client Name </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{clientName}</Text>
                <LineDivider />
                <Text >Email </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{email}</Text>
                <LineDivider />
                <Text>Contact </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{contact}</Text>
                <LineDivider />
                <Text >Duration </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{duration}</Text>
                <LineDivider />
                <Text>Requirements </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{requirements}</Text>
            </View>
        </ScrollView>
    )
}
export default ShowMoreClientInfor

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