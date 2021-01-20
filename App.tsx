import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, Button } from 'react-native';

export default function App()
{

    const [show,setShow]=useState(false);
    const [switchValue,setSwitchValue]=useState(false);

    return (
        <View style={styles.root}>
            <View style={styles.center}>
                {show&&<>
                    <Text style={styles.txt}>Just a switch</Text>
                    <Switch value={switchValue} onValueChange={setSwitchValue} />
                </>}
            </View>
            <View style={styles.bottom}>
                <Button title={show?"Hide the Switch":"Show the Switch"} onPress={()=>setShow(!show)}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    root:{
        flex: 1,
    },
    center:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        fontSize:18,
        marginBottom:10
    },
    bottom:{
        marginBottom:50,
        alignItems:'center'
    }

});
