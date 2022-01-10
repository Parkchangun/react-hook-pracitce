import {useEffect, useState} from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitleEl = document.querySelector('title');
    htmlTitleEl.innerText = title;
  }

  useEffect(updateTitle, [title]);

  return setTitle;
}

export default useTitle;
