import React from "react";
import Sidebar from "./Sidebar"; 
import Header from "./Header";
import ChatAI from "./ChatAI";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#21212B] overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <ChatAI />
      </div>
    </div>
  );
};

export default Dashboard;
