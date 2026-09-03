export const useHome = ()=>{
    const homeTitle = "Menu principal de la meilleur app de perce-neige ";
    const menu = ref<'home' | 'picture' | 'labels'>('home')
    
    return {
        homeTitle,
        menu
    }
}