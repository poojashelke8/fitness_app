// CategoryContext.js
import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const categories = ([
        {
            name: "Championship",
            image: "championship.jpg",
            description: "Description for Championship category",
        },
        {
            name: "Mindfulness",
            image: "mindfulness.jpg",
            description: "Description for Mindfulness category",
        },
        {
            name: "Yoga",
            image: "yoga.jpg",
            description: "Description for Yoga category",
        },
        {
            name: "Engage and educate",
            image: "engage.jpg",
            description: "Description for Engage and Educate category",
        },

    // Your category data here
    // Example structure: { name: 'Championship', image: 'championship.jpg', description: 'Description for Championship category' }
  ]);

  return (
    <CategoryContext.Provider value={{ categories}}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};
