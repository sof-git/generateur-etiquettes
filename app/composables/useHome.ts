type Menu = 'home' | 'picture' | 'labels'

export const useHome = ()=>{
    const homeTitle = "Menu principal de la meilleur app de perce-neige ";
    const menu = useState<'home' | 'picture' | 'labels'>(
        'menu',
        () => 'home'
    )
    const navigation = ref<Menu[]>(['home','picture','labels']);
    
    return {
        homeTitle,
        menu,
        navigation
    }
}