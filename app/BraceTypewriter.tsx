'use client';

import { useEffect, useState } from 'react';

const PHRASES = [
  'encrypted messaging',
  'real-time calling',
  'opt-in translation',
  'your own NGN account',
  'licensed virtual cards',
  'coming soon',
];

const TYPE_MS = 55;
const DELETE_MS = 30;
const HOLD_MS = 1400;
const GAP_MS = 300;

export default function BraceTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    if (deleting && text === '') {
      const gap = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, GAP_MS);
      return () => clearTimeout(gap);
    }

    const step = setTimeout(
      () => {
        setText((t) =>
          deleting
            ? current.slice(0, t.length - 1)
            : current.slice(0, t.length + 1),
        );
      },
      deleting ? DELETE_MS : TYPE_MS,
    );
    return () => clearTimeout(step);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="inline-flex items-baseline text-accent">
      <span aria-hidden className="text-[var(--muted)]">
        {'{'}
      </span>
      <span className="mx-0.5">{text}</span>
      <span aria-hidden className="text-[var(--muted)]">
        {'}'}
      </span>
      <span aria-hidden className="cursor-blink ml-0.5 text-accent">
        _
      </span>
      <span className="sr-only">{PHRASES.join(', ')}</span>
    </span>
  );
}
