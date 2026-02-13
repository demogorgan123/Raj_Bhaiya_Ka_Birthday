export interface Wish {
  id: number;
  name: string;
  message: string;
  role: string;
}

export interface Memory {
  id: number;
  title: string;
  description: string;
  icon: 'code' | 'party' | 'heart' | 'terminal';
}

declare global {
  interface Window {
    confetti: any;
  }
}