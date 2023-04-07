import { NextPage } from 'next';
import AdminNav from '../../../components/common/AdminNav';

interface Props {}

const Admin: NextPage<Props> = () => {
  return (
    <div>
      <AdminNav />
    </div>
  );
};

export default Admin;
