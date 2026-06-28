export default function GradientBlobs() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-[0.12] blur-[90px]"
        style={{
          background: 'var(--accent)',
          top: '5%',
          left: '-5%',
          animation: 'blobDrift1 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-[0.08] blur-[90px]"
        style={{
          background: 'var(--ink)',
          top: '60%',
          right: '-5%',
          animation: 'blobDrift2 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.1] blur-[80px]"
        style={{
          background: 'var(--accent)',
          top: '130%',
          left: '20%',
          animation: 'blobDrift3 20s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes blobDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.1); }
        }
        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -30px) scale(1.1); }
        }
        @keyframes blobDrift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -40px) scale(1.05); }
        }
      `}</style>
    </div>
  );
}