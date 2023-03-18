import React, { useEffect, useState } from "react";
import Line from "./beforeAuth/lines/line";
import Login from "./beforeAuth/login/login";
import Signup from "./beforeAuth/signup/signup";
import ResetPassword from "./beforeAuth/resetPassword/resetPassword";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./afterAuth/home/home";
import banner1 from "../../assets/image1.png";
import banner2 from "../../assets/image2.png";
import banner3 from "../../assets/image3.png";
import PasswordPropmt from "./beforeAuth/passwordPrompt/passwordPrompt";
import Recommendation from "./afterAuth/recommendation/recommendation";

const Main = ({ isAuth, setisAuth }) => {
    const location = useLocation();
    const [showLines, setShowLines] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLines(!isAuth);
        }, 1000); // Change this to adjust the delay time in milliseconds

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isAuth]);

    function isArtist() {
        if (
            location.pathname === "/artists/1" ||
            location.pathname === "/artists/2" ||
            location.pathname === "/artists/3" ||
            location.pathname === "/artists/1/" ||
            location.pathname === "/artists/2/" ||
            location.pathname === "/artists/3/"
        ) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        if (
            location.pathname === "" ||
            location.pathname === "/recommend" ||
            location.pathname === "/" ||
            isArtist()
        ) {
            setisAuth(true);
        } else {
            setisAuth(false);
        }
    }, [location, isAuth]);

    return (
        <div
            style={{ overflow: isArtist() || !isAuth ? "hidden" : "auto" }}
            className={`${!isAuth ? "w-full h-full" : ""
                } relative flex justify-center items-center`}
        >
            {!isAuth && showLines ? <BeforeAuth /> : <></>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommend" element={<Recommendation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgotPassword" element={<ResetPassword />} />
                <Route path="/passwordPrompt" element={<PasswordPropmt />} />
                <Route path="/artists/:count" element={<Artists />} />
            </Routes>
        </div>
    );
};

const Artists = () => {
    const location = useLocation();

    const [showWichOne, setshowWichOne] = useState(1);

    useEffect(() => {
        if (
            location.pathname === "/artists/1/" ||
            location.pathname === "/artists/1"
        ) {
            setshowWichOne(1);
        } else if (
            location.pathname === "/artists/2/" ||
            location.pathname === "/artists/2"
        ) {
            setshowWichOne(2);
        }
        if (
            location.pathname === "/artists/3/" ||
            location.pathname === "/artists/3"
        ) {
            setshowWichOne(3);
        }
    }, []);

    return (
        <div className="xl:overflow-hidden overflow-auto h-screen w-screen grid grid-rows-2 grid-cols-none xl:grid-rows-none xl:grid-cols-2 px-8 relative">
            <div>
                <h1 className="text-[42px] 2xl:text-[52px] mt-20 leading-[60px] 2xl:leading-[80px]">
                    {showWichOne === 1
                        ? "Martin Garrix To Debut Club Album ‘Sentio’"
                        : showWichOne === 2
                            ? "Calvin Harris Announces ‘Funk Wav Bounces Vol.2’"
                            : "The Chainsmokers Drop ‘iPad’"}
                </h1>
                <p className="text-[#7E7272] ">
                    {showWichOne === 1
                        ? "April 1, 2022"
                        : showWichOne === 2
                            ? "March 6, 2022"
                            : "March 2, 2022"}
                </p>
                <p className="text-[17px] leading-[30px]">
                    {showWichOne === 1 ?
                        "Martin Garrix: ‘’The crazy thing is I’ve never released a Garrix album. During COVID I made zero club music because it felt weird to make festival music when there were no shows. When the shows came back I had so much new, revived energy that I made tons of new club music. We’ve decided to release a lot of the tracks in the coming weeks and bundle them into a club album. I feel like people have collected new energy the past two years, and I can’t describe how amazing it feels to be back on tour and seeing everyone’s reactions to all the new music.”"
                        : showWichOne === 2 ?
                            "Known for his songs of the ‘Summer’, Harris dropped his last album in the Summer of 2017 and the record saw him make a stylistic change and step away from his Top 100 style pop hits he had come to be known for. With a plethora of amazing collaborators, from Frank Ocean to Nicki Minaj and John Legend, among others. As this snippet Harris shared celebrating 4 years of Vol. 1, the star power on the album was undeniable, and that has us thinking of who we can expect to join him on Vol 2."
                            : "The Chainsmokers have released a new single, “iPad,” along with a Kid Studio-directed video for the track. The clip finds band member Drew Taggart wandering through the streets of New York City as he grapples with the conflicting emotions that follow ending an unhealthy relationship. 'iPad' follows the release of the band’s recent single, “High.” Both tracks will appear on the Chainsmokers’ as-yet-untitled fourth album, a for which release date has not been announced. The duo’s last LP, World War Joy, dropped in December 2019."
                    }
                </p>
            </div>
            <img
                src={showWichOne === 1 ? banner1 : showWichOne === 2 ? banner2 : banner3}
                alt="banner1"
                className="mt-96 md:mt-48 xl:mt-0 xl:absolute xl:bottom-0 mx-auto xl:right-0 lg:w-[400px] xl:w-[500px]"
            />
        </div>
    );
};

const BeforeAuth = () => {
    return (
        <>
            <Line lineNumber={1} />
            <Line lineNumber={2} />
            <Line lineNumber={3} />
            <Line lineNumber={4} />
            <Line lineNumber={5} />
        </>
    );
};

export default Main;
