'use client';

import { store } from "@/redux/store";
import React from "react";
import { Provider  as ReduxProvider} from "react-redux";

export const Provider = ({children}:{children: React.ReactNode}) => {
  return (
   <ReduxProvider store={store}>
        {children}
    </ReduxProvider>
  );
}