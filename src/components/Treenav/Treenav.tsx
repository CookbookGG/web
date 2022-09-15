import * as React from 'react';
import { EuiDragDropContext, EuiDroppable, EuiIcon } from '@elastic/eui';

import { TreenavCategory } from './TreenavCategory';
import { useStore } from '../../store/store';
import { useRouter } from 'next/router';
import styles from './Treenav.styles';

export const Treenav: React.FC = () => {
  const { cookbook, user, getGuidesInCookbook } = useStore(state => state);
  const [guides, setGuides] = React.useState(getGuidesInCookbook());
  const router = useRouter();

  const onDragEnd = async ({ source, destination }: any) => {
    // if (source && destination) {
    //   const items = euiDragDropReorder(guides, source.index, destination.index);
    //   dispatch(updateGuides([...items]));
    //   await cookbookService.update(cookbook._id, user, {
    //     guides: items.map(item => item?._id),
    //   });
    // }
  };

  React.useEffect(() => {
    setGuides(getGuidesInCookbook());
  }, [cookbook]);

  const content = React.useMemo(() => {
    if (!guides) return [];
    return guides.map((guide, index) => (
      <TreenavCategory
        key={index}
        guide={guide}
        index={index}
        open={index === 0 || guides.length < 5}
      />
    ));
  }, [guides]);

  return (
    <div css={styles.treeNav}>
      {content && (
        <EuiDragDropContext onDragEnd={onDragEnd}>
          <div
            css={styles.nav}
            onClick={() => {
              router.push(`/${cookbook._id}`);
            }}>
            <EuiIcon type="home" css={styles.icon} />
            <span>Home</span>
          </div>
          <EuiDroppable
            droppableId="DROPPABLE_AREA"
            spacing="l"
            css={styles.droppable}>
            {content}
          </EuiDroppable>
        </EuiDragDropContext>
      )}
    </div>
  );
};
