import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

type IconProps = {
  icon: IconProp;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ icon, onClick, className }: IconProps) => {
  return (
    <FontAwesomeIcon icon={icon} onClick={onClick} className={className} />
  );
};

export default Icon;
