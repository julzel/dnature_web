type CurrencyTagProps = {
  className?: string;
  value?: string | number;
  currency?: 'CRC' | 'USD';
};

const CurrencyFormat = ({
  className,
  value,
  currency = 'CRC',
}: CurrencyTagProps) => {
  const formatValue = (value: number | string) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <span className={className || ''}>
      <span>{currency === 'CRC' ? '₡' : '$'}</span>
      <span>{value ? formatValue(value) : ''}</span>
    </span>
  );
};

export default CurrencyFormat;
