import type {
  LabelSize,
  IImage,
  pictureBorders,
  CropChange,
  CropType,
} from "~/types/images";

export const usePicture = () => {
  const { renderImage } = useImageRenderer();
  const currentMenu = ref<"picture-menu" | "add-picture">("picture-menu");
  const labels: readonly LabelSize[] = [
    ...Array(9).fill("large"),
    ...Array(5).fill("small"),
  ];
  const labelSize = useState<LabelSize>("label-size", () => "large");
  const labelImg = useState<IImage>("image", () =>
    reactive({
      id: 0,
      src: "",
      file: null,
      name: "",
    }),
  );

  const cropperImg = useState<IImage>("cropper-image", () => ({
    id: 0,
    src: "",
    file: null,
    name: "",
  }));
  const file: Ref<File | null> = ref<File | null>(null);
  const croppedImage = useState<IImage>("exportImage", () =>
    reactive({
      id: 0,
      src: "",
      file: null,
      name: "",
    }),
  );
  const picturesList = useState<IImage[]>("pictures-list", () => []);

  const cropCanvas = ref<HTMLCanvasElement | null>(null);

  const nextPictureId = ref(1);
  const borders = useState<pictureBorders[]>("picture-borders", () => [
    "dotted",
    "solid",
    "dashed",
  ]);

  const showAddPicture = () => {
    currentMenu.value = "add-picture";
  };
  const showPictureMenu = () => {
    currentMenu.value = "picture-menu";
  };
  const manageLabels = (labels: Ref<number>, operation: string) => {
    if (operation == "add") {
      labels.value++;
    } else {
      labels.value--;
    }
  };

const addPictureToArray = async (
  cropperType: CropType,
  name: string,
  list: IImage[],
) => {
  const source = cropCanvas.value

  if (!source) return
  if (!name) return

  const data = await renderImage(
    source,
    {
      crop: cropperType,
      addName: true,
      fontSizeRatio: 0.18,
      bottomOffsetRatio: 0.08,
    },
    name,
  )

  if (!data) return

  croppedImage.value.src = data
  croppedImage.value.name = name
  croppedImage.value.file = null

  list.push({
    id: nextPictureId.value++,
    src: data,
    file: null,
    name,
  })
}

  const selectPicture = (selectedPicture: IImage,originalImage:IImage) => {
    console.log(selectedPicture,originalImage)
    Object.assign(originalImage, selectedPicture)
  };

  const removePicture = (index: number, list: IImage[]) => {
    list.splice(index, 1);
  };

  const change = (change: CropChange) => {
    const source = change.canvas;

    if (!source) return;

    const canvas = document.createElement("canvas");
    canvas.width = source.width;
    canvas.height = source.height;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.drawImage(source, 0, 0);

    cropCanvas.value = canvas;
  };

  return {
    currentMenu,
    showAddPicture,
    showPictureMenu,
    manageLabels,
    labels,
    labelImg,
    cropperImg,
    file,
    nextPictureId,
    labelSize,
    borders,
    croppedImage,
    change,
    picturesList,
    addPictureToArray,
    selectPicture,
    removePicture,
  };
};
