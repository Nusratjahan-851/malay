
import React from 'react';
import { University, Landmark, Briefcase, GraduationCap, Globe, Clock } from 'lucide-react';

const services = [
  {
    title: 'বিশ্বমানের ইউনিভার্সিটি',
    description: 'মালয়েশিয়ার কিউএস র‍্যাঙ্কিংভুক্ত ইউনিভার্সিটি থেকে পড়াশোনা করে পরবর্তীতে UK, USA বা অস্ট্রেলিয়ায় ক্রেডিট ট্রান্সফারের সুবিধা।',
    icon: University,
    color: 'bg-blue-500',
  },
  {
    title: 'এক্সপার্ট ভিসা প্রসেসিং',
    description: 'EMGS আবেদন থেকে শুরু করে স্টিকার ভিসা পর্যন্ত নিখুঁত তত্ত্বাবধান। MQA অ্যাক্রিডিটেশন নিশ্চিতে আমরা বদ্ধপরিকর।',
    icon: Landmark,
    color: 'bg-purple-500',
  },
  {
    title: 'ক্যারিয়ার ও জব সাপোর্ট',
    description: 'পড়াশোনা শেষে ১২ মাসের গ্র্যাজুয়েট পাস এবং আইটি, ইঞ্জিনিয়ারিং ও বিজনেসের মতো ডিমান্ডিং সাবজেক্টে জব অ্যাসিস্ট্যান্স।',
    icon: Briefcase,
    color: 'bg-green-500',
  },
  {
    title: 'পড়াশোনার পাশাপাশি কাজ',
    description: 'ভ্যাকেশন পিরিয়ডে সপ্তাহে সর্বোচ্চ ২০ ঘণ্টা পার্ট-টাইম কাজ করার সুযোগ, যা আপনার জীবনযাত্রার খরচ কমাতে সাহায্য করবে।',
    icon: GraduationCap,
    color: 'bg-amber-500',
  },
  {
    title: 'ইন্টারন্যাশনাল ক্রেডিট ট্রান্সফার',
    description: 'সহজেই মালয়েশিয়া থেকে আপনার ক্রেডিট ব্রিটেন, অস্ট্রেলিয়া বা কানাডায় ট্রান্সফার করার গাইডলাইন ও প্রসেসিং সাপোর্ট।',
    icon: Globe,
    color: 'bg-red-500',
  },
  {
    title: 'সস্তায় উন্নত জীবনমান',
    description: 'ইউরোপ-আমেরিকার তুলনায় অনেক কম খরচে বিশ্বমানের ডিগ্রি এবং উন্নত জীবনযাপনের নিশ্চয়তা।',
    icon: Clock,
    color: 'bg-indigo-500',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase">আমাদের বিশেষত্ব</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            কেন মালয়েশিয়াকে বেছে নেবেন?
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            উন্নত ক্যারিয়ার ও সাশ্রয়ী উচ্চশিক্ষার জন্য মালয়েশিয়া বর্তমান বিশ্বের অন্যতম শীর্ষ গন্তব্য।
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              <div className={`inline-flex p-3 rounded-2xl ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <service.icon className="h-32 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
