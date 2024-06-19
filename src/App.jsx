import React from "react";
import Header from "./layout/header/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MyButton from "./components/my-components/my-button/my-button";
import hero_img from "../src/assets/images/hero-img.png";
export default function App() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <>
      <Header />
      <main>
        <section className="hero bg-[#F0F4F8] flex items-center justify-center bg-[url('./assets/images/hero-group.png')] h-[500px] bg-contain bg-center bg-no-repeat">
          <div className="container">
            <Carousel plugins={[plugin.current]}>
              <CarouselContent>
                <CarouselItem>
                  <div className="item-1 flex items-center gap-10">
                    <div className="content w-[657px]">
                      <h1 className="title text-[44px] font-ubuntu-bold">
                        Максимальная доля прибыли по вкладам
                        <span className="text-[#0000DE]">&nbsp;НурФинанс</span>
                      </h1>
                      <p className="subtitle text-[18px] font-ubuntu-regular pt-[43px] pb-[42px]">
                        Инвестор получает наибольший капитализированный доход
                      </p>
                      <MyButton variant="primary">
                        Инвестиционные продукты
                      </MyButton>
                    </div>
                    <div>
                      <img src={hero_img} alt="hero-img" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="item-1 flex items-center gap-10">
                    <div className="content w-[657px]">
                      <h1 className="title text-[44px] font-ubuntu-bold">
                        Максимальная доля прибыли по вкладам
                        <span className="text-[#0000DE]">&nbsp;НурФинанс</span>
                      </h1>
                      <p className="subtitle text-[18px] font-ubuntu-regular pt-[43px] pb-[42px]">
                        Инвестор получает наибольший капитализированный доход
                      </p>
                      <MyButton variant="primary">
                        Инвестиционные продукты
                      </MyButton>
                    </div>
                    <div>
                      <img src={hero_img} alt="hero-img" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="item-1 flex items-center gap-10">
                    <div className="content w-[657px]">
                      <h1 className="title text-[44px] font-ubuntu-bold">
                        Максимальная доля прибыли по вкладам
                        <span className="text-[#0000DE]">&nbsp;НурФинанс</span>
                      </h1>
                      <p className="subtitle text-[18px] font-ubuntu-regular pt-[43px] pb-[42px]">
                        Инвестор получает наибольший капитализированный доход
                      </p>
                      <MyButton variant="primary">
                        Инвестиционные продукты
                      </MyButton>
                    </div>
                    <div>
                      <img src={hero_img} alt="hero-img" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="item-1 flex items-center gap-10">
                    <div className="content w-[657px]">
                      <h1 className="title text-[44px] font-ubuntu-bold">
                        Максимальная доля прибыли по вкладам
                        <span className="text-[#0000DE]">&nbsp;НурФинанс</span>
                      </h1>
                      <p className="subtitle text-[18px] font-ubuntu-regular pt-[43px] pb-[42px]">
                        Инвестор получает наибольший капитализированный доход
                      </p>
                      <MyButton variant="primary">
                        Инвестиционные продукты
                      </MyButton>
                    </div>
                    <div>
                      <img src={hero_img} alt="hero-img" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="item-1 flex items-center gap-10">
                    <div className="content w-[657px]">
                      <h1 className="title text-[44px] font-ubuntu-bold">
                        Максимальная доля прибыли по вкладам
                        <span className="text-[#0000DE]">&nbsp;НурФинанс</span>
                      </h1>
                      <p className="subtitle text-[18px] font-ubuntu-regular pt-[43px] pb-[42px]">
                        Инвестор получает наибольший капитализированный доход
                      </p>
                      <MyButton variant="primary">
                        Инвестиционные продукты
                      </MyButton>
                    </div>
                    <div>
                      <img src={hero_img} alt="hero-img" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="item-1 flex items-center gap-10">
                    <div className="content w-[657px]">
                      <h1 className="title text-[44px] font-ubuntu-bold">
                        Максимальная доля прибыли по вкладам
                        <span className="text-[#0000DE]">&nbsp;НурФинанс</span>
                      </h1>
                      <p className="subtitle text-[18px] font-ubuntu-regular pt-[43px] pb-[42px]">
                        Инвестор получает наибольший капитализированный доход
                      </p>
                      <MyButton variant="primary">
                        Инвестиционные продукты
                      </MyButton>
                    </div>
                    <div>
                      <img src={hero_img} alt="hero-img" />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}
