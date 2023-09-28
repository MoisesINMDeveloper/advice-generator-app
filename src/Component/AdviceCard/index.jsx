import { useState, useEffect } from "react"
import DividerMobile from "/pattern-divider-mobile.svg"
import DividerDesktop from "/pattern-divider-desktop.svg"
import IconDice from "/icon-dice.svg"

export default function AdviceCard() {
    const [advice, setAdvice] = useState({});
    const [slipId, setSlipId] = useState(1);

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                setAdvice(data.slip);
                setSlipId(data.slip.id);
            });
    }, []);

    const handleButtonClick = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                setAdvice(data.slip);
                setSlipId(data.slip.id);
            });
    };
    return (
        <main className="h-screen grid grid-rows-1 grid-cols-1 items-center justify-items-center text-center bg-[#1f2632]">
            <div className="flex-col justify-center items-center w-[20rem] h-[20rem] md:w-[30rem] md:h-[16rem] px-4 py-8 md:px-6 bg-[#323a49] rounded-2xl">
                <div className="flex justify-center">
                    <h2 className="flex text-xs text-[#52ffa8] tracking-wide
">A D V I C E <h3 className="mx-2">#{slipId}</h3></h2>
                </div>
                <article className="flex flex-col justify-center items-center">
                    <div className="my-4 w-[18rem] h-[10rem] md:w-[auto] md:h-[6rem] flex items-center justify-center">
                        <p className="text-[#cee3e9] object-contain">{advice.advice}</p>
                    </div>
                    <div className="flex flex-col items-center md:mt-2">
                        <img className="mt-[1rem] md:hidden" src={DividerMobile} alt="division mobile" />
                        <img className="hidden md:mt-2 md:block" src={DividerDesktop} alt="" />
                        <button className="float mt-[1rem] md:mt-[1.5rem] w-[4rem] h-[4rem] md:w-[3rem] md:h-[3rem] rounded-full bg-[#52ffa8] flex justify-center items-center hover:shadow-[0px_0px_20px_10px_#00000024] hover:shadow-[#52ffa981] cursor-pointer" onClick={handleButtonClick} ><img className="md:w-[1.3rem] md:h-[1.3rem]" src={IconDice} alt="Icono dice" /></button>
                    </div>
                </article>
            </div>
        </main>
    );
}
