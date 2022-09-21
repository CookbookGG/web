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
    const init = async () => {
      const users = HttpService.get(ROUTES.USERS).then(res => {
        console.log(res);
        const cookbookRoles = cookbooks.flatMap(cookbook => cookbook.roles);

        let cookbookRoleArray = [];

        cookbookRoles.forEach(cookbook => {
          console.log(separateObject(cookbook));
          cookbookRoleArray = cookbookRoleArray.concat(
            separateObject(cookbook)
          );
        });

        const uniqueRoleArray = [
          ...new Map(cookbookRoleArray.map(item => [item[key], item])).values(),
        ];
        console.log(uniqueRoleArray);

        setChefs(res);
      });
    };

    init();

    useStore.setState(state => (state.cookbook = null));
  }, []);

  return (
    chefs && (
      <div className="sidebarLayout">
        <SidebarCookbooks />
        <CookbookHome chefs={chefs} />
      </div>
    )
  );
};

export default Index;
