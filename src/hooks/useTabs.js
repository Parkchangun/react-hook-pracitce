import {useState} from "react";

const useTabs = (initialTabs, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabs);

  if (!allTabs || !Array.isArray(allTabs)) return;
  return {
    currenItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
}

export default useTabs;
