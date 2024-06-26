import React from 'react';
import Link from 'next/link';
const Footer = () => {
  const navItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Projetos',
      href: '/projetos',
    },
    {
      title: 'Contato',
      href: '/contato',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ];
  return (
    <footer className="py-5 border-y-[1px] border-y-zinc-500 flex gap-3 flex-wrap justify-between items-center">
      <ul className="text-zinc-700">
        <li className="flex gap-3 md:gap-6">
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                href={data.href}
                className="p-1 hover:underline"
              >
                {data.title}
              </Link>
            );
          })}
        </li>
      </ul>
      <p className="text-base leading-none">
        &copy; 2024 Romário J. Santos - Blumenau/SC, Brasil
      </p>
    </footer>
  );
};

export default Footer;
