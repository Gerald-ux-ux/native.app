import { Tabs } from "expo-router";
import React from "react";

import { tabsConfig } from "../components/tabs";
import TabIcon from "../components/tabs-icon";

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
