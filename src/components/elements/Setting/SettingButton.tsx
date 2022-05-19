import { QuiriesTypes } from "../../commons/types";

import { replaceDateHyphen } from "../../commons/utilities";

import { LinkButton } from "../../commons/atoms/LinkButton";
import { IconBabyNomal } from "../../commons/atoms/Icons";

type Props = QuiriesTypes & {
  birthday: string;
  gender: string;
  className?: string;
};
export const SettingButton: React.FC<Props> = ({
  birthday,
  gender,
  className,
  queries,
}) => (
  <div className={className}>
    <LinkButton
      href={`/?birthday=${replaceDateHyphen(birthday)}&gender=${gender}`}
      text={`${
        !queries.birthday && !queries.gender ? "お祝い事をみる" : "更新する"
      }`}
      className="primaryButton"
    >
      <IconBabyNomal />
    </LinkButton>
  </div>
);
