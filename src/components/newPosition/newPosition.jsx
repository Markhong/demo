import React from "react";
import classnames from "classnames";
import style from "./newPosition.module.css";
import ScollContent from '../scrollContent/scrollContent';

const NewPosition = () => (
  <div className={style.content}>
    <div className={style.contentInner}>
      <ScollContent title='最新职位' moreText='更多' />
    </div>
  </div>
);

export default NewPosition;
