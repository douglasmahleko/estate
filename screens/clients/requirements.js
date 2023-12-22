import { Formik } from "formik"
import { TextInput, View, Button,Text, ScrollView } from "react-native"

function Requirements(){
    return(
        <View style={{color:'#66d59a', flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View >
            <Formik 
                initialValues={{containedAmount: '', requirements : ''}}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addReview(values)
                    console.log(values)
                }}
            >
                {(props) => (
                    <View style={{marginHorizontal:36, marginTop:36}}>
                        <View style={{ marginTop:36}}>
                        <Text style={{ fontSize:20}}>Contained Amount : </Text>
                        <TextInput 
                            placeholder='containedAmount....'
                            value={props.values.containedAmount}
                            onChangeText={props.handleChange('containedAmount')}
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
                            <Text style={{ fontSize:20}}>Requirements : </Text>
                            <TextInput 
                                placeholder='requirements...'
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
                            <Text style={{ fontSize:20}}>Comments : </Text>
                            <TextInput 
                                placeholder='comments...'
                                value={props.values.comments}
                                multiline
                                onChangeText={props.handleChange('comments')}
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
                            <Text style={{ fontSize:20}}>Recommentations To Improve Services : </Text>
                            <TextInput 
                                placeholder='recommentations to improve services...'
                                value={props.values.recommentationsToImproveServices}
                                onChangeText={props.handleChange('recommentationsToImproveServices')}
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
                        <Button title='Submit' color='purple' onPress={props.handleSubmit} />
                </View>
                )}
            </Formik>
            </View>
            </ScrollView>
        </View>
    )
}

export default Requirements