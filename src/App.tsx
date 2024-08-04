import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./App.css";
import Card from "./components/common/Card";
import SvgLocation from "./components/svgs/Location";
import SvgClock from "./components/svgs/Clock";
import SvgCalendar from "./components/svgs/Calendar";
import SvgWhatsapp from "./components/svgs/Whatsapp";
import SvgLogo from "./components/svgs/Logo";
import Swipable from "./components/common/Swipable";

function App() {
  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide>
        <Card id="getting-married" className="relative bg-left-bottom">
          <h2 className="heading-italic mb-4">
            Donna Maria <br />
            & <br />
            Georges
          </h2>
          <p className="text-xl">Are getting married</p>
          <Swipable />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="save-the-date" className="bg-top">
          <h2 className="heading-italic mb-4">Save the date</h2>
          <p className="mb-4 text-pretty">
            With joyous hearts, <br />
            Habtout and Sader Families invite you to celebrate the wedding of
          </p>
          <h3 className="mb-4 font-pinyonScript text-2xl">
            Georges & Donna Maria
          </h3>
          <time className="mb-4 block">on September 21,2024</time>
          <p>
            as they&nbsp;
            <q className="font-pinyonScript text-xl capitalize">
              Rewrite the stars
            </q>
            &nbsp;and start their journey together
          </p>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="wedding-ceremony" className="bg-top">
          <h2 className="heading-italic mb-4">Wedding ceremony</h2>
          <div className="grid grid-cols-2 text-black">
            <div>
              <SvgCalendar className="mx-auto mb-1 size-10" />
              <time>
                September 21,2024 <br />
                7:00 pm
              </time>
            </div>
            <a
              href="https://maps.app.goo.gl/voGFyss676GNKxsE7"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <SvgLocation className="mx-auto mb-1 size-10 animate-bounce" />
              <address>
                St. Georges Church
                <br />
                Achrafieh
              </address>
            </a>
          </div>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="after-ceremony" className="bg-right-top">
          <h2 className="heading-italic mb-4">After ceremony</h2>
          <div className="grid grid-cols-2 text-black">
            <div>
              <SvgClock className="mx-auto mb-1 size-10" />
              <time>8:30 pm</time>
            </div>
            <a
              href="https://maps.app.goo.gl/TTwwnyYPJqrkkcqb7"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <SvgLocation className="mx-auto mb-1 size-10 animate-bounce" />
              <address>
                The Grand House
                <br />
                Mar Roukoz
              </address>
            </a>
          </div>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="gift-registry" className="bg-top">
          <h2 className="heading-italic mb-4">Gift registry</h2>
          <p className="mb-2 text-pretty text-sm">
            Your presence is our biggest present, However, if you wish to send a
            gift, a registry will be held at
          </p>
          <div className="flex items-center justify-center gap-2 text-xl text-black">
            <div className="box-content grid size-5 place-content-center rounded-md bg-[#ec114e] p-1">
              <img
                src="/assets/images/whish.webp"
                alt="Whish Money"
                className="object-contain"
              />
            </div>
            <h3 className="mb-1">20343663 or 76 39 48 48</h3>
          </div>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="be-our-guest" className="relative bg-right-top">
          <h2 className="heading-italic mb-4">Be our guest</h2>
          <p className="mb-4 text-lg">Kindly confirm before it's August 25th</p>
          <a
            href="https://wa.me/76394848?text=Congratulations%20Georges%20%26%20Donna!%20🎊%20I'll%20be%20present%20to%20celebrate%20your%20special%20day%20with%20you%20😄"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <SvgWhatsapp className="animate-scale mx-auto size-10" />
          </a>
          <SvgLogo className="left-0-4 absolute bottom-4 size-10 animate-pulse" />
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
