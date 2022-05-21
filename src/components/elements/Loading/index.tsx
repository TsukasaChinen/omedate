import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import style from "./style.module.css";

import { loadingState } from "../../commons/keys";
import { IconBabyNomal, IconBabySmile } from "../../commons/atoms/Icons";

const SmileEffect: React.FC<{ className?: string; fill?: string }> = ({
  className,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 8"
      fill={fill ? fill : "#fff"}
      className={className}
    >
      <path d="M7.4 7.1c-.2 0-.4-.2-.4-.4V1.2c0-.2.2-.3.3-.3s.3.2.3.3v5.5c.1.2-.1.4-.2.4zm5.4 0c-.2 0-.3-.2-.3-.3V1.3c0-.2.2-.3.3-.3.2 0 .3.2.3.3v5.5c.1.1-.1.3-.3.3z" />
      <path d="M19.3 6.4h-.2C10.4 1.7.9 6.4.8 6.4c-.2.1-.4 0-.5-.2s0-.4.2-.5c.1 0 9.9-4.9 18.9 0 .2.1.2.3.1.5 0 .2-.1.2-.2.2z" />
    </svg>
  );
};

export const Loading: React.FC<{
  interVal?: number;
}> = ({ interVal }) => {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const [isShowIconNormal, setIsShowIconNormal] = useState<boolean>(true);

  const [isShowIconSmile, setIsShowIconSmile] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) return;
    const intervalId = setInterval(
      () => {
        setIsLoading(false);
      },
      interVal ? interVal : 1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading, setIsLoading, interVal]);

  useEffect(() => {
    if (!isLoading) return;
    const intervalId = setInterval(() => {
      setIsShowIconNormal((prev) => !prev);
      setIsShowIconSmile((prev) => !prev);
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading]);

  return (
    <div className={style.wrapper} data-show={isLoading}>
      <div className={style.contents}>
        <i
          className={`${style.icon} ${style.normal}`}
          data-show={isShowIconNormal}
        >
          <IconBabyNomal className={style.svgNormal} fill="#fccf00" />
        </i>
        <i
          className={`${style.icon} ${style.smile}`}
          data-show={isShowIconSmile}
        >
          <SmileEffect
            className={`${style.svgEffect} ${style.effect01}`}
            fill="#fccf00"
          />
          <SmileEffect
            className={`${style.svgEffect} ${style.effect02}`}
            fill="#fccf00"
          />
          <IconBabySmile className={style.svgSmile} fill="#fccf00" />
        </i>
        <p className={style.text}>ちょっと待ってて</p>
      </div>
    </div>
  );
};
