export const useColorPicker = ()=>{
    const borderColor = useState('borderColor',()=>ref(null));
    return {
        borderColor,
    }
}