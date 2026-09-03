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

interface CropChange {
  coordinates: {
    left: number
    top: number
    width: number
    height: number
  }
  canvas: HTMLCanvasElement
}

type pictureBorders = 'dotted' | 'solid' | 'dashed';

export const usePicture = ()=>{
    const currentMenu = ref<'picture-menu' | 'add-picture'>('picture-menu')
    const labels: readonly LabelSize[] = [
  ...Array(9).fill('large'),
  ...Array(5).fill('small'),
    ]
    const labelSize = useState<LabelSize>(
    'label-size',
    () => 'large'
    )
    const file = useState<File | null>();
    const img = useState<IImage>('image', () =>
    reactive({
        src: '../../public/img/defaultImg',
        file: null
    }))
    const croppedImage = useState<IImage>('exportImage',()=>
        reactive({
            src:'',
            file:null
        }));
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
    const change = (change: CropChange) => {
    const source = change.canvas

    if (!source) return

    const canvas = document.createElement('canvas')
    canvas.width = source.width
    canvas.height = source.height

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    const size = Math.min(canvas.width, canvas.height)
    const x = (canvas.width - size) / 2
    const y = (canvas.height - size) / 2

    ctx.beginPath()
    ctx.arc(
        x + size / 2,
        y + size / 2,
        size / 2,
        0,
        Math.PI * 2
    )

    ctx.clip()

    ctx.drawImage(source, 0, 0)

    const data = canvas.toDataURL('image/png')

    croppedImage.value.src = data
    }

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
        borders,
        croppedImage,
        change
    }
}