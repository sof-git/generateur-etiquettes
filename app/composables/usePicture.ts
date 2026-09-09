interface IImage {
    id:number;
    src: string;
    file: File | null;
    name:string;
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
    const labelImg = useState<IImage>('image', () =>
    reactive({
        id:0,
        src: '',
        file: null,
        name:''
    }))

    const cropperImg = useState<IImage>('cropper-image', () => ({
        id: 0,
        src: '',
        file: null,
        name: ''
    }))    
    
    const croppedImage = useState<IImage>('exportImage',()=>
        reactive({
            id:0,
            src:'',
            file:null,
            name:''
        }));
    const picturesList = useState<IImage[]>(
        'pictures-list',
        ()=>[]
    );

    const cropCanvas = ref<HTMLCanvasElement | null>(null)

    const nextPictureId = ref(1)
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
            cropperImg.value.src = await handleFile(file.value);
            cropperImg.value.file = file.value;
        } 
    };

    const addPictureToArray = (
        name: string,
        newImage: IImage,
        list: IImage[]
        ) => {
        const source = cropCanvas.value

        if (!source) return
        if (!name) return

        const canvas = document.createElement('canvas')
        canvas.width = source.width
        canvas.height = source.height

        const ctx = canvas.getContext('2d')

        if (!ctx) return

        const size = Math.min(canvas.width, canvas.height)
        const x = (canvas.width - size) / 2
        const y = (canvas.height - size) / 2
        console.log("x et y: ",x,y)
        // Photo circulaire
        ctx.save()

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

        ctx.restore()

        // Nom proportionnel à la taille du crop
        const fontSize = size * 0.18
        const centerX = x + size / 2
        const bottomY = y + size
        ctx.fillStyle = 'white'
        ctx.font = `bold ${fontSize}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'

        ctx.fillText(
        name,
        centerX,
        bottomY - size * 0.08
        )

        // Génération de l'image finale
        const data = canvas.toDataURL('image/png')

        croppedImage.value.src = data
        croppedImage.value.name = name
        croppedImage.value.file = null

        // Ajout à la bibliothèque
        list.push({
            id: nextPictureId.value++,
            src: data,
            file: null,
            name
        })
        }

    const selectPicture = (selectedPicture:IImage) =>{
        labelImg.value = selectedPicture;
    }

    const removePicture = (index:number,list:IImage[])=>{
        list.splice(index,1);
    }

    const change = (change: CropChange) => {
    const source = change.canvas

    if (!source) return

    const canvas = document.createElement('canvas')
    canvas.width = source.width
    canvas.height = source.height

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    ctx.drawImage(source, 0, 0)

    cropCanvas.value = canvas
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
        labelImg,
        cropperImg,
        labelSize,
        borders,
        croppedImage,
        change,
        picturesList,
        addPictureToArray,
        selectPicture,
        removePicture,
    }
}