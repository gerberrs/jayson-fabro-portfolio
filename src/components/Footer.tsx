export default function Footer() {
  return (
    <footer className="py-10 text-center bg-[var(--ink)] text-[var(--paper)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="font-['Archivo'] font-black text-[clamp(36px,9vw,92px)] tracking-[-0.03em] leading-none mb-5 text-[var(--paper)]">
          LET'S WORK<br />TOGETHER
        </div>
        <p className="font-['JetBrains_Mono'] text-[12px] text-[#cfcfcf] mt-7">
          © 2026 Jayson Q. Fabro · Digital Marketing &amp; E-Commerce Coordinator
        </p>
      </div>
    </footer>
  );
}