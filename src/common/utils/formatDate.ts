import moment from 'moment';
import 'moment/locale/es';

export const formatDate = (datetime: string) => {
  moment.locale('es');
  let date = moment(datetime);
  return date.format('LLLL');
};
