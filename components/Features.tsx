
import React from 'react';
import { ShieldCheck, Zap, Clock, CreditCard, Headphones } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300">
    <div className="shrink-0 text-yellow-500">
      {icon}
    </div>
    <span className="text-lg md:text-xl font-medium text-gray-200">{text}</span>
  </div>
);

const Features: React.FC = () => {
  const list = [
    { icon: <Clock className="w-8 h-8" />, text: "24×7 Gaming Available" },
    { icon: <Zap className="w-8 h-8" />, text: "Fastest Deposit & Withdrawal" },
    { icon: <CreditCard className="w-8 h-8" />, text: "Easy & Secure Payment Methods" },
    { icon: <ShieldCheck className="w-8 h-8" />, text: "Trusted & Reliable Platform" },
    { icon: <Headphones className="w-8 h-8" />, text: "Instant Telegram & Msg on WhatsApp" },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-royal font-bold text-center mb-16 gold-gradient">
          Why Choose TSK?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((item, idx) => (
            <div key={idx} className={idx === list.length - 1 ? 'md:col-span-2' : ''}>
              <FeatureItem {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </section>
  );
};

export default Features;
