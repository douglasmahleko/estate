import { Formik } from "formik"
import { useState } from "react"
import { Text, View, Button, Modal, ScrollView, TextInput, Alert } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"


function RegistrationScreen(){
    const [clientView, setClientView] = useState(false)
    const [agentView, setAgentView] = useState(false)
    function pressHandler(values, url){
        console.log(values)
        console.log(url)
        fetch(url, {
            method:'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((resJ) => {
            Alert.alert(resJ)
            console.log(resJ)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <View>
            <Text style={{padding:5, fontSize:20, fontWeight:'bold', marginLeft:50}}>Register as client or agent</Text>
            <View >
                <Modal visible={agentView}>
                <View style={{color:'#66d59a', flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View >
                    <View style={{flexDirection:'row',elevation:15, backgroundColor:'white',}}>
                        <Text style={{padding:5, fontSize:20, fontWeight:'bold', marginLeft:50}}>Register as an Agent</Text>
                        <View style={{paddingRight:10, alignItems:'flex-end' }}>
                            <Icon name="close" size={35} onPress={() => setAgentView(false)} style={{paddingTop:10,marginLeft:100}} />
                        </View>
                    </View>
                    <Formik
                        initialValues={{ nome:'', surname:'', email:'', dob:'', address:'', location:'', city:'',regNo:'', gender:'', password:'', confirm:'', image:'', contact:'' }}
                        onSubmit={(values, actions) => {
                            actions.resetForm()
                            pressHandler(values, 'http://192.168.56.1/kutsvaga/kutsvaga.php')
                            console.log(values)
                        }}
                    >
                        {(props) => (
                            <View style={{marginHorizontal:36, marginTop:36}}>
                                <View style={{ marginTop:36}}>
                                <Text style={{ fontSize:20}}>Name : </Text>
                                <TextInput 
                                    placeholder='eg douglas....'
                                    value={props.values.nome}
                                    onChangeText={props.handleChange('nome')}
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
                                    <Text style={{ fontSize:20}}>Surname : </Text>
                                    <TextInput 
                                        placeholder='eg mahleko...'
                                        value={props.values.surname}
                                        onChangeText={props.handleChange('surname')}
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
                                    <Text style={{ fontSize:20}}>Email : </Text>
                                    <TextInput 
                                        placeholder='eg kutsvaga@gmail.com...'
                                        value={props.values.email}
                                        onChangeText={props.handleChange('email')}
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
                                    <Text style={{ fontSize:20}}>D.O.B : </Text>
                                    <TextInput 
                                        placeholder='eg 2023/12/1...'
                                        value={props.values.dob}
                                        onChangeText={props.handleChange('dob')}
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
                                    <Text style={{ fontSize:20}}>Address : </Text>
                                    <TextInput 
                                        placeholder='1646 unit m...'
                                        value={props.values.address}
                                        multiline
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
                                    <Text style={{ fontSize:20}}>Location : </Text>
                                    <TextInput 
                                        placeholder='seke 1 and 2...'
                                        value={props.values.location}
                                        onChangeText={props.handleChange('location')}
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
                                    <Text style={{ fontSize:20}}>Reg No : </Text>
                                    <TextInput 
                                        placeholder='ab2345...'
                                        value={props.values.regNo}
                                        onChangeText={props.handleChange('regNo')}
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
                                    <Text style={{ fontSize:20}}>City : </Text>
                                    <TextInput 
                                        placeholder='eg Chitungwiza...'
                                        value={props.values.city}
                                        onChangeText={props.handleChange('city')}
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
                                    <Text style={{ fontSize:20}}>Gender : </Text>
                                    <TextInput 
                                        placeholder='eg male...'
                                        value={props.values.gender}
                                        onChangeText={props.handleChange('gender')}
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
                                    <Text style={{ fontSize:20}}>Password : </Text>
                                    <TextInput 
                                        placeholder='put strong password...'
                                        value={props.values.password}
                                        secureTextEntry={true}
                                        onChangeText={props.handleChange('password')}
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
                                    <Text style={{ fontSize:20}}>Confirm Password : </Text>
                                    <TextInput 
                                        placeholder='should matche'
                                        value={props.values.confirm}
                                        onChangeText={props.handleChange('confirm')}
                                        secureTextEntry={true}
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
                                    <Text style={{ fontSize:20}}>Image : </Text>
                                    <TextInput 
                                        placeholder='eg 2023/12/20...'
                                        value={props.values.image}
                                        onChangeText={props.handleChange('image')}
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
                                    <Text style={{ fontSize:20}}>Contact : </Text>
                                    <TextInput 
                                        placeholder='eg 0776477847...'
                                        value={props.values.contact}
                                        onChangeText={props.handleChange('contact')}
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
                                <View style={{padding:20, marginBottom:10}}>
                                    <Button title='Insert' color='purple' onPress={props.handleSubmit} />
                                </View>
                        </View>
                        )}
                    </Formik>
                    </View>
                    </ScrollView>
        </View>
                </Modal>
                <Modal visible={clientView}>
                <View style={{color:'#66d59a', flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View >
                    <View style={{flexDirection:'row', elevation:15, backgroundColor:'white'}}>
                        <Text style={{padding:5, fontSize:20, fontWeight:'bold', marginLeft:50 }}> Register as a Client </Text>
                        <View style={{paddingRight:10, alignItems:'flex-end' }}>
                            <Icon name="close" size={35} onPress={() => setClientView(false)} style={{paddingTop:10,marginLeft:100}} />
                        </View>
                    </View>
                    <Formik 
                        initialValues={{email:'', contact:'', requirements:'', expectedDurationStay:'', gender:'', expectingTheHouse:'', password:'', confirm:'' }}
                        onSubmit={(values, actions) => {
                            actions.resetForm()
                            pressHandler(values, 'http://192.168.56.1/kutsvaga/kutsvaga1.php')
                            console.log(values)
                        }}
                    >
                        {(props) => (
                            <View style={{marginHorizontal:36, marginTop:36}}>
                                <View style={{ marginTop:36}}>
                                <Text style={{ fontSize:20}}>Email : </Text>
                                <TextInput 
                                    placeholder='eg kutsvaga@gmail.com....'
                                    value={props.values.email}
                                    onChangeText={props.handleChange('email')}
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
                                    <Text style={{ fontSize:20}}>Contact : </Text>
                                    <TextInput 
                                        placeholder='eg 077777777...'
                                        value={props.values.contact}
                                        onChangeText={props.handleChange('contact')}
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
                                    <Text style={{ fontSize:20}}>Requirementss : </Text>
                                    <TextInput 
                                        placeholder='eg 3 rooms...'
                                        value={props.values.requirements}
                                        multiline
                                        onChangeText={props.handleChange('requirements')}
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
                                    <Text style={{ fontSize:20}}>Expected Duration Stay : </Text>
                                    <TextInput 
                                        placeholder='eg 2023/12/12...'
                                        value={props.values.expectedDurationStay}
                                        onChangeText={props.handleChange('expectedDurationStay')}
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
                                    <Text style={{ fontSize:20}}>Gender : </Text>
                                    <TextInput 
                                        placeholder='eg female...'
                                        value={props.values.gender}
                                        onChangeText={props.handleChange('gender')}
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
                                    <Text style={{ fontSize:20}}>Expecting The House On : </Text>
                                    <TextInput 
                                        placeholder='eg 2023/12/12...'
                                        value={props.values.expectingTheHouse}
                                        onChangeText={props.handleChange('expectingTheHouse')}
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
                                    <Text style={{ fontSize:20}}>Password : </Text>
                                    <TextInput 
                                        placeholder='put a strong password...'
                                        value={props.values.password}
                                        secureTextEntry={true}
                                        onChangeText={props.handleChange('password')}
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
                                    <Text style={{ fontSize:20}}>Password Confirm : </Text>
                                    <TextInput 
                                        placeholder='they should match...'
                                        value={props.values.confirm}
                                        secureTextEntry={true}
                                        onChangeText={props.handleChange('confirm')}
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
                                <View style={{padding:20, marginBottom:10}}>
                                    <Button title='Insert' color='purple' onPress={props.handleSubmit}  />
                                </View>
                        </View>
                        )}
                    </Formik>
                    </View>
                    </ScrollView>
        </View>
                </Modal>
            </View>
            <View style={{flexDirection:'row', height:70, justifyContent:"center", alignItems:"center", color:"coral"}}>
                <Button title='Client' onPress={()=> setClientView(true)} />
                <Button title='Agent' onPress={()=> setAgentView(true)} />
            </View>
        </View>
    )
}
export default RegistrationScreen
