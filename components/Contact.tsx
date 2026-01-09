
import React from 'react';
import { MapPin, Phone, Mail, CheckCircle2, X, Calendar, AlertCircle, WifiOff, PartyPopper, ArrowLeft, MessageSquare, ChevronDown, Sparkles, Clock, ShieldCheck, Globe } from 'lucide-react';
import { useContactContext } from '../ContactContext';
import { FormData } from '../types';

const Contact: React.FC = () => {
  const { 
    formData, 
    errors, 
    isSubmitting, 
    feedback, 
    updateField, 
    submitForm, 
    resetForm 
  } = useContactContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateField(e.target.name as keyof FormData, e.target.value);
  };

  const subTypeOptions: Record<string, string[]> = {
    'Foundation': ['Arts', 'Science', 'Business', 'Engineering'],
    'Bachelor': ['Computer Science', 'BBA', 'Engineering', 'Architecture', 'Hospitality', 'Psychology'],
    'Master': ['MBA', 'Data Science', 'Education', 'Public Health', 'IT'],
    'PhD': ['Research (Any Subject)', 'Professional Doctorate'],
    'Professional': ['Visa Stamping', 'Work Permit Renewal', 'Documentation Only', 'Other Support']
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 border border-slate-200 shadow-sm relative pt-16 pb-12 px-6 md:px-12 rounded-sm min-h-[600px] flex flex-col">
          {/* Section Header */}
          <div className="absolute top-0 left-0 right-0 py-6 flex justify-center items-center bg-white border-b border-slate-200">
             <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase flex items-center gap-3">
               <span className="w-8 h-1 bg-amber-500"></span>
               Apply Now
               <span className="w-8 h-1 bg-amber-500"></span>
             </h2>
          </div>
          
          <div className="absolute top-[72px] right-0 z-10">
             <button 
              onClick={resetForm}
              className="bg-slate-900 text-white px-6 py-3 text-xs font-black flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95"
             >
               {feedback.type === 'success' ? 'নতুন আবেদন' : 'ফর্ম মুছুন'} <X className="h-4 w-4" />
             </button>
          </div>

          <div className="mt-12 border border-slate-300 bg-white shadow-2xl shadow-slate-200/50 flex-grow flex flex-col overflow-hidden">
            {/* Success View */}
            {feedback.type === 'success' ? (
              <div className="flex-grow flex flex-col items-center justify-center p-8 md:p-16 text-center animate-in fade-in zoom-in-95 duration-700">
                <div className="relative mb-8">
                  <div className="bg-green-100 p-8 rounded-full animate-bounce">
                    <CheckCircle2 className="h-24 w-24 text-green-600" />
                  </div>
                  <Sparkles className="absolute -top-2 -right-2 h-10 w-10 text-amber-400 animate-pulse" />
                  <PartyPopper className="absolute -bottom-2 -left-2 h-10 w-10 text-indigo-500 animate-pulse delay-75" />
                </div>
                
                <h3 className="text-4xl font-black text-slate-900 mb-4">অভিনন্দন! আবেদনটি জমা হয়েছে।</h3>
                <p className="text-xl text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                  {feedback.message} <br />
                  <span className="text-indigo-600 font-bold">{feedback.details}</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-indigo-100 p-3 rounded-xl mb-4 text-indigo-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">যাচাইকরণ</h4>
                    <p className="text-xs text-slate-500">২৪ ঘণ্টার মধ্যে তথ্য যাচাই সম্পন্ন হবে</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-xl mb-4 text-green-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">যোগাযোগ</h4>
                    <p className="text-xs text-slate-500">প্রতিনিধি আপনাকে কল বা মেসেজ করবেন</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                    <div className="bg-amber-100 p-3 rounded-xl mb-4 text-amber-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">নিরাপত্তা</h4>
                    <p className="text-xs text-slate-500">আপনার তথ্য আমাদের কাছে সুরক্ষিত</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <button 
                    onClick={resetForm}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-black py-5 px-8 uppercase transition-all transform active:scale-95 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="h-5 w-5" /> পুনরায় আবেদন
                  </button>
                  <a 
                    href="https://wa.me/8801311998527"
                    target="_blank"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black py-5 px-8 uppercase transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  >
                    হোয়াটসঅ্যাপ আপডেট
                  </a>
                </div>
              </div>
            ) : (
              /* Form View */
              <div className="p-8 md:p-12">
                {feedback.type === 'error' && (
                  <div className="mb-10 p-6 bg-red-50 border-l-8 border-red-500 text-red-800 flex items-start gap-4 animate-in shake duration-500">
                    <AlertCircle className="h-8 w-8 text-red-500 shrink-0" />
                    <div>
                      <p className="font-black text-xl mb-1">{feedback.message}</p>
                      <p className="text-sm opacity-90 font-medium">{feedback.details}</p>
                    </div>
                  </div>
                )}

                <form className="space-y-10" onSubmit={submitForm} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Full Name *</label>
                      <input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        type="text" 
                        autoComplete="name"
                        placeholder="আপনার পূর্ণ নাম"
                        className={`w-full px-5 py-4 bg-slate-50 border-b-2 ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-slate-900 transition-all font-bold text-lg`}
                      />
                      {errors.name && <p className="text-xs text-red-600 font-bold mt-1 flex items-center gap-1 animate-in slide-in-from-left-2"><AlertCircle className="h-3 w-3" /> {errors.name}</p>}
                    </div>

                    {/* Date of Birth */}
                    <div className="space-y-2 relative">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Date of birth *</label>
                      <div className="relative">
                        <input 
                          name="dob" 
                          value={formData.dob} 
                          onChange={handleInputChange} 
                          type="date" 
                          className={`w-full px-5 py-4 bg-slate-50 border-b-2 ${errors.dob ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-slate-900 appearance-none transition-all font-bold text-lg`}
                        />
                        <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.dob && <p className="text-xs text-red-600 font-bold mt-1 flex items-center gap-1 animate-in slide-in-from-left-2"><AlertCircle className="h-3 w-3" /> {errors.dob}</p>}
                    </div>

                    {/* Gender */}
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Gender *</label>
                      <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleInputChange} 
                        className="w-full px-5 py-4 bg-slate-50 border-b-2 border-slate-200 focus:outline-none focus:border-slate-900 appearance-none transition-all font-bold text-lg"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Email Address *</label>
                      <input 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        type="email" 
                        autoComplete="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        className={`w-full px-5 py-4 bg-slate-50 border-b-2 ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-slate-900 transition-all font-bold text-lg`}
                      />
                      {errors.email && <p className="text-xs text-red-600 font-bold mt-1 flex items-center gap-1 animate-in slide-in-from-left-2"><AlertCircle className="h-3 w-3" /> {errors.email}</p>}
                    </div>

                    {/* Destination Country */}
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Current Location *</label>
                      <div className="flex gap-0">
                        <div className="flex items-center gap-2 px-4 bg-slate-100 border-b-2 border-slate-200">
                          <img src="https://flagcdn.com/w20/bd.png" alt="BD" className="h-4" />
                          <span className="text-sm">▼</span>
                        </div>
                        <select 
                          name="destinationCountry" 
                          value={formData.destinationCountry} 
                          onChange={handleInputChange} 
                          className="w-full px-5 py-4 bg-slate-50 border-b-2 border-slate-200 focus:outline-none focus:border-slate-900 appearance-none transition-all font-bold text-lg"
                        >
                          <option value="Bangladesh (বাংলাদেশ)">Bangladesh (বাংলাদেশ)</option>
                          <option value="Malaysia">Malaysia</option>
                        </select>
                      </div>
                    </div>

                    {/* Your Phone */}
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Phone Number *</label>
                      <div className="flex gap-0">
                        <div className="flex items-center gap-2 px-4 bg-slate-100 border-b-2 border-slate-200">
                          <img src="https://flagcdn.com/w20/bd.png" alt="BD" className="h-4" />
                          <span className="text-sm font-black">+880 ▼</span>
                        </div>
                        <input 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          type="tel" 
                          placeholder="017XXXXXXXX"
                          autoComplete="tel"
                          className={`w-full px-5 py-4 bg-slate-50 border-b-2 ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-slate-900 transition-all font-bold text-lg`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-600 font-bold mt-1 flex items-center gap-1 animate-in slide-in-from-left-2"><AlertCircle className="h-3 w-3" /> {errors.phone}</p>}
                    </div>
                  </div>

                  {/* Visa Type & Sub Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Visa/Support Category *</label>
                      <div className="relative">
                        <select 
                          name="visaType" 
                          value={formData.visaType} 
                          onChange={handleInputChange} 
                          className={`w-full px-5 py-4 bg-slate-50 border-b-2 ${errors.visaType ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-slate-900 appearance-none transition-all font-bold text-lg`}
                        >
                          <option value="">-- নির্বাচন করুন --</option>
                          <option value="Foundation">Foundation</option>
                          <option value="Bachelor">Bachelor</option>
                          <option value="Master">Master</option>
                          <option value="PhD">PhD</option>
                          <option value="Professional">Professional Support</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.visaType && <p className="text-xs text-red-600 font-bold mt-1 flex items-center gap-1 animate-in slide-in-from-left-2"><AlertCircle className="h-3 w-3" /> {errors.visaType}</p>}
                    </div>

                    <div className={`space-y-2 transition-all duration-500 ${formData.visaType ? 'opacity-100 translate-y-0' : 'opacity-40 pointer-events-none'}`}>
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Detailed Service/Program *</label>
                      <div className="relative">
                        <select 
                          name="subType" 
                          value={formData.subType} 
                          onChange={handleInputChange} 
                          disabled={!formData.visaType}
                          className={`w-full px-5 py-4 bg-slate-50 border-b-2 ${errors.subType ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-slate-900 appearance-none transition-all font-bold text-lg`}
                        >
                          <option value="">-- বিস্তারিত নির্বাচন করুন --</option>
                          {formData.visaType && subTypeOptions[formData.visaType]?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.subType && <p className="text-xs text-red-600 font-bold mt-1 flex items-center gap-1 animate-in slide-in-from-left-2"><AlertCircle className="h-3 w-3" /> {errors.subType}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest">Additional Message (Optional)</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="আপনার যদি আরও কিছু জিজ্ঞাসা করার থাকে..."
                      rows={4}
                      className="w-full px-5 py-4 bg-slate-50 border-b-2 border-slate-200 focus:outline-none focus:border-slate-900 transition-all font-medium text-lg resize-none"
                    />
                  </div>

                  {/* Action */}
                  <div className="flex justify-center pt-8">
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="group relative bg-slate-900 hover:bg-black text-white px-20 py-6 overflow-hidden transition-all transform active:scale-95 disabled:opacity-70"
                    >
                      <div className="relative z-10 flex items-center gap-4 text-2xl font-black tracking-[0.2em]">
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            প্রসেসিং...
                          </>
                        ) : 'আবেদন জমা দিন'}
                      </div>
                      <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-indigo-600/20"></div>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Support Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="flex items-center gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
             <div className="bg-slate-900 text-white p-3 rounded-2xl shrink-0">
               <Globe className="h-6 w-6" />
             </div>
             <div>
               <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">Owner (WhatsApp)</h4>
               <a href="https://wa.me/60183172275" target="_blank" className="font-bold text-slate-600 text-sm hover:text-indigo-600 transition-colors">+60 18-317 2275</a>
             </div>
           </div>
           <div className="flex items-center gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
             <div className="bg-slate-900 text-white p-3 rounded-2xl shrink-0">
               <Phone className="h-6 w-6" />
             </div>
             <div>
               <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">Manager (WhatsApp)</h4>
               <a href="https://wa.me/8801311998527" target="_blank" className="font-bold text-slate-600 text-sm hover:text-indigo-600 transition-colors">01311-998527</a>
             </div>
           </div>
           <div className="flex items-center gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
             <div className="bg-slate-900 text-white p-3 rounded-2xl shrink-0">
               <Mail className="h-6 w-6" />
             </div>
             <div>
               <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">Email Support</h4>
               <a href="mailto:mahamuddinnabi@gmail.com" className="font-bold text-slate-600 text-sm hover:text-indigo-600 transition-colors">mahamuddinnabi@gmail.com</a>
             </div>
           </div>
           <div className="flex items-center gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
             <div className="bg-slate-900 text-white p-3 rounded-2xl shrink-0">
               <MapPin className="h-6 w-6" />
             </div>
             <div>
               <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">Our Location</h4>
               <p className="font-bold text-slate-600 text-sm">ডিংগাদোবা মোড়, রাজশাহী</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
