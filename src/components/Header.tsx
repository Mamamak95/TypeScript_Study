import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
export default function Header() {
  return (
    <header>
      <LuFileSpreadsheet color={'lightgreen'} size={100}/>
      <input type="text" placeholder="제목 없는 문서" />
    </header>
  );
}
