export type ToastColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface AppToast {
  id: number;
  title?: string;
  message: string;
  color?: ToastColor;
  delay?: number;
}
