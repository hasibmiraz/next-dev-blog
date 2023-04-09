import { FC } from 'react';
import Button from '../ToolBar/Button';
import { BsLink45Deg } from 'react-icons/bs';

interface Props {}

const InsertLink: FC<Props> = (props): JSX.Element => {
  return (
    <Button>
      <BsLink45Deg />
    </Button>
  );
};

export default InsertLink;
