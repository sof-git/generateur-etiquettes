interface IImage {
    src: string | File;
    file: File | null;
    border?:string;
}

type LabelSize = 'large' | 'small';

interface ILabel {
  id: number
  size: LabelSize
}

type pictureBorders = 'dotted' | 'solid' | 'dashed';

export const useComp = ()=>{
    const currentMenu = ref<'picture-menu' | 'add-picture'>('picture-menu')
    const labels: readonly LabelSize[] = [
  ...Array(10).fill('large'),
  ...Array(10).fill('small'),
  ...Array(10).fill('large')
    ]
    const labelSize = useState<LabelSize>(
    'label-size',
    () => 'large'
    )
    const file = useState<File | null>();
    const img = useState<IImage>('image', () =>
    reactive({
        src: '',
        file: null
    }))
    const borders = useState<pictureBorders[]>(
        'picture-borders',
        () => ['dotted', 'solid', 'dashed'])
    
    const showAddPicture = () => {
    currentMenu.value = 'add-picture'
    }
    const showPictureMenu = () => {
        currentMenu.value = 'picture-menu'
    }
    const manageLabels = (labels:Ref<number>,operation:string)=>{
        if(operation == "add"){
            labels.value++;
        } else {
            labels.value--;
        }
    }
    const handleFile = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const onFileChange = async () => {
        if (file.value) {
            console.log("enter file value before handleFile",file.value)
            img.value.src = await handleFile(file.value);
            img.value.file = file.value;
        } 
    };
    return {
        currentMenu,
        showAddPicture,
        handleFile,
        onFileChange,
        showPictureMenu,
        manageLabels,
        labels,
        file,
        img,
        labelSize,
        borders
    }
}