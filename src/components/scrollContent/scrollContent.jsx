import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import style from "./scrollContent.module.css";

const ScrollContent = props => {
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div className={style.content}>
      <div className={style.more}>
        {props.title}
        <a className={style.clickMore}>{props.moreText}</a>
      </div>
      <ul className={style.contentList}>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
        <li className={style['scroll-1']}>
          <a
            data-xux-log="text=首页推荐职位"
            href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP598916"
            className={style.position}
            data-spm-click="gostr=/hr;locaid=newPositionLink"
          >
            创新事业群xlab事业部-前端技术专家-虾米音乐
          </a>
          <em className={style.time}>8小时前</em>
          <em className={style.city} title="杭州">
            杭州
          </em>
        </li>
      </ul>
    </div>
  );
}

export default ScrollContent;
