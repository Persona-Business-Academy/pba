import Image from 'next/image';

const FilterButton = () => {
  return (
    <div>
      <Image src="/icons/filter_icon.svg" alt="Filter" width={20} height={20} />
    </div>
  );
};

export default FilterButton;
