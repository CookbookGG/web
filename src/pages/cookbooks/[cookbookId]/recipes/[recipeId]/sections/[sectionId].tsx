import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { json } from 'stream/consumers';
import { CookbookSection } from '../../../../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';
import { ROUTES } from '../../../../../../constants/constants';
import { SectionModel } from '../../../../../../models/Section';
import HttpService from '../../../../../../utils/HttpService';

export const Section = () => {
  const router = useRouter();
  const { cookbookId, recipeId, sectionId } = router.query;
  const [section, setSection] = useState<SectionModel>();

  const init = async (
    cookbookId: string | string[],
    recipeId: string | string[],
    sectionId: string | string[]
  ) => {
    let route = ROUTES.GUIDE(cookbookId, recipeId);

    const guide = await HttpService.get(route).then(guide => {
      let theSection = guide.sections.filter(
        section => section.title == sectionId
      )[0];
      setSection(theSection);
    });
  };

  useEffect(() => {
    init(cookbookId, recipeId, sectionId);
  }, [cookbookId]);

  if (section) {
    return (
      <>
        <CookbookSection
          title={section.title}
          body={section.body}></CookbookSection>
      </>
    );
  } else {
    return <>Loading..</>;
  }
};

export default Section;
