import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share,Platform } from 'react-native';
import * as Linking from 'expo-linking';
import {firebase_db} from "../firebaseConfig"
import * as Application from 'expo-application';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
const isIOS = Platform.OS === 'ios';

export default function DetailPage({navigation,route}) {

    const [tip, setTip] = useState({
        "idx":10,
        "category":"물류정보",
        "title":"현대글로비스, 쏘카와 맞손…‘스마트 물류’ 구축 가속",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-myhoney-kwon.appspot.com/o/images%2Fl_2022020601000470700040851.webp?alt=media&token=e98b4f31-ec72-49fc-9781-01ef1da54c4a",
        "desc":"현대글로비스는 쏘카와 데이터 기반의 차량 관제·관리 시스템을 공유하고, 인공지능(AI)을 통한 차량 외관 검사 기술 실증에도 협력할 계획이다. 지금은 쏘카 차량을 이용하기 전 외관 촬영만으로 차량의 사고 유무 데이터 등을 등록하고 있다. 이 밖에 현대글로비스의 물류기술 역량과 쏘카의 모빌리티 인프라를 결합한 라스트마일(최종 배송 단계) 서비스 모델 개발도 검토한다. 해외 모빌리티 시장 진출 가능성도 함께 모색하기로 했다.",
        "date":"2022.02.06"
    })
    
    useEffect(()=>{
        console.log(route)
        navigation.setOptions({
            title:route.params.title,
            headerStyle: {
                backgroundColor: '#000',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })
        //넘어온 데이터는 route.params에 들어 있다???
        const { idx } = route.params;
        firebase_db.ref('/tip/'+idx).once('value').then((snapshot) => {
            let tip = snapshot.val();
            setTip(tip)
        });
    },[])

    const like = async () => {
        
        // like 방 안에
        // 특정 사용자 방안에
        // 특정 찜 데이터 아이디 방안에
        // 특정 찜 데이터 몽땅 저장!
        // 찜 데이터 방 > 사용자 방 > 어떤 찜인지 아이디
        let userUniqueId;
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync();
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }

        console.log(userUniqueId)
	       firebase_db.ref('/like/'+userUniqueId+'/'+ tip.idx).set(tip,function(error){
             console.log(error)
             Alert.alert("찜 완료!")
         });
    }

    const share = () => {
        Share.share({
            message:`${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    }

    const link = (link) => {
        Linking.openURL(link)
    }

 
    const vText = (category) => {
        switch(category){
            case "제휴사 현황":
                return "바로가기"
            break
            case "우리의 미션":
                return "참고 영상"
            break

            default:
                return "더 보기"
            break
        }
    }
    return ( 
        
        // 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 이용할 것! 
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:tip.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={()=>like()}><Text style={styles.buttonText}>팁 찜하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>share()}><Text style={styles.buttonText}>팁 공유하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(tip.link)}><Text style={styles.buttonText}>{vText(tip.category)}</Text></TouchableOpacity>
                </View>
                
            </View>
            
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#000"
    },
    image:{
        height:300,
        
        margin:10,
        marginTop:40,
        borderRadius:20,
        
    },
    textContainer:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:20,
        fontWeight:'700',
        color:"#eee"
    },
    desc:{
        marginTop:10,
        color:"#eee"
    },
    buttonGroup: {
        flexDirection:"row",
    },
    button:{
        width:90,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
        padding:10,
        borderWidth:1,
        borderColor:'deeppink',
        borderRadius:7
    },
    buttonText:{
        color:'#fff',
        textAlign:'center'

    }
})