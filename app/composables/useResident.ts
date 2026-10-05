import type { IImage } from "@/types/images";
export const useResident = () => {
  const config = useRuntimeConfig();
  const { renderImage } = useImageRenderer();
  const title: Ref<string> = ref("Ajouter un résident");
  const file = ref<File | null>(null);
  const switchPage = useState("switchPage",()=>
    true
  )
  const residentPicture = useState<IImage>("residentPicture", () =>
    reactive({
      id: 0,
      src: `${config.app.baseURL}/img/defaultImg.png`,
      file: null,
      name: "",
    }),
  );
  const pictureTemplate = useState<IImage>('pictureTemplate', ()=>
    reactive({
      id: 0,
      src: `${config.app.baseURL}/img/defaultImg.png`,
      file: null,
      name: "",
    })
  )
  const residentsId = ref(0)
  const residentsPictureList = useState<IImage[]>("residentsPicturesList", () =>
    reactive([]),
  );
  const tab = ref('placemat');
  const addResident = async (image: IImage,list: IImage[]) => {
    const data = await renderImage(
      image,
      {
        crop: 'none',
        addName: true,
        fontSizeRatio: 0.2,
        bottomOffsetRatio: 0.03,
      },
      image.name
    )

    if (!data) return
    list.push({
      id: residentsId.value++,
      src: data,
      file: image.file,
      name: image.name,
    })
    console.log(list,residentsId)
  }
  return {
    title,
    file,
    tab,
    residentPicture,
    addResident,
    pictureTemplate,
    residentsPictureList,
    switchPage,
  };
};
