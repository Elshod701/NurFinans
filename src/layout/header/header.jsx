import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import logo from "../../assets/icons/main-logo.svg";
import { FaPhone } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import MyButton from "../../components/my-components/my-button/my-button.jsx";
export default function Header() {
  return (
    <header className="bg-[#F0F4F8]">
      <nav className="py-4">
        <div className="container">
          <ul className="nav-up  flex items-center justify-between text-[14px] py-2 pb-4 border-b border-[#CBD8E9 solid] font-ubuntu-regular text-[#6E9BB8]">
            <li>Инвестиционно-финансовая компания</li>
            <div className="flex items-center px-12 gap-3">
              <CiLocationArrow1 className="text-xl" />
              <li>Город Казань</li>
            </div>
            <div className="flex items-center gap-5">
              <li>О компании</li>
              <li>Отзывы</li>
              <li>Халяль подробно</li>
              <li>Отчетность</li>
              <li>Наши партнеры</li>
              <li>Сотрудничество</li>
              <div className="flex items-center gap-3">
                <li>Контакты</li>
                <CiMap className="text-xl" />
              </div>
            </div>
            <div className="px-2 bg-white rounded-[6px] text-[#6E9BB8]">RU</div>
          </ul>

          <div className="nav-bottom flex items-center justify-between py-9">
            <div className="logo">
              <img src={logo} alt="logo_img" />
            </div>
            <ul className="flex items-center gap-7 text-lg text-[#0000DE] font-ubuntu-regular">
              <li>Инвестиции</li>
              <li>Рассрочка</li>
              <li>Калькулятор</li>
            </ul>
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-3 text-[#0000DE] font-ubuntu-bold">
                <FaPhone />8 800 2700 700
              </div>
              <CiSearch className="text-2xl text-[#6E9BB8]" />
            </div>
            <div className="flex items-center gap-2">
              <MyButton variant="primary">Личный Кабинет</MyButton>
              <MyButton variant="secondary">Онлайн-заявка</MyButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
