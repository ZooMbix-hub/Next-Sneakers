'use client';

import { useRouter } from 'next/navigation';
import { IconButton } from '@/src/shared/ui/IconButton';
import { Typography } from '@/src/shared/ui/Typography';
import { Icon } from '@/src/assets';
import s from './Header.module.css';

interface HeaderProps {
  title: string;
}

export function Header({title}: HeaderProps) {
  const router = useRouter();

  return (
    <div className={s.header}>
      <IconButton onClick={() => router.back()}>
        <Icon.ChevronLeft />
      </IconButton>
      <Typography variant={'h1'} weight={'bold'}>
        {title}
      </Typography>
    </div>
  );
}