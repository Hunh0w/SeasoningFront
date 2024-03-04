export interface Profile {
  email: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  address: string;
  description: string;
  experiences: Experience[];
  availabilities: Availability[];
  references: Reference[];
}

export interface Register1 {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Register2 {
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

export interface Reference {
  name: string;
  position: string;
  email: string;
  phone: string;
}

export interface Availability {
  fromDate: string;
  toDate: string;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  descriptions: string;
}