import { Formik } from "formik"
import { TextInput, View, ScrollView, Button,Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useEffect, useState } from "react";
import axios from "axios";

function SignIn({navigation}){
    const [showPassword, setShowPassword] = useState(false)
    const [clients, setClients] = useState([])
    const [count, setCount] =useState(0)
    var issue = ''
    useEffect(() => {
        axios.get('http://192.168.56.1/kutsvaga/kutsvaga.php')
        .then(req => {
            setClients(req.data)
            console.log(re.data)
            console.log('clients data', clients)
        })
        .catch((e) => {
            e.message
        })  
    }, []  
       )
    function addReview(vals){
        clients.forEach(client => {
            setCount(count+1)
            if (client.email == vals.email){
                if(client.password == vals.password){
                    navigation.navigate("Dashboard", client)
                }
                else{
                    issue = 'the password and the username do no match'
                }
            }
            else{
                    issue = 'the password and the username do no match'
            }
        })
        
    }
    return(
        <View style={{color:'#66d59a', flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View >
                <View>
                    <Text style={{color:'red'}}>{issue}</Text>
                </View>
            <Formik 
                initialValues={{email : '', password : ''}}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addReview(values)
                }}
            >
                {(props) => (
                    <View style={{marginHorizontal:36, marginTop:36}}>
                        <View style={{marginTop:24}}>
                            <Text style={{ fontSize:20}}>Email : </Text>
                            <TextInput 
                                placeholder='email...'
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
                            <Text style={{ fontSize:20}}>Password : </Text>
                            <TextInput 
                                placeholder='password...'
                                value={props.values.passowrd}
                                onChangeText={props.handleChange('password')}
                                secureTextEntry={!showPassword}
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
                            <TouchableOpacity style={{
                                position:'absolute',
                                right:0,
                                bottom:10,
                                height:30,
                                width:30
                                }}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                            <Icon name= {showPassword ? "dnd-forwardslash" : "remove-red-eye"} size={25} />
                        </TouchableOpacity>
                        </View>
                        <Button title='Submit' color='purple' onPress={props.handleSubmit} />
                </View>
                )}
            </Formik>
            <View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center',paddingTop:5}}>
                    <Text style={{fontSize:15,fontWeight:"bold"}}>Do you have an acoount? If not </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("RegistrationScreen")}><Text style={{fontSize:20,fontWeight:"bold",color:"coral"}}>CLICK HERE</Text></TouchableOpacity>
                </View>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}
export default SignIn