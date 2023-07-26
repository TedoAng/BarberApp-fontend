import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    containerCenter: {
        flex: 1,
        width: "100%",
        paddingTop: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    moustacheContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandName: {
        fontFamily: FONT.NotoSerifCBlack,
        fontSize: 25,
        color: COLORS.textMain,
        marginTop: 20,
        textTransform: 'uppercase' 
    },
    brandTitle: {
        fontFamily: FONT.NotoSerifCBlack,
        fontSize: 80,
        color: COLORS.textMain,
        marginTop: 10,
        textAlign: 'center',
        padding: 30
    },
    brandSlug: {
        fontFamily: FONT.NotoSerifExtraLightItalic,
        fontSize: 40,
        color: COLORS.textMain,
        textAlign: 'center',
        marginBottom: 30
    },
    registerButton: {
        padding: 5,
        paddingStart:20,
        paddingEnd:20,
        backgroundColor: COLORS.btnOrange,
        borderRadius: 30,
        marginTop: 10
    },
    btnText: {
        fontFamily: FONT.MontseratBold,
        fontSize: 20,
        color: COLORS.textMain,
        textTransform: 'uppercase' 
    },
    formContainer:{
        flex: 1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding: 20
    },
    input: {
        width:'100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: SIZES.small
    },
    inputLabel: {
        width:'100%',
        fontFamily: FONT.MontseratBold,
        fontSize: 15,
        color: COLORS.textMain,
        alignSelf: 'flex-start'
    },
    containerRow: {
        flexDirection: 'row',
        gap: 10,
    },
    welcomeContainer: {
        flex: 0.3,
        padding: 30
    },
    serviceContainer: {
        flex: 0.70,
        backgroundColor: COLORS.bgCard,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingBottom: 50
    },
    welcomeNameRow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'baseline'
    },
    welcome: {
        fontFamily: FONT.MontseratBold,
        fontSize: 20,
        color: COLORS.textMain
    },
    welcomeName: {
        fontFamily: FONT.NotoSerifCBlackItalic,
        fontSize: 40,
        color: COLORS.textMain
    },
    orangeBox: {
        backgroundColor: '#E08D41',
        padding: 15,
        borderRadius: SIZES.small,
        marginTop: 30
    },
    serviceRow: {
        justifyContent: 'center',
        width: '100%',
        gap: 40
    }, 
    serviceBox: {
        alignItems: 'center',
        width: '33%',
        padding: 5
    },
    selectedServiceBox: {
        backgroundColor: '#faf3e4',
        borderRadius: SIZES.small,
        transform: [{scale: 0.9}],
    },
    serviceBoxTitle: {
        fontFamily: FONT.MontseratBold,
        fontSize: 20,
        color: COLORS.textMain
    },
    summContainer: {
        flex: 1,
        padding: 15
    },
    summItem: {
    },
    choseDate: {
        fontFamily: FONT.NotoSerifExtraCondensedBlackItalic,
        fontSize: 30,
        color: COLORS.textMain,
        marginBottom: SIZES.small,
        marginTop: SIZES.small,
    },
    dateBox: {
        backgroundColor: COLORS.bgCard,
        borderRadius: SIZES.small,
        padding: 10,
        paddingTop: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
        flexDirection: 'row'
    },
    dateItem: {
        flex: 1,
        alignItems: 'center',
        width: 50
    },
    dateText: {
        fontFamily: FONT.NotoSerifExtraCondensedItalic,
        fontSize: 20,
        marginBottom: SIZES.small
    },
    selectedDate: {
        fontFamily: FONT.NotoSerifExtraCondensedItalic,
        fontSize: 20,
        marginBottom: SIZES.small,
        color: COLORS.btnOrange
    },
    selectedDateItem: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.textMain,
        borderRadius: 20,
        width: 50
    },
    timeBox: {

    },
    timeCol: {
        width:80,
        gap: 10,
        marginEnd: 10
    },
    timeTile: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.textMain,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: SIZES.small
    },
    timeTileText: {
        fontFamily: 'NotoSerifExtraCondensedItalic',
        fontSize: 20
    },
    timeSelected: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.btnOrange,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: SIZES.small
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.small,
    },
    summaryDate:{
        width:'40%',
        height:'100%',
        backgroundColor: COLORS.btnOrange,
        padding: 20,
        borderTopLeftRadius: SIZES.small,
        borderBottomLeftRadius: SIZES.small
    },
    summaryServices: {
        width:'60%',
        height:'100%',
        backgroundColor: COLORS.bgCard,
        padding: 20,
        borderTopRightRadius: SIZES.small,
        borderBottomRightRadius: SIZES.small
    },
    blackLine: {
        backgroundColor: 'black',
        width: '80%',
        height: 3,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5
    },
    loadingPole: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        opacity: 0.7
    },
    loadingPosition: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    }
});

export default styles;
