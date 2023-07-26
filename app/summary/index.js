import { View, FlatList, ScrollView, SafeAreaView, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS, icons, SIZES } from '../../constants';
import { ScreenHeaderBtn, ReservationDay, Svg } from '../../components';
import { sendReservation, getReservations } from '../../services/barber-service';
import AppContext from '../../context/app.context';
import useDatesHook from '../../hook/useDatesHook';


import styles from '../../styles/style';

const summaryView = () => {

    const [pickedDate, setPickedDate] = useState({
        day: '-',
        month: '-',
        year: '-',
        date: '-',
        index: '-'
    });
    const [inputData, setInputData] = useState([]);
    const [times, setTimes] = useState([]);
    const [timeStyle, setTimeStyle] = useState({...styles.timeTile});
    const [selectedTime, setSelectedTime] = useState('-');
    const [ total, setTotal] = useState(0);
    const [reservations, setReservations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [confirm, setConfirm] = useState(false);
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const { getDays } = useDatesHook();


    const createTimes = (from, to) => {
        const arr = [];
  		let curr = from;
        for (let index = 0; index < (to - from) + 1; index++) {
                arr.push(curr);
          		curr ++;
        }
        setTimes(arr);
    }

    const handleSelected = (index, time) => {
        setSelectedTime(time);
    }

    const computeTotal = () => {
        Object.entries(AppContext.cart)
        .map(item => setTotal(curr => +(curr) + +(item[1].price)));
    }

    const printCart = () => {
        setIsLoading(true);
        setDisabled(true);
        const reservation = {
            reservation: JSON.stringify({services: {...AppContext.cart}, user:{...AppContext.user}}),
            date: `${pickedDate.year}-${pickedDate.month < 10 ? `0${pickedDate.month}` : pickedDate.month}-${pickedDate.date < 10 ? `0${pickedDate.date}` : pickedDate.date} ${selectedTime}:00`
        }

        sendReservation(reservation)
        .then( res => {
            if ( res === 200 ) {
                setIsLoading(false);
                setConfirm(true);
            }
        }); // to add confirmation
    }

    const isDisabled = (value) => {
        return reservations[`${pickedDate.year}-${pickedDate.month < 10 ? `0${pickedDate.month}` : pickedDate.month}-${pickedDate.date}`]?.includes(value); 
    }

    useEffect(() => {
        computeTotal();
        setInputData(getDays(8));
        getReservations().then(resp => {
            setReservations(resp);
            setIsLoading(false);
        });
    }, [])

    useEffect(() => {
        if (pickedDate.date !== '-') {
            createTimes(10, 19);
            setSelectedTime('-');
        }
    }, [pickedDate.date])

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
                        <ScreenHeaderBtn iconUrl={icons.chevronLeft} handlePress={() => router.push('/welcome')} dimension="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerTitle: ""
                }}
            />
            
            <View style={styles.summContainer}>
                <View style={styles.summItem}>
                    <Text style={styles.welcome}>Резервация</Text>
                    <Text style={styles.choseDate}>Избери дата:</Text>
                    <View style={styles.dateBox}>
                        <FlatList
                        data={inputData}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({item, index}) => (
                            <ReservationDay 
                                day = {item.day} 
                                date = {item.date}
                                month = {item.month}
                                year = {item.year}  
                                key = {index}  
                                setPickedDate = { setPickedDate }
                                btnStyle = {index === pickedDate?.index ? styles.selectedDateItem : styles.dateItem}
                                txtStyle = {index === pickedDate?.index ? styles.selectedDate : styles.dateText}
                                index = {index}
                            />
                        )}
                        keyExtractor={(item, index) => index}
                        />
                    </View>
                </View>
                <View style={styles.summItem}>
                    <Text style={styles.welcome}>Час</Text>
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false} 
                        style={{paddingTop: 10, paddingBottom: 10}}
                    >
                        {times.map((item, index) => (
                            <View style={styles.timeCol} key={item}>
                            <TouchableOpacity style={item+':00' === selectedTime ? styles.timeSelected : timeStyle} onPress={() => handleSelected(index, item+':00')} disabled={isDisabled(`${item+':00:00'}`)}>
                                <Text style={styles.timeTileText}>{isDisabled(`${item+':00:00'}`) ? 'зает' : item+':00'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={item+':30' === selectedTime ? styles.timeSelected : timeStyle} onPress={() => handleSelected(index+'.5', item+':30')} disabled={isDisabled(`${item+':30:00'}`)}>
                                <Text style={styles.timeTileText}>{isDisabled(`${item+':30:00'}`) ? 'зает' : item+':30'}</Text>
                            </TouchableOpacity>
                        </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.summItem}>
                    <Text style={styles.welcome}>Обощение</Text>
                    <View style={styles.summaryContainer}>
                        <View style={styles.summaryDate}>
                            <Text style={{...styles.dateText, color: 'white'}}>{pickedDate?.day}</Text>
                            <Text style={{...styles.dateText, color: 'white'}}>{pickedDate?.date}</Text>
                            <View style={styles.blackLine}/>
                            <Text style={styles.dateText}>{selectedTime}</Text>
                            { selectedTime !== '-' && 
                                <TouchableOpacity style={{...styles.registerButton, backgroundColor: COLORS.bgMain, width: 100, height:50, alignItems: 'center', justifyContent: 'center'}} onPress={printCart} disabled={disabled}>
                                    <Text style={styles.btnText}>OK</Text>
                                </TouchableOpacity>
                            }
                        </View>
                        <View style={{...styles.summaryServices, maxHeight:250}}>
                            <FlatList
                            data={Object.entries(AppContext.cart)}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => (
                                <View style={{...styles.serviceBox, width:'100%', alignItems: 'flex-start'}}>
                                    <Text style={{...styles.dateText, marginBottom: 0}}>{item[1].name}</Text>
                                    <Text style={{...styles.dateText, marginBottom: 0}}>{item[1].price} лв.</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item[0]}
                            />
                            <View style={styles.blackLine}/>
                            <Text style={styles.dateText}>Общо: { total.toFixed(2) } лв.</Text>
                        </View>
                    </View>
                </View>
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
            { confirm && 
                <View style={styles.loadingPosition}>
                    { Svg.Confirm() }
                    <Text style={{...styles.btnText, marginTop: 10}}>Успешно записахте часа!</Text>
                    <TouchableOpacity style={{...styles.registerButton, backgroundColor: COLORS.bgMain, width: 100, height:50, alignItems: 'center', justifyContent: 'center'}} onPress={() => setConfirm(false)}>
                        <Text style={styles.btnText}>OK</Text>
                    </TouchableOpacity>
                </View>
            }
        </SafeAreaView>
    );
};

export default summaryView;
