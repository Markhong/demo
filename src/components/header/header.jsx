import React from 'react';
import classnames from 'classnames';
import style from './header.module.css';

const header = () => (
  <div className={style.head} data-spm-anchor-id="a2obv.11410899.0.i3.55ef6c61LgrrO5">
    <div className={style['head-main']}>
      <div className={style['head-menu']}>
        <a
          href="https://job.alibaba.com/zhaopin/index.htm"
          className={style.logo}
          style={{textAlign: 'right', width: '125px'}}
        >
          <img
            src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png"
            height="20"
            alt=""
          />
        </a>
        <i className={style['split-1']}>
          |
        </i>
        <i className={style.split}>
          社招官网
        </i>
        <ul id="menu">
          <li className={classnames(style.current, style['current-cat'])} value="1">
            <a href="https://job.alibaba.com/zhaopin/index.htm">
              首 &nbsp;&nbsp;页
            </a>
          </li>
          <li>
            <a href="https://job.alibaba.com/zhaopin/positionList.htm">
              社会招聘
            </a>
          </li>
          <li>
            <a href="https://campus.alibaba.com" target="blank">
              校园招聘
            </a>
          </li>
          <li>
            <a href="https://job.alibaba.com/zhaopin/about.htm">了解阿里</a>
          </li>
          <li>
            <a href="https://job.alibaba.com/zhaopin/apply.htm">个人中心</a>
          </li>
          <div className={style.login}>
            欢迎来到阿里巴巴集团招聘！
            <a
              href="https://passport.alibaba.com/login.htm?appName=hrjob&amp;params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm"
              target="_top"
            >
              登录
            </a>
            | <a href="http://member1.taobao.com/member/newbie.htm">注册</a>
          </div>
        </ul>
      </div>
    </div>
  </div>
);

export default header;
