import { css } from '@emotion/react';
import Colors from '../../styles/Colors';

const popup_container = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  position: 'absolute',
  right: 0,
  width: '350px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 1,
  padding: '15px 15px',
  marginRight: '10px',
  backgroundColor: Colors.backgroundAccent,
});

export default {
  popup_container,
};
