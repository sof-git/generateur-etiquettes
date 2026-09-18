export interface IImage {
  id: number;
  src: string;
  file: File | null;
  name: string;
}
export interface Props {
  picturesList: IImage[];
}
export type LabelSize = "large" | "small";

export interface ILabel {
  id: number;
  size: LabelSize;
}

export type CropType = "circle" | "square" | "none";

export interface CropOptions {
  type: CropType;
}

export interface ImageRenderOptions {
  crop: "circle" | "square" | "none";
  fontSizeRatio?: number;
  bottomOffsetRatio?: number;
  addName?: boolean
}

export interface CropChange {
  coordinates: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  canvas: HTMLCanvasElement;
}

export type pictureBorders = "dotted" | "solid" | "dashed";
