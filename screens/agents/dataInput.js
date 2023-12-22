import { Formik } from "formik"
import { Text, View, TextInput, Button, ScrollView } from "react-native"


function DataInput({navigation}){
    const addReview = (vals) => {
        console.log(vals)
        navigation.navigate("ViewYourHouses")
    }
    return(
        <View style={{color:'#66d59a', flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View >
            <Formik 
                initialValues={{address: '', amount : '', availableSlots : '', description : '', priviledges : '',   rulesAndPolicies : '', comment:''}}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addReview(values)
                    console.log(values)
                }}
            >
                {(props) => (
                    <View style={{marginHorizontal:36, marginTop:36}}>
                        <View style={{ marginTop:36}}>
                        <Text style={{ fontSize:20}}>Address : </Text>
                        <TextInput 
                            placeholder='Address....'
                            value={props.values.address}
                            onChangeText={props.handleChange('address')}
                            style={{
                                borderColor:'#ddd',
                                padding:10,
                                fontSize:18,
                                borderRadius:6,
                                height:50,
                                borderBottomWidth:1,
                                borderBottomColor:'#ffffff',
                                marginVertical:12
                            }}
                        />
                        </View>
                        <View style={{marginTop:24}}>
                            <Text style={{ fontSize:20}}>Amount Per Head : </Text>
                            <TextInput 
                                placeholder='Amount per head...'
                                value={props.values.amount}
                                onChangeText={props.handleChange('amount')}
                                keyboardType='numeric'
                                style={{
                                    borderColor:'#ddd',
                                    padding:10,
                                    fontSize:18,
                                    borderRadius:6,
                                    height:50,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#ffffff',
                                    marginVertical:12
                                }}
                            />
                        </View>
                        <View style={{marginTop:24}}>
                            <Text style={{ fontSize:20}}>Available Slots : </Text>
                            <TextInput 
                                placeholder='Available Slots...'
                                value={props.values.availableSlots}
                                keyboardType='numeric'
                                onChangeText={props.handleChange('availableSlots')}
                                style={{
                                    borderColor:'#ddd',
                                    padding:10,
                                    fontSize:18,
                                    borderRadius:6,
                                    height:50,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#ffffff',
                                    marginVertical:12
                                }}
                            />
                        </View>
                        <View style={{marginTop:24}}>
                            <Text style={{ fontSize:20}}>Description : </Text>
                            <TextInput 
                                placeholder='Descriptions...'
                                value={props.values.description}
                                onChangeText={props.handleChange('description')}
                                multiline
                                style={{
                                    borderColor:'#ddd',
                                    padding:10,
                                    fontSize:18,
                                    borderRadius:6,
                                    height:50,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#ffffff',
                                    marginVertical:12
                                }}
                            />
                        </View>
                        <View style={{marginTop:24}}>
                            <Text style={{ fontSize:20}}>Priviledges : </Text>
                            <TextInput 
                                placeholder='Priviledges...'
                                value={props.values.priviledges}
                                multiline
                                onChangeText={props.handleChange('priviledges')}
                                style={{
                                    borderColor:'#ddd',
                                    padding:10,
                                    fontSize:18,
                                    borderRadius:6,
                                    height:50,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#ffffff',
                                    marginVertical:12
                                }}
                            />
                        </View>
                        <View style={{marginTop:24}}>
                            <Text style={{ fontSize:20}}>Rules And Policies : </Text>
                            <TextInput 
                                placeholder='Rules And Policies...'
                                value={props.values.rulesAndPolicies}
                                multiline
                                onChangeText={props.handleChange('rulesAndPolicies')}
                                style={{
                                    borderColor:'#ddd',
                                    padding:10,
                                    fontSize:18,
                                    borderRadius:6,
                                    height:50,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#ffffff',
                                    marginVertical:12
                                }}
                            />
                        </View>
                        <View style={{marginTop:24}}>
                            <Text style={{ fontSize:20}}>Comment : </Text>
                            <TextInput 
                                placeholder='comment...'
                                value={props.values.comment}
                                multiline
                                onChangeText={props.handleChange('comment')}
                                style={{
                                    borderColor:'#ddd',
                                    padding:10,
                                    fontSize:18,
                                    borderRadius:6,
                                    height:50,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#ffffff',
                                    marginVertical:12
                                }}
                            />
                        </View>
                        <Button title='Insert' color='purple' onPress={props.handleSubmit} />
                </View>
                )}
            </Formik>
            </View>
            </ScrollView>
        </View>
    )
}
export default DataInput