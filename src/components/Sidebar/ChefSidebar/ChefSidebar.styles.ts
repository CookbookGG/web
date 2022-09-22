import { css } from '@emotion/react';
import Colors from '../../../styles/Colors';

const chefsContainer = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  borderRadius: '10px',
  flexGrow: 1,
  justifyContent: 'space-around',
});

const chefsContainerTitle = css({
  fontWeight: 'bold',
  paddingLeft: '10px',
  paddingRight: '10px',
});

export default {
  chefsContainer,
  chefsContainerTitle,
};
