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
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';
import styles from './Treenav.styles';
import { Section } from '../../models/Section';
import { Guide } from '../../models/Guide';

interface TreenavCateGoryProps {
  guide: Guide;
  index: number;
  open: boolean;
}

export const TreenavCategory: React.FC<TreenavCateGoryProps> = ({
  guide,
  index,
  open,
}: TreenavCateGoryProps) => {
  const { cookbook, cookbooks, guides } = useStore(state => state);
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

  const onSectionClick = async (event: React.MouseEvent, section: Section) => {
    event.preventDefault(); // I've seen this used for a lot of onClick methods, does this do anything here/wanna explain what it is? LOL
    router.push({
      pathname: '/[cookbookId]/[guideId]/[sectionId]',
      query: {
        cookbookId: cookbook._id,
        guideId: guide._id,
        sectionId: encodeURIComponent(section.title),
      },
    });
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
                {!collapsed ? (
                  <BiChevronDown css={styles.icon} />
                ) : (
                  <BiChevronRight css={styles.icon} />
                )}
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
                            return (
                              <div
                                css={styles.itemInner}
                                onClick={event => {
                                  onSectionClick(event, section);
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
