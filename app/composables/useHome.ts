type Menu = 'home' | 'Outil de recadrage' | 'Mise en page des étiquettes'

export const useHome = ()=>{
    const homeTitle = "Générateur d'étiquettes";
    const menu = useState<'home' | 'picture' | 'labels'>(
        'menu',
        () => 'home'
    )
    const navigation = ref<Menu[]>(['home','Outil de recadrage','Mise en page des étiquettes']);
    
    return {
        homeTitle,
        menu,
        navigation
    }
}