import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./App.css";
import Card from "./components/common/Card";

function App() {
  return (
    <Swiper slidesPerView={1} className="cursor-pointer">
      <SwiperSlide>
        <Card id="getting-married" className="bg-left-bottom">
          <h2 className="heading-italic mb-4">
            Dona Maria <br />
            & <br />
            Georges
          </h2>
          <p className="text-xl">Are getting married</p>
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
            Georges & Dona Maria
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
              <p>CalendarSvg</p>
              <time>
                September 21,2024 <br />
                7:00 pm
              </time>
            </div>
            <div>
              <p>LocationSvg</p>
              <address>
                St. Georges Church
                <br />
                Achrafieh
              </address>
            </div>
          </div>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="after-ceremony" className="bg-right-top">
          <h2 className="heading-italic mb-4">After ceremony</h2>
          <div className="grid grid-cols-2 text-black">
            <div>
              <p>ClockSvg</p>
              <time>8:30 pm</time>
            </div>
            <div>
              <p>LocationSvg</p>
              <address>
                The Grand House
                <br />
                Mar Roukoz
              </address>
            </div>
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
          <h3 className="text-2xl">
            Whish Money <br />
            20343663 or 76 39 48 48
          </h3>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card id="be-our-guest" className="bg-right-top">
          <h2 className="heading-italic mb-4">Be our guest</h2>
          <p className="text-xl">Kindly confirm before it's August 25th</p>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
