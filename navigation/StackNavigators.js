import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import LikePage from '../pages/LikePage';

const Stack = createStackNavigator();


const StackNavigator = () =>{
    return (

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height:100
                },
                
                headerTitleAlign:'left',
                headerTintColor: "#000",
                headerBackTitleVisible: false
            }}
            
        >

            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣기*/}
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage}/>
            <Stack.Screen name="AboutPage" component={AboutPage}/>
            <Stack.Screen name="LikePage" component={LikePage}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;