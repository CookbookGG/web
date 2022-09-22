import { useEffect, useState } from 'react';
import { CookbookHome } from '../components/Cookbook/CookbookHome';
import { SidebarCookbooks } from '../components/Sidebar/SidebarCookbooks';
import { ROUTES } from '../constants/constants';
import { useStore } from '../store/store';
import HttpService from '../utils/HttpService';

const separateObject = obj => {
  const res = [];
  const entries = Object.entries(obj);
  entries.forEach(entry => {
    res.push({
      [entry[0]]: entry[1],
    });
  });
  return res;
};

const Index: React.FC = () => {
  const cookbooks = useStore(state => state.cookbooks);
  const [chefs, setChefs] = useState(null);
  useEffect(() => {
    const init = () => {
      HttpService.get(ROUTES.USERS).then(users => {
        // This whole shebang is to get all user objects which are chefs in any cookbook. Unsure if optimized but it works
        const cookbookRoles = cookbooks.flatMap(cookbook => cookbook.roles);
        let cookbookRoleArray = [];

        cookbookRoles.forEach(cookbook => {
          cookbookRoleArray = cookbookRoleArray.concat(
            separateObject(cookbook)
          );
        });

        cookbookRoleArray = cookbookRoleArray.filter(
          item => Object.values(item)[0] === 'chef'
        );

        const uniqueRoleArray = [
          ...new Set(cookbookRoleArray.map(item => Object.keys(item)[0])),
        ];

        users = users.filter(user => uniqueRoleArray.includes(user.uid));

        setChefs(users);
      });
    };

    init();

    useStore.setState(state => (state.cookbook = null));
  }, [cookbooks]);

  if (cookbooks) {
    return (
      <div className="sidebarLayout">
        <SidebarCookbooks />
        {chefs && <CookbookHome chefs={chefs} />}
      </div>
    );
  }
  return <>Loading</>;
};

export default Index;
