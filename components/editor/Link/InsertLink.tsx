import { FC, useState } from 'react';
import Button from '../ToolBar/Button';
import { BsLink45Deg } from 'react-icons/bs';
import LinkForm, { linkOption } from './LinkForm';

interface Props {
  onSubmit(link: linkOption): void;
}

const InsertLink: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  const hideForm = () => setVisible(false);
  const showForm = () => setVisible(true);

  const handleSubmit = (link: linkOption) => {
    if (!link.url.trim()) return hideForm();
    onSubmit(link);
    hideForm();
  };

  return (
    <div
      onKeyDown={({ key }) => {
        if (key === 'Escape') hideForm();
      }}
      className="relative"
    >
      <Button onClick={visible ? hideForm : showForm}>
        <BsLink45Deg />
      </Button>

      <div className="absolute top-full mt-4 z-50 right-0">
        <LinkForm visible={visible} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default InsertLink;
