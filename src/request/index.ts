import user from './user';
import work from './work';
import recommendation from '@/request/recommendation';
import detail from './detail';

export default {
  ...user,
  ...work,
  ...recommendation,
  ...detail
};
