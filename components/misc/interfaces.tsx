export interface Profile {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
  birth: string;
  genre: string;
}

export interface Register1 {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Register2 {
  name: string;
  surname: string;
  birth: string;
  genre: string;
}

export interface Register3 {
  phone: string;
  address: string;
  city: string;
  country: string;
}

export interface NavigationProps {
  navigation: any;
  route: any;
}
