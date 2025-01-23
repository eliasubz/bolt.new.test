export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}