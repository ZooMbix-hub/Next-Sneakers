'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { SearchField } from '@/src/shared/ui/SearchField';
import { debounce } from '@/src/shared/helpers';

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
    <SearchField
      onChange={handleSearch}
      defaultValue={searchParams?.get('filter')?.toString()}
    />
  );
}