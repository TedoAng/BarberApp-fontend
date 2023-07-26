import { View, FlatList, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS, icons } from '../../constants';
import { ScreenHeaderBtn, Svg  } from '../../components';
import { getServices } from '../../services/barber-service';
import AppContext from '../../context/app.context';

//Styles
import styles from '../../styles/style';

const welcomeView = () => {
    const router = useRouter();
    const [ serviceList, setServiceList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ hasIt, setHasIt ] = useState([]);
    
    const handleClick = (index, name, icon, group, price) => {
        if (isSelected(index)) {
            delete AppContext.cart[index];
            setHasIt(hasIt.filter(el => el != index));
        } else {
            setHasIt([...hasIt, index]);
            AppContext.cart = { 
                ...AppContext.cart,
                [index]:{
                name,
                icon,
                group,
                price
                }
            };
        }
    }

    const isSelected = (index) => {
        return Object.keys(AppContext.cart).includes(index.toString());
    }

    useEffect(() => {
        getServices()
        .then(res => {
            setServiceList(res);
            setIsLoading(false);
        })
        .catch((abort) => {
            setError(abort.message);
            setIsLoading(false);
        })

        return () => {
            AppContext.cart = {};
        }
    },[])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.bgMain}}>
            <StatusBar style="light"/>
            <Stack.Screen 
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.bgMain
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.chevronLeft} handlePress={() => router.push('/')} dimension="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerTitle: ""
                }}
            />
            
            <View style={styles.welcomeContainer}>
                <View style={styles.welcomeNameRow}>
                    <Text style={styles.welcome}>Здравей</Text>
                    <Text style={styles.welcomeName}>{AppContext.user.names.split(' ')[0]}!</Text>
                </View>
                <View style={styles.orangeBox}>
                <Text style={{...styles.welcome, fontSize: 15}}>От тук можеш да избереш процедурите и да резервираш своя час.</Text>
                </View>
            </View>
            <View style={styles.serviceContainer}>
                <Text style={{...styles.welcome, alignSelf:'flex-start', color: COLORS.bgMain}}>Процедури</Text>
                <FlatList
                    numColumns={3}
                    contentContainerStyle={styles.serviceRow} 
                    data={serviceList}
                    renderItem={({item, index}) => (
                        <TouchableOpacity style={ hasIt.includes(index) ? {...styles.selectedServiceBox, ...styles.serviceBox} : styles.serviceBox} onPress={ () => handleClick(index, item.name, item.icon, item.group, item.price) }>
                            {item.icon && Svg[item.icon]?.('#333')}
                            <Text style={{...styles.welcome, fontSize: 13, color: COLORS.bgMain, textAlign: 'center'}}>{ item.name }</Text>
                            <Text style={{...styles.welcome, fontSize: 13, color: COLORS.bgMain}}>{ item.price } лв.</Text>
                        </TouchableOpacity> 
                    )}
                />
                <TouchableOpacity style={styles.registerButton} onPress={()=> router.push('/summary')}>
                    <Text style={styles.btnText}>Напред</Text>
                </TouchableOpacity>
            </View>
            { isLoading && 
                <View style={styles.loadingPosition}>
                    <Image
                        source={require('../../assets/icons/ezgif-3-29e25ded23.gif')}
                        style={styles.loadingPole}
                    />
                    <Text style={styles.btnText}>Loading...</Text>
                </View>
            }
            { error && (
                <View style={styles.loadingPosition}>
                    <Text style={styles.btnText}>{ error }</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default welcomeView;
