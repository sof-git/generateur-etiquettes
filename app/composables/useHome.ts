interface Menu {
  value: 'home' | 'picture' | 'labels'
  label: string
}

export const useHome = ()=>{
    const homeTitle = "Générateur d'étiquettes";
    const menu = useState<'home' | 'picture' | 'labels'>(
    'menu',
    () => 'home'
    )
    const navigation = ref<Menu[]>([
        {
            value: 'home',
            label: 'Accueil'
        },
        {
            value: 'picture',
            label: 'Photos'
        },
        {
            value: 'labels',
            label: 'Générateur d’étiquettes'
        }
    ])
    return {
        homeTitle,
        menu,
        navigation
    }
}