
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FormData, FormErrors, FeedbackState } from './types';

interface ContactState {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  feedback: FeedbackState;
}

type ContactAction =
  | { type: 'UPDATE_FIELD'; name: keyof FormData; value: string }
  | { type: 'SET_ERRORS'; errors: FormErrors }
  | { type: 'SET_SUBMITTING'; value: boolean }
  | { type: 'SET_FEEDBACK'; feedback: FeedbackState }
  | { type: 'RESET_FORM' }
  | { type: 'CLEAR_FEEDBACK' };

interface ContactContextType extends ContactState {
  updateField: (name: keyof FormData, value: string) => void;
  submitForm: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  clearFeedback: () => void;
}

const TELEGRAM_BOT_TOKEN = '7974529959:AAGLoG3GzH7xcn-juDFnGsmNE4SWkQUkeOI';
const TELEGRAM_CHAT_ID = '6658445342';

const initialFormData: FormData = {
  name: '',
  dob: '',
  gender: 'Male',
  email: '',
  destinationCountry: 'Bangladesh (বাংলাদেশ)',
  phone: '',
  visaType: '',
  subType: '',
  message: ''
};

const initialState: ContactState = {
  formData: initialFormData,
  errors: {},
  isSubmitting: false,
  feedback: { type: null, message: '' }
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

function contactReducer(state: ContactState, action: ContactAction): ContactState {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: { 
          ...state.formData, 
          [action.name]: action.value,
          // Reset subType if visaType changes to ensure fresh validation
          ...(action.name === 'visaType' ? { subType: '' } : {})
        },
        errors: { ...state.errors, [action.name]: undefined },
        feedback: { type: null, message: '' }
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.value };
    case 'SET_FEEDBACK':
      return { ...state, feedback: action.feedback };
    case 'CLEAR_FEEDBACK':
      return { ...state, feedback: { type: null, message: '' } };
    case 'RESET_FORM':
      return { ...initialState };
    default:
      return state;
  }
}

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const validate = (): boolean => {
    const { formData } = state;
    const newErrors: FormErrors = {};
    
    // Name validation: Must not be empty, must be at least 3 chars
    if (!formData.name.trim()) {
      newErrors.name = 'আপনার পূর্ণ নাম প্রদান করুন';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'নাম অবশ্যই ৩ অক্ষরের বেশি হতে হবে';
    }

    // DOB validation: Must be selected and applicant must be at least 14 years old
    if (!formData.dob) {
      newErrors.dob = 'আপনার জন্ম তারিখ নির্বাচন করুন';
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 14) {
        newErrors.dob = 'আবেদনকারীর বয়স কমপক্ষে ১৪ বছর হওয়া আবশ্যক';
      } else if (age > 100) {
        newErrors.dob = 'দয়া করে একটি সঠিক জন্ম তারিখ প্রদান করুন';
      }
    }

    // Email validation: Proper regex format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'একটি ইমেইল ঠিকানা প্রদান করুন';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'দয়া করে একটি সঠিক ইমেইল ফরম্যাট ব্যবহার করুন (উদাঃ user@example.com)';
    }
    
    // Phone validation: Digits only, length check
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'আপনার ফোন নম্বরটি লিখুন';
    } else if (phoneDigits.length < 9 || phoneDigits.length > 13) {
      newErrors.phone = 'সঠিক ফোন নম্বর প্রদান করুন (৯-১৩ সংখ্যা)';
    }
    
    // Visa/Support type validation: Mandatory
    if (!formData.visaType) {
      newErrors.visaType = 'আপনার পছন্দের ক্যাটাগরি নির্বাচন করুন';
    }
    
    // Sub-type validation: Mandatory if a main type is selected
    if (formData.visaType && !formData.subType) {
      newErrors.subType = 'দয়া করে বিস্তারিত কোর্স বা সেবার ধরণ নির্বাচন করুন';
    }
    
    dispatch({ type: 'SET_ERRORS', errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const updateField = (name: keyof FormData, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', name, value });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Improved scrolling to first error
      setTimeout(() => {
        const firstErrorField = document.querySelector('[class*="border-red-500"]');
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return;
    }

    dispatch({ type: 'SET_SUBMITTING', value: true });
    
    const messageText = `
<b>🆕 নতুন আবেদনপত্র (Apply Now)</b>
━━━━━━━━━━━━━━━━━━
👤 <b>নাম:</b> ${state.formData.name}
📅 <b>জন্ম তারিখ:</b> ${state.formData.dob}
🚻 <b>লিঙ্গ:</b> ${state.formData.gender}
📧 <b>ইমেইল:</b> ${state.formData.email}
🌍 <b>দেশ:</b> ${state.formData.destinationCountry}
📞 <b>ফোন:</b> +880${state.formData.phone}
🎓 <b>ধরণ:</b> ${state.formData.visaType}
📚 <b>বিষয়:</b> ${state.formData.subType}
📝 <b>বার্তা:</b> ${state.formData.message || 'নেই'}
━━━━━━━━━━━━━━━━━━
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: messageText,
          parse_mode: 'HTML'
        })
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        dispatch({ 
          type: 'SET_FEEDBACK', 
          feedback: { 
            type: 'success', 
            message: 'আপনার আবেদনটি সফলভাবে জমা দেওয়া হয়েছে!',
            details: 'আমাদের প্রতিনিধি খুব শীঘ্রই আপনার ইমেইল বা হোয়াটসঅ্যাপে যোগাযোগ করবেন।'
          }
        });
      } else {
        throw new Error(result.description || 'Submission failed');
      }
    } catch (err) {
      dispatch({ 
        type: 'SET_FEEDBACK', 
        feedback: { 
          type: 'error', 
          message: 'আবেদন জমা দেওয়া সম্ভব হয়নি।',
          details: 'সার্ভারে সমস্যা হচ্ছে অথবা আপনার ইন্টারনেট সংযোগ নেই। দয়া করে সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন।'
        }
      });
    } finally {
      dispatch({ type: 'SET_SUBMITTING', value: false });
    }
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({ top: contactSection.offsetTop - 80, behavior: 'smooth' });
    }
  };
  
  const clearFeedback = () => dispatch({ type: 'CLEAR_FEEDBACK' });

  return (
    <ContactContext.Provider value={{ ...state, updateField, submitForm, resetForm, clearFeedback }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContactContext must be used within a ContactProvider');
  }
  return context;
};
