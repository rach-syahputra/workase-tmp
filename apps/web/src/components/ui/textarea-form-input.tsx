import { Label } from '../shadcn-ui/label';
import { Textarea } from '../shadcn-ui/textarea';

interface TextareaFormInputProps {
  label: string;
  name: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
}

const TextareaFormInput: React.FC<TextareaFormInputProps> = ({
  label,
  name,
  rows = 4,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} rows={rows} onChange={onChange} value={value} />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default TextareaFormInput;
