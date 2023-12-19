"use client";
import { useState } from "react";

const FoodInfoTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 sm: flex flex-col">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleTabClick("tab1")}
            >
              企業
            </button>
          </li>
          <li className="me-2">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleTabClick("tab2")}
            >
              原材料
            </button>
          </li>
          <li className="me-2">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleTabClick("tab3")}
            >
              一括表示
            </button>
          </li>
          <li className="me-2">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleTabClick("tab4")}
            >
              栄養成分
            </button>
          </li>
          <li className="me-2">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => handleTabClick("tab5")}
            >
              アレルギー
            </button>
          </li>
        </ul>
      </div>

      {activeTab === "tab1" && (
        <div className="bg-white rounded-lg m-3 p-4">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              企業情報
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100">テスト１</div>
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="bg-white rounded-lg m-3 p-4">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              原材料
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100">テスト２</div>
        </div>
      )}
    </>
  );
};

export default FoodInfoTabs;
