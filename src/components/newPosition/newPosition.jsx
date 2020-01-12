import React from "react";
import classnames from "classnames";
import style from "./newPosition.module.css";
import ScollContent from '../scrollContent/scrollContent';
import SideBar from '../sideBar/sideBar';

const NewPosition = () => {
  const list = [
    { 
      id: 1,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 2,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 3,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 4,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 5,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 6,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 7,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 8,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 9,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
    { 
      id: 10,
      text: '创新事业群xlab事业部-前端技术专家-虾米音乐',
      link: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP573836',
      time: '18分钟前',
      city: '马德里',
    },
  ];
  return (
    <div className={style.content}>
      <div className={style.contentInner}>
        <ScollContent title='最新职位' moreText='更多' moreLink='https://job.alibaba.com/zhaopin/positionList.html' list={list} />
        <SideBar />
      </div>
    </div>
  );
};

export default NewPosition;
