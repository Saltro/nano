import user from './user';
import work from './work';
import recommendation from '@/request/recommendation';

export default {
  ...user,
  ...work,
  ...recommendation,
};
