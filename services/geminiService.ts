export class VisaAiService {
  async sendMessage(message: string): Promise<string> {
    const msg = message.toLowerCase();
    
    // Simulate thinking delay (AI এর মতো একটু সময় নিয়ে উত্তর দেবে)
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (msg.includes("খরচ") || msg.includes("টাকা") || msg.includes("fee") || msg.includes("cost")) {
      return "মালয়েশিয়ায় টিউশন ফি ইউনিভার্সিটি ও সাবজেক্ট ভেদে ভিন্ন হয়। বছরে সাধারণত ২-৪ লক্ষ টাকা লাগতে পারে। সঠিক হিসাব জানতে +60 18-317 2275 (হোয়াটসঅ্যাপ) নম্বরে মোহনা ম্যামের সাথে কথা বলুন।";
    }
    
    if (msg.includes("স্কলারশিপ") || msg.includes("scholarship") || msg.includes("mis")) {
      return "হ্যাঁ! মালয়েশিয়ায় MIS স্কলারশিপের মাধ্যমে সম্পূর্ণ ফ্রিতে মাস্টার্স বা পিএইচডি করা সম্ভব। আপনার সিজিপিএ ৩.০০+ এবং আইইএলটিএস (IELTS) ৬.০ থাকলে আবেদন করতে পারবেন।";
    }
    
    if (msg.includes("বয়স") || msg.includes("age")) {
      return "ব্যাচেলরের জন্য সাধারণত ১৮-২৪ বছর এবং মাস্টার্সের জন্য ৪০ বছর পর্যন্ত আবেদন করা যায়। আপনার প্রোফাইলটি আমাদের পাঠালে আমরা বিস্তারিত বলতে পারব।";
    }

    if (msg.includes("যোগাযোগ") || msg.includes("অফিস") || msg.includes("address") || msg.includes("location")) {
      return "আমাদের অফিস মালয়েশিয়ার কুয়ালালামপুরে (Lot 1.22, Plaza Berjaya, Bukit Bintang)। আপনি +60 18-317 2275 নম্বরে সরাসরি মোহনা ইয়াসমিন (Head of Business Development)-এর সাথে কথা বলতে পারেন।";
    }

    if (msg.includes("কে আপনি") || msg.includes("who are you") || msg.includes("নাম কি")) {
      return "আমি EasyGlobal Education Consultancy-এর স্মার্ট এআই অ্যাসিস্ট্যান্ট। মোহনা ইয়াসমিন ম্যামের নির্দেশনায় আমি আপনাদের প্রাথমিক তথ্য দিয়ে সাহায্য করছি।";
    }

    if (msg.includes("নম্বর") || msg.includes("number") || msg.includes("ফোন") || msg.includes("call")) {
      return "মালয়েশিয়া: +60 18-317 2275 \nবাংলাদেশ: +880 1303-647198 \nইমেইল: mohona@egedumy.com";
    }

    // Default Reply
    return "আপনার প্রশ্নটি বুঝতে পেরেছি। তবে প্রতিটি শিক্ষার্থীর প্রোফাইল ভিন্ন হয়, তাই সঠিক গাইডলাইনের জন্য দয়া করে আমাদের হেড অফ বিজনেস ডেভেলপমেন্ট, মোহনা ইয়াসমিন ম্যামের হোয়াটসঅ্যাপে (+60 18-317 2275) সরাসরি মেসেজ দিন।";
  }
}
