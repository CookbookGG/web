import { css } from '@emotion/react';

export const globalStyes = css`
  #__next,
  .guideBody {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .euiDraggable .euiDraggable__item.euiDraggable__item--isDisabled {
    cursor: pointer !important;
  }
  .euiDroppable--l {
    padding: 0;
  }

  .euiDraggable--m {
    padding: 0;
  }

  .droppable {
    background-color: transparent !important;
  }
`;
