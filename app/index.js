import { View, ScrollView, SafeAreaView, Text, Image, Dimensions,  TouchableOpacity, TextInput, KeyboardAvoidingView, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS, icons, SIZES } from '../constants';
import { ScreenHeaderBtn, SvgComponent } from '../components';
import AppContext from '../context/app.context';

import styles from '../styles/style';

const Home = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: null,
        phone: null,
        names: null,
        error: null
    });
    const [register, setRegister] = useState(false);
    const fadeBtn = useRef(new Animated.Value(1)).current;
    const fadeForm = useRef(new Animated.Value(0)).current;

    const fadeOut = (value) => {
        Animated.timing(value, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const fadeIn = (value) => {
        Animated.timing(value, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const handleRegister = (value) => {
        const opposite = value === fadeBtn ? fadeForm : fadeBtn;

        fadeOut(value);

        setTimeout(()=> {
            setRegister(prev => !prev);
        },200)

        setTimeout(()=> {
            fadeIn(opposite);
        },200)

        setUser({
            email: null,
            phone: null,
            names: null,
            error: null
        });
    }

    const errorHandler = (checker) => {
        const subject = checker === 'Име' ? 'Невалидно' : 'Невалиден';
        setUser( current => ({...current, error: `${subject} ${checker}!`}));
    }

    const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleForward = () => {
        if (!validateEmail(user.email)) {
            errorHandler('Мейл');
            return;
        }
        if (!user.phone) {
            errorHandler('Телефон');
            return;
        }
        if (!user.names) {
            errorHandler('Име');
            return;
        }

        setUser( current => ({...current, error: null}));

        AppContext.user = {
            email: user.email,
            phone: user.phone,
            names: user.names
        }
        router.push('/welcome');
    }
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.bgMain}}>
            <StatusBar style="light"/>
            <Stack.Screen 
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.bgMain
                    },
                    headerShadowVisible: false,
                    headerLeft: () => {},
                    headerRight: () => {},
                    headerTitle: ""
                }}
            />
            <KeyboardAvoidingView 
            style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: "center"}} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            enabled   
            keyboardVerticalOffset={100}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center"}}>
                    <SvgComponent/>
                    <Text style={styles.brandName}>namebrand</Text>
                    <Text style={styles.brandTitle}>Barber Shop</Text>
                    { register ? 
                        (<Animated.View style={{...styles.formContainer, opacity: fadeForm}}>
                            <Text style={styles.inputLabel}>Мейл</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(e) => setUser({...user,email:e})}
                                value={user.email}
                                keyboardType="email-address"
                            />
                            <Text style={styles.inputLabel}>Телефон</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(e) => setUser({...user,phone:e})}
                                value={user.phone}
                                keyboardType="phone-pad"
                            />
                            <Text style={styles.inputLabel}>Име</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(e) => setUser({...user,names:e})}
                                value={user.names}
                            />
                            <Text style={{...styles.inputLabel, color: '#DA5D5D'}}>{user.error}</Text>
                            <View style={{...styles.containerRow, marginBottom: 10}}>
                                <TouchableOpacity style={styles.registerButton} onPress={ handleForward }>
                                    <Text style={styles.btnText}>Напред</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.registerButton} onPress={() => handleRegister(fadeForm)}>
                                    <Text style={styles.btnText}>Откажи</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>)
                    :
                        (<Animated.View style={{...styles.formContainer, opacity: fadeBtn}}>
                            <Text style={styles.brandSlug}>best style</Text>
                            <TouchableOpacity style={styles.registerButton} onPress={() => handleRegister(fadeBtn)}>
                                <Text style={styles.btnText}>резервирай</Text>
                            </TouchableOpacity>
                        </Animated.View>)
                    }
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Home;
