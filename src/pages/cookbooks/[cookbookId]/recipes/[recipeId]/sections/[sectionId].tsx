import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { json } from 'stream/consumers';
import { useStore } from '../../../../../../store/store';
import { CookbookSection } from '../../../../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';
import { ROUTES } from '../../../../../../constants/constants';
import { SectionModel } from '../../../../../../models/Section';
import HttpService from '../../../../../../utils/HttpService';
import { Guide } from '../../../../../../models/Guide';

export const Section = () => {
  const router = useRouter();
  const { cookbookId, recipeId, sectionId } = router.query;
  const [section, setSection] = useState<SectionModel>(
    useStore.getState().section
  );

  const init = async (
    cookbookId: string | string[],
    recipeId: string | string[],
    sectionId: string | string[]
  ) => {
    console.log(router.query);
    let route = ROUTES.GUIDE(cookbookId, recipeId);

    // TODO: Should probably get the specific section from a section array, not the guide

    await HttpService.get(route).then((guide: Guide) => {
      useStore.getState().section = guide.sections.filter(
        (section: SectionModel) =>
          encodeURIComponent(section.title) == sectionId
      )[0];

      setSection(useStore.getState().section);

      console.log(useStore.getState());
    });
  };

  useEffect(() => {
    init(cookbookId, recipeId, sectionId);
  }, [sectionId]);

  if (section) {
    return (
      <>
        <CookbookSection title={section.title} body={section.body} />
      </>
    );
  } else {
    return <>Loading..</>;
  }
};

export default Section;
