import { Tabs } from "expo-router";
import React from "react";

import icons from "../../constants/icons";
import TabIcon from "../components/tabs-icon";

const tabsConfig = [
  {
    name: "home",
    icon: icons.home,
    title: "Home",
    headerShown: false,
  },
  {
    name: "bookmarks",
    icon: icons.bookmark,
    title: "Bookmarks",
    headerShown: false,
  },
  {
    name: "create",
    icon: icons.upload,
    title: "Create",
    headerShown: false,
  },
  {
    name: "profile",
    icon: icons.profile,
    title: "Profile",
    headerShown: false,
  },
];

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      {tabsConfig.map((tab) => (
        <Tabs.Screen

          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: tab.headerShown,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={tab.icon}
                color={color}
                name={tab.title}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
