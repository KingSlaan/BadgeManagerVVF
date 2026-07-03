import { TemplateRef } from '@angular/core';

export interface HomeMenuCard {
  title: string;
  description?: string;
  icon: any;
  route: string | any[];
}


export interface HomeMenuSection {
  title: string;
  description?: string;
  icon: any;
  route?: string | any[];

  children?: HomeMenuCard[];

  contentTemplate?: TemplateRef<unknown>;
}
