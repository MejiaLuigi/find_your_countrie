import { Nunito } from "next/font/google";

export const nunitoBold = Nunito({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-nunito-bold",
});
export const nunitoLight = Nunito({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-nunito-light",
});
export const nunitoSemiBold = Nunito({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-nunito-semi-bold",
});