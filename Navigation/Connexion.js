import React from 'react';
import { StyleSheet, Text, View, Button , TextInput, label } from 'react-native';
import {Formik} from "formik";

export default function Connexion() {
    return (
        <View style={styles.container}>
            <Text>SIGN IN</Text>
            <Formik
                initialValues={{email: ''}}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder='Username or e-mail'
                            keyboardType='email-address'
                            returnKeyType="next"
                            name='email'
                            style={styles.input1}
                        />
                        <TextInput
                            onChangeText={handleChange('pwd')}
                            onBlur={handleBlur('pwd')}
                            value={values.pwd}
                            placeholder='password'
                            secureTextEntry
                            name='pass'
                            style={styles.input2}

                        />
                        <Button onPress={handleSubmit} title="Submit" style={styles.button}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ' 0#aaa',
        alignItems: 'center',
        padding: 50
    },
    input1:{
        height: 50
    },
    input2:{
        height: 50
    }
});
