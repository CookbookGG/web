import { EuiLoadingSpinner } from '@elastic/eui';
import * as React from 'react';
import { DISCORD, ENV } from '../constants/constants';
import { axios } from '../utils/HttpService';

const Login: React.FC = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const code = params.get('code');
  const baseUrl = window.location.origin;

  const login = async () => {
    if (!code) return;
    try {
      const res: any = await axios.post(`${ENV.API_URL}/login`, {
        code,
        redirectUrl: `${baseUrl}/login`,
      });
    } catch (err: any) {
    } finally {
      window.location.replace(baseUrl);
    }
  };

  React.useEffect(() => {
    if (!code) {
      // window.location.href = DISCORD.authUrl;
    } else {
      login();
    }
  }, []);

  return (
    <div className="login">
      <EuiLoadingSpinner size="xl" />
    </div>
  );
};

export default Login;
