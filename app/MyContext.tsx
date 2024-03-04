"use client";

import { getAdminDetail } from "@/actions/admin.actions";
import { AdminType } from "@/lib/types/admin-types";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

export const myContext = createContext<AdminType | null>(null);

const MyContext = ({ children }: { children: React.ReactNode }) => {
  const { data } = useQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminDetail(),
  });

  const adminData: AdminType = data || {
    adminUserId: "",
    id: "",
    discord: "",
    education: "",
    email: "",
    facebook: "",
    github: "",
    imageUrl: "",
    instagram: "",
    introduction: "",
    linkedIn: "",
    location: "",
    name: "",
    position: "",
    skills: [],
    twitter: "",
    website: "",
    whatsapp: "",
  };
  return <myContext.Provider value={adminData}>{children}</myContext.Provider>;
};
export default MyContext;

export const useMyContext = () => useContext(myContext);
