'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence, color } from 'framer-motion';
import { redirect, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <span className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
              Romár.10
            </span>
          </Link>
        </div>
        <span className="absolute right-[15%] hidden sm:inline-flex items-center gap-1 text-xs text-[#111]">
          Disponivel para novos projetos
          <span>→</span>
        </span>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </div>
      </header>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
