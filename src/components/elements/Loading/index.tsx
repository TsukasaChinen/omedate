import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import style from "./style.module.css";

import { loadingState } from "../../commons/keys";
import { LoadingIconNormal } from "./LoadingIconNormal";
import { LoadingIconSmile } from "./LoadingIconSmile";
import { LoadingText } from "./LoadingText";

export const Loading: React.FC<{ interVal?: number }> = ({ interVal }) => {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const [isShowIconNormal, setIsShowIconNormal] = useState<boolean>(true);

  const [isShowIconSmile, setIsShowIconSmile] = useState<boolean>(false);

  const [isShowText, setIsShowText] = useState<boolean>(false);

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
      setIsShowText((prev) => !prev);
    }, 350);
    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading]);

  return (
    <div className={style.wrapper} data-show={isLoading}>
      <div className={style.contents}>
        <LoadingIconNormal
          className={`${style.icon} ${style.normal}`}
          isShow={isShowIconNormal}
        />
        <LoadingIconSmile
          className={`${style.icon} ${style.smile}`}
          isShow={isShowIconSmile}
        />
        <LoadingText
          className={style.text}
          text="読み込んでるよ"
          isShow={isShowText}
        />
      </div>
    </div>
  );
};
