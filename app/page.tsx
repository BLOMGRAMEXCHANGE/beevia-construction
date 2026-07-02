import BraceTypewriter from './BraceTypewriter';

const FEATURES = [
  {
    tag: 'messaging',
    title: 'Secure messaging & calling',
    body: 'End-to-end encrypted chat and audio/video calls, with opt-in translation across five languages.',
  },
  {
    tag: 'account',
    title: 'Your own NGN account',
    body: 'A named virtual account in Naira, tied to your profile. Send or request money without leaving the conversation.',
  },
  {
    tag: 'identity',
    title: 'Licensed verification',
    body: 'Verified by an independent, licensed identity provider, never Beevia.',
  },
  {
    tag: 'cards',
    title: 'Virtual cards',
    body: 'Issue a virtual card linked to your account, masked by default, revealed only after authentication.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 text-fg">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10 max-w-5xl mx-auto w-full">
        <span className="text-lg font-bold tracking-tight">
          beevia<span className="text-accent">.</span>
        </span>
        <span className="hidden sm:inline text-xs text-[var(--muted)]">
          {'{ '}
          <span className="text-accent">coming soon</span>
          {' }'}
        </span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10">
        <div className="max-w-2xl w-full flex flex-col items-center text-center gap-8 py-14">
          <h1
            className="rise text-3xl sm:text-5xl font-bold leading-tight tracking-tight"
            style={{ animationDelay: '80ms' }}
          >
            Message. Call. Move money.
            <br />
            All in <span className=" text-[var(--muted)]">one</span> place.
          </h1>

          <div
            className="rise text-lg sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            <BraceTypewriter />
          </div>

          <p
            className="rise max-w-lg text-sm sm:text-base leading-7 text-[var(--muted)]"
            style={{ animationDelay: '220ms' }}
          >
            Beevia pairs end-to-end encrypted messaging and calling with a
            licensed NGN account of your own.
          </p>

          {/* <div
            className="rise inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-raised)] px-4 py-1.5 text-xs text-[var(--muted)]"
            style={{ animationDelay: '280ms' }}
          >
            <span className="text-accent">NGN</span>
            launching first in Nigeria &middot; more currencies to follow
          </div> */}
        </div>

        <div
          className="rise grid w-full max-w-4xl grid-cols-1 gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4"
          style={{ animationDelay: '340ms' }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.tag}
              className="flex flex-col gap-2 rounded border border-[var(--border)] bg-[var(--bg-raised)] p-5"
            >
              <span className="text-xs text-accent">
                {'{'}
                {f.tag}
                {'}'}
              </span>
              <h2 className="text-sm font-bold leading-5">{f.title}</h2>
              <p className="text-xs leading-5 text-[var(--muted)]">{f.body}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-[var(--border)] px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-xs text-[var(--muted-dim)] sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md leading-5">
            Beevia is not a bank. Financial services are provided by licensed
            third-party partners; Beevia never holds user funds directly.
          </p>
          <p>&copy; {new Date().getFullYear()} Beevia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
