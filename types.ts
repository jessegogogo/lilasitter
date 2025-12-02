export type Language = 'en' | 'zh';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  HOW_I_WORK = 'how-i-work',
  MEDICINES = 'medicines',
  SESSIONS = 'sessions',
  CONTACT = 'contact'
}

export interface ContentProps {
  lang: Language;
  avatarUrl?: string;
}