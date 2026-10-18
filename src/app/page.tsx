const lotUrl = "https://www.reg.ru/domain/shop/lot/linebyline.ru";
const email = "photoburg@yandex.ru";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#121212] text-[#f4f1ea]">
      <header className="flex w-full min-w-0 items-center justify-between gap-3 px-5 py-5 sm:px-10 sm:py-7">
        <a href={lotUrl} target="_blank" rel="noopener noreferrer" className="text-sm tracking-wide text-[#f4f1ea] sm:text-base">
          linebyline.ru
        </a>
        <a
          href={lotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-[9.2rem] rounded-full border border-[#c6b48a] px-3 py-1 text-center text-[10px] leading-snug tracking-[0.08em] text-[#c6b48a] transition-colors hover:bg-[#c6b48a]/10 sm:max-w-none sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.16em]"
        >
          ДОМЕН ПРОДАЁТСЯ
        </a>
      </header>

      <section className="flex w-full min-w-0 flex-1 flex-col items-center justify-center px-5 pb-10 text-center">
        <p className="max-w-[16rem] text-[10px] tracking-[0.22em] text-[#c6b48a] sm:max-w-none sm:text-xs sm:tracking-[0.32em]">
          ВОЗМОЖНОСТЬ ДЛЯ ВАШЕГО ПРОЕКТА
        </p>
        <h1 className="mt-6 max-w-full text-[32px] font-light leading-none tracking-[-0.03em] sm:text-7xl lg:text-[92px]">
          linebyline.ru
        </h1>
        <p className="mt-6 max-w-[18rem] text-base text-[#f4f1ea]/85 sm:max-w-none sm:text-xl">
          Короткое имя. Пространство для большой идеи.
        </p>
        <a
          href={lotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#c6b48a]/90 px-7 py-3 text-sm text-[#f4f1ea] transition-colors hover:bg-[#c6b48a]/10 sm:text-base"
        >
          Обсудить покупку домена
          <span aria-hidden>→</span>
        </a>
      </section>

      <div className="px-5 sm:px-10">
        <svg viewBox="0 0 1200 36" className="h-9 w-full" fill="none" aria-hidden>
          <path
            d="M0 28 H860 C888 28 900 28 912 14 C924 0 944 0 956 14 C968 28 980 28 1008 28 H1200"
            stroke="#c6b48a"
            strokeWidth="1"
          />
        </svg>
      </div>

      <footer className="mt-8 flex flex-col gap-4 border-t border-white/15 px-5 py-6 text-[11px] tracking-[0.18em] text-[#9a9a9a] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>ПО ВОПРОСАМ ПРИОБРЕТЕНИЯ</p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 normal-case tracking-normal text-[#d7d7d7] hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M4 7 L12 13 L20 7" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            Напишите владельцу
          </a>
          <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden />
          <a href={`mailto:${email}`} className="tracking-normal text-[#d7d7d7] hover:text-white">
            {email}
          </a>
        </div>
      </footer>
    </main>
  );
}
