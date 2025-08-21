'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { TextField } from '@/src/shared/ui/TextField';
import { debounce } from '@/src/shared/helpers';
import { Icon } from '@/src/assets';

export function SearchProduct() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams || '');
    const searchValue = event.target.value;

    if (searchValue) {
      params.set('filter', searchValue);
    } else {
      params.delete('filter');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <TextField
      onChange={handleSearch}
      defaultValue={searchParams?.get('filter')?.toString()}
      icon={<Icon.Search />}
      placeholder={'Поиск'}
    />
  );
}