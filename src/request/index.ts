import user from './user';
import recommendation from './recommend';
import anime from './anime';
import place from './place';

export default {
  ...user,
  ...recommendation,
  ...anime,
  ...place,
};
