import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Rinor',
          lastName: 'Jahaj',
          areas: ['frontend', 'backend'],
          description: 'This is the desc',
          hourlyRate: 10
        },
        {
          id: 'c2',
          firstName: 'Filan',
          lastName: 'Fisteku',
          areas: ['devops', 'database'],
          description: 'This is the desc',
          hourlyRate: 10
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
