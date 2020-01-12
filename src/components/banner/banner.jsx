import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import style from "./banner.module.css";
import { encode64 } from '../../utils/helper';

const Banner = () => {
  const searchHot = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const searchText = encode64(e.target.innerHTML);
    window.location.href = `https://job.alibaba.com/zhaopin/positionList.htm?keyWord=${searchText}&_input_charset=UTF-8`;
  }

  useEffect(() => {
    Array.from(searchHot.current.querySelectorAll('a')).forEach((element) => {
      element.addEventListener('click', (e) => {
        search(e);
      });
    })
  }, []);

  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    var searchText = inputEl.current.value;
    if (searchText) {
      searchText = encode64(searchText);
      window.location.href = `https://job.alibaba.com/zhaopin/positionList.htm?keyWord=${searchText}&_input_charset=UTF-8`;
    } else {
      window.location.href = 'https://job.alibaba.com/zhaopin/positionList.htm';
    }
  };

  return (
    <div className={style.banner}>
      <img
        className={style.bannerImage}
        src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
        alt=""
      />
      <div className={style.overlay} />
        <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={style.searchForm}>
            <p className={style.titleEn}>If not now, when?</p>
            <p className={style.titleEn}>If not me, who?</p>
            <p className={style.titleZh}>此时此刻，非我莫属！</p>
            <div className={style.searchBox}>
              <div className={style.searchBoxOverlay}></div>
              <input ref={inputEl} type="text" maxLength="30" topic="请输入职位关键词"  placeholder='请输入职位关键词'
              className={style['search-text']} />
              <input 
                className={style['search-btn']}
                data-spm-click="gostr=/hr;locaid=searchPosition"
                type="submit"
                value="搜索"
                onClick={handleSubmit}
              />
            </div>
            <div ref={searchHot} className={style['hot-text']}>
                热门搜索：
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >JAVA</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >IOS</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >数据</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >安全</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >搜索</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >算法</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >运营</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >视觉</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >交互</a>
                  <a className={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >前端</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
