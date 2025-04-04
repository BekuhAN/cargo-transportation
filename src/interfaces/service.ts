import { BaseModel } from "./base-model";

export interface Service extends BaseModel  {
    title: string;
    description: string;
    image: string;
    icon: string;
    content: string;
  }