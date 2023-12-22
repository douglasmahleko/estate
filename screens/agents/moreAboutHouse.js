import { ScrollView,Image,StyleSheet, Text, View } from "react-native"

function MoreAboutHouse({navigation}){
    const img1 = navigation.getParam('img')
    const img2 = navigation.getParam('img1')
    const img3 = navigation.getParam('img2')
    const img4 = navigation.getParam('img3')
    const policies = navigation.getParam('policies')
    const priviledges = navigation.getParam('priviledges')
    const description = navigation.getParam('description')
    const availableSlots = navigation.getParam('availableSlots')
    const amount = navigation.getParam('amount')
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
            <Image style={{height:220, width:220}} source={img2}  />
            <Image style={{height:220, width:220}} source={img3}  />
            <Image style={{height:220, width:220}} source={img4}  />
            </View>
            <LineDivider />
            <View style={styles.details}>
                <Text>Available Slots </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{availableSlots}</Text>
                <LineDivider />
                <Text >Amount (USD) </Text>
                <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{amount}</Text>
                <LineDivider />
                <Text>Policies/Rules </Text>
                <Text style={styles.textDetails}>{policies}</Text>
                <LineDivider />
                <Text >Priviledges </Text>
                <Text style={styles.textDetails}>{priviledges}</Text>
                <LineDivider />
                <Text>Descriprition </Text>
                <Text style={styles.textDetails}>{description}</Text>
                <LineDivider />
                <Text>Comment </Text>
                <Text style={styles.textDetails}>{comment}</Text>
            </View>
        </ScrollView>
    )
}
export default MoreAboutHouse

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