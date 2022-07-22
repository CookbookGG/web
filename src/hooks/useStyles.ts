import { useEuiTheme } from '@elastic/eui';

export default styles => {
  const { euiTheme } = useEuiTheme();
  return styles(euiTheme);
};
