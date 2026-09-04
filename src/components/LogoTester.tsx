import React, { useRef } from 'react';
import { ImagePlus, RefreshCw } from 'lucide-react';

interface LogoTesterProps {
  customLogoUrl: string | null;
  onLogoChange: (url: string | null) => void;
}

export const LogoTester: React.FC<LogoTesterProps> = ({ customLogoUrl, onLogoChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onLogoChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-white/95 backdrop-blur border border-slate-200 shadow-xl rounded-full px-3.5 py-1.5 transition-all" title="Provide or preview your custom logo">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFile}
        accept="image/*,.svg,.png,.jpg,.jpeg,.webp"
        style={{ display: 'none' }}
      />
      <button
        type="button"
        className="flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-blue cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <ImagePlus size={15} />
        <span>{customLogoUrl ? 'Change Provided Logo' : 'Upload / Replace Logo'}</span>
      </button>

      {customLogoUrl && (
        <button
          type="button"
          className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
          onClick={() => onLogoChange(null)}
          title="Reset to default image replica logo"
        >
          <RefreshCw size={13} />
        </button>
      )}
    </div>
  );
};

export default LogoTester;
