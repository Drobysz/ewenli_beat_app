import { ImageProps } from "next/image";

export type CrossProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  className?: string;
  width: number;
  height?: number;
};