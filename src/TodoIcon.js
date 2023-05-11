import { ReactComponent as CheckComponent } from './check.svg';
import { ReactComponent as DeleteComponent } from './delete.svg';

import './TodoIcon.css';

const iconTypes = {
  "check": (color) => <CheckComponent className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteComponent className="Icon-svg" fill={color} />
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${ type }`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };