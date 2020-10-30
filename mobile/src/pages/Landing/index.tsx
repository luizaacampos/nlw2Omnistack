import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import Styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api'


function Landing() {
    const { navigate } = useNavigation()
    const [ totalConnections, setTotalConnections ] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data

            setTotalConnections(total)
        })
    }, [])

    function handleNavigationToGiveClassesPage() {
        navigate('GiveClasses')
    }

    function handleNavigateToStudyPages() {
        navigate('Study')
    }

    return (
        <View style={Styles.container}>
            <Image style={Styles.banner} source={landingImg} />

            <Text style={Styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={Styles.titleBold}>o que deseja fazer?</Text>
            </Text>

            <View style={Styles.buttonsContainer}>
                <RectButton 
                onPress={handleNavigateToStudyPages} 
                style={[Styles.button, Styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={Styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                onPress={handleNavigationToGiveClassesPage} 
                style={[Styles.button, Styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={Styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={Styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    )
}

export default Landing