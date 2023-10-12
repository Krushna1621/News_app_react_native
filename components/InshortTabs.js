import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import DiscoverScreen from '../Screens/DiscoverScreen'
import NewsScreen from '../Screens/NewsScreen'
// import Krushna from '../Screens/Krushna'
import TopNavigation from './TopNavigation'
export default function InshortTabs() {
    const layout=useWindowDimensions()
    const[index,setIndex]=useState(1)
    const [routes]=useState([
        {key:"first",title:"discover"},
        {key:"second",title:"News"},
    ])
     
    const renderScene=SceneMap({
        first:DiscoverScreen,
        second:NewsScreen,
    })
      
    return (
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
         renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
      />
    )
}