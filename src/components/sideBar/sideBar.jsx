import React from "react";
import classnames from "classnames";
import style from "./sideBar.module.css";

const SideBar = () => (
  <div className={style.sideBar}>
    <a 
      className={classnames(style['show-pic'], style['pic-1'])} 
      href="https://www.aliyun.com/careers?spm=a2obv.11410899.0.aliyun.55ef6c61ewgfyz" 
      data-spm-click="gostr=/hr;locaid=aliyun" 
      data-spm-anchor-id="a2obv.11410899.0.aliyun">
        <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=''
        data-spm-anchor-id="a2obv.11410899.0.i3.55ef6c61ewgfyz" />
    </a>
    <a 
      className={classnames(style['show-pic'], style['pic-2'])} 
      href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?" 
      data-spm-click="gostr=/hr;locaid=xinxipingtai">
        <img alt=''
        src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" />
    </a>
  </div>
);

export default SideBar;
