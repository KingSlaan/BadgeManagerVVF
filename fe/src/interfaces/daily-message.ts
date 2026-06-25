export type DailyMessageType =
  | 'tip'
  | 'quote'
  | 'safety'
  | 'firefighter'
  | 'history'
  | 'curiosity';

export interface DailyMessage {
  type: DailyMessageType;
  title: string;
  text: string;
  author?: string;
}
