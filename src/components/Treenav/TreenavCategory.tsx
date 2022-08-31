import {
  EuiDragDropContext,
  euiDragDropReorder,
  EuiDraggable,
  EuiDroppable,
  EuiIcon,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useStore } from '../../store/store';
import styles from './Treenav.styles';

export const TreenavCategory = ({ guide, index, open }) => {
  const { cookbook, guides } = useStore(state => state);
  const [collapsed, setCollapsed] = React.useState<boolean>(!open);
  const isDragDisabled = true;

  const router = useRouter();

  const onSectionDragEnd = async (
    { source, destination }: any,
    sections,
    guideIndex
  ) => {
    if (source && destination) {
      const items = euiDragDropReorder(
        sections,
        source.index,
        destination.index
      );
      guides[guideIndex].sections = items;
    }
  };

  if (!guide) return null;

  return (
    <EuiDraggable
      spacing="m"
      key={guide._id}
      index={index}
      draggableId={`id-${guide._id}`}
      disableInteractiveElementBlocking
      customDragHandle
      isDragDisabled={isDragDisabled}>
      {provided => {
        return (
          <div css={styles.guide}>
            <div
              css={styles.item}
              onClick={() => {
                setCollapsed(!collapsed);
              }}>
              <span {...provided.dragHandleProps}>
                <EuiIcon
                  type={!collapsed ? 'folderOpen' : 'folderClosed'}
                  css={styles.icon}
                />
              </span>
              <span css={styles.title}>{guide.title}</span>
            </div>

            <EuiDragDropContext
              onDragEnd={result =>
                onSectionDragEnd(result, guide.sections, index)
              }>
              <EuiDroppable
                droppableId="DROPPABLE_AREA2"
                spacing="l"
                css={styles.droppable}>
                {!collapsed ? (
                  <div>
                    {guide.sections.map((section, j) => {
                      return (
                        <EuiDraggable
                          spacing="m"
                          key={section.title}
                          index={j}
                          draggableId={`id-${section.title}`}
                          disableInteractiveElementBlocking
                          customDragHandle
                          isDragDisabled={isDragDisabled}>
                          {provided => {
                            console.log(section._id);
                            return (
                              <div
                                css={styles.itemInner}
                                onClick={() => {
                                  router.push(
                                    `${cookbook._id}/recipes/${
                                      guide._id
                                    }/sections/${encodeURIComponent(
                                      section.title
                                    )}`
                                  );
                                }}>
                                <span {...provided.dragHandleProps}>
                                  <EuiIcon type="document" css={styles.icon} />
                                </span>
                                <span css={styles.title}>{section.title}</span>
                              </div>
                            );
                          }}
                        </EuiDraggable>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </EuiDroppable>
            </EuiDragDropContext>
          </div>
        );
      }}
    </EuiDraggable>
  );
};
