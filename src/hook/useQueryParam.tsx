import { useRouter } from 'next/navigation';

const useQueryParams = () => {
  const router = useRouter();

  const setQueryParams = ({ key, value, addingFilter }: any) => {
    const currentUrl = new URL(window.location.href);
    const searchParams = currentUrl.searchParams;

    if (!addingFilter || searchParams.get(key)) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    router.push(currentUrl.href);
  };

  return { setQueryParams };
}

export default useQueryParams