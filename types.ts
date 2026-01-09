
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChecklistCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface FormData {
  name: string;
  dob: string;
  gender: string;
  email: string;
  destinationCountry: string;
  phone: string;
  visaType: string;
  subType: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  dob?: string;
  gender?: string;
  email?: string;
  phone?: string;
  destinationCountry?: string;
  visaType?: string;
  subType?: string;
}

export interface FeedbackState {
  type: 'success' | 'error' | null;
  message: string;
  details?: string;
}
