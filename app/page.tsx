"use client";

import Editor from "@/ui/editor";
import Header from "./components/header"
import Sidebar from "./components/sidebar"


export default function Page() {
  return (
    <>
      
        <Header/>
      <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(7vh)]">
      <Editor />
      <Sidebar/>
      
</div>

      
    </>
  );
}

