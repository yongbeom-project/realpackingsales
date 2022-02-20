import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

export default function AboutPage({navigation,route}){
    const aboutImage = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png"
    
    useEffect(()=>{
        navigation.setOptions({
            title:"소개 페이지",
            headerStyle: {
                backgroundColor: '#1F266A',
                shadowColor: "#1F266A",
            },
            headerTintColor: "#fff",
        })
    },[])

    const link = () => {
        Linking.openURL("tel:010-8985-7732")
    }

    return (
        <View style={styles.container}>
             <StatusBar style="dark" />
            <Text style={styles.title}>안녕하세요! 리얼패킹 세일즈 팀입니다.</Text>
        
            
            <View style={styles.textContainer}>
                <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
                <Text style={styles.desc01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.desc02}>혹시 궁금한 사항이 있으시면 언제든지 문의 주세요!</Text>
                <TouchableOpacity style={styles.button} onPress={()=>link()}>
                    <Text style={styles.buttonText}>릭에게 문의하기</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#1F266A",
        alignItems:"center"
      
    },
    title: {
        fontSize:30,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop:20,
        paddingRight:30
    },
    textContainer: {
        width:300,
        height:500,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700"
    }
})