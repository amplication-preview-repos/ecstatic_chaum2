import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { WebsiteUserList } from "./websiteUser/WebsiteUserList";
import { WebsiteUserCreate } from "./websiteUser/WebsiteUserCreate";
import { WebsiteUserEdit } from "./websiteUser/WebsiteUserEdit";
import { WebsiteUserShow } from "./websiteUser/WebsiteUserShow";
import { AuthentificationList } from "./authentification/AuthentificationList";
import { AuthentificationCreate } from "./authentification/AuthentificationCreate";
import { AuthentificationEdit } from "./authentification/AuthentificationEdit";
import { AuthentificationShow } from "./authentification/AuthentificationShow";
import { DatabaseList } from "./database/DatabaseList";
import { DatabaseCreate } from "./database/DatabaseCreate";
import { DatabaseEdit } from "./database/DatabaseEdit";
import { DatabaseShow } from "./database/DatabaseShow";
import { ActivityRecommendationsList } from "./activityRecommendations/ActivityRecommendationsList";
import { ActivityRecommendationsCreate } from "./activityRecommendations/ActivityRecommendationsCreate";
import { ActivityRecommendationsEdit } from "./activityRecommendations/ActivityRecommendationsEdit";
import { ActivityRecommendationsShow } from "./activityRecommendations/ActivityRecommendationsShow";
import { ChatbotList } from "./chatbot/ChatbotList";
import { ChatbotCreate } from "./chatbot/ChatbotCreate";
import { ChatbotEdit } from "./chatbot/ChatbotEdit";
import { ChatbotShow } from "./chatbot/ChatbotShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MentalHealthSupport"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="WebsiteUser"
          list={WebsiteUserList}
          edit={WebsiteUserEdit}
          create={WebsiteUserCreate}
          show={WebsiteUserShow}
        />
        <Resource
          name="Authentification"
          list={AuthentificationList}
          edit={AuthentificationEdit}
          create={AuthentificationCreate}
          show={AuthentificationShow}
        />
        <Resource
          name="Database"
          list={DatabaseList}
          edit={DatabaseEdit}
          create={DatabaseCreate}
          show={DatabaseShow}
        />
        <Resource
          name="ActivityRecommendations"
          list={ActivityRecommendationsList}
          edit={ActivityRecommendationsEdit}
          create={ActivityRecommendationsCreate}
          show={ActivityRecommendationsShow}
        />
        <Resource
          name="Chatbot"
          list={ChatbotList}
          edit={ChatbotEdit}
          create={ChatbotCreate}
          show={ChatbotShow}
        />
      </Admin>
    </div>
  );
};

export default App;
