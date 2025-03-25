import { HTMLInputTypeAttribute } from 'react';

import { Input } from '../shadcn-ui/input';
import { Label } from '../shadcn-ui/label';

interface DisabledFormInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value: string;
}

const DisabledFormInput: React.FC<DisabledFormInputProps> = ({
  label,
  type,
  name,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} value={value} disabled />
    </div>
  );
};

export default DisabledFormInput;
