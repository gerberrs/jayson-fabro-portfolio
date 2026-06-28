import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [text, setText] = useState('');
  const [isFading, setIsFading] = useState(false);
  const fullText = '> loading_portfolio.exe';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setIsFading(true), 400);
        setTimeout(() => onComplete(), 800); // 400ms pause + 400ms fade
      }
    }, 45); // ~1000ms total typing

    return () => clearInterval(typeInterval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[999] bg-[var(--paper)] flex flex-col items-center justify-center transition-opacity duration-400 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="font-['JetBrains_Mono'] text-[14px] text-[var(--ink)] flex items-center">
        {text}
        <span className="w-2 h-[1em] bg-[var(--accent)] ml-1 animate-pulse inline-block"></span>
      </div>
      <div className="mt-5 w-48 h-[2px] bg-[var(--line)] relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-[var(--ink)] animate-[loaderFill_1.2s_ease-out_forwards]"></div>
      </div>
    </div>
  );
}
