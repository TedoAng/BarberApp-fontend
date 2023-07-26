import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        MontseratBold: require('../assets/fonts/Montserrat-Bold.otf'),
        MontseratLight: require('../assets/fonts/Montserrat-Light.otf'),
        NotoSerifCondensed: require('../assets/fonts/NotoSerif-Condensed.ttf'),
        NotoSerifCondensedBlack: require('../assets/fonts/NotoSerif-CondensedBlack.ttf'),
        NotoSerifCondensedMediumItalic: require('../assets/fonts/NotoSerif-ExtraCondensedMediumItalic.ttf'),
        NotoSerifCondensedBlackItalic: require('../assets/fonts/NotoSerif-CondensedBlackItalic.ttf'),
        NotoSerifExtraLightItalic: require('../assets/fonts/NotoSerif-ExtraLightItalic.ttf'),
        NotoSerifExtraCondensedItalic: require('../assets/fonts/NotoSerif-ExtraCondensedItalic.ttf'),
        NotoSerifExtraCondensedBlackItalic: require('../assets/fonts/NotoSerif-ExtraCondensedBlackItalic.ttf'),

    })

    const onLayoutRootView = useCallback(async()=>{
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>;
};

export default Layout;
