import { Input } from '../shadcn-ui/input';
import { Label } from '../shadcn-ui/label';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  disabled,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
