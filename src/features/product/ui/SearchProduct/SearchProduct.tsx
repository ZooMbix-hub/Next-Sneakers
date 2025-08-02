'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { SearchField } from '@/src/shared/ui/SearchField';

export function SearchProduct() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams || '');
    const searchValue = event.target.value;

    if (searchValue) {
      params.set('search', searchValue);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <SearchField
      onChange={handleSearch}
      defaultValue={searchParams?.get('search')?.toString()}
    />
  );
}