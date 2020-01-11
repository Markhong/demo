import React from "react";
import classnames from "classnames";
import style from "./banner.module.css";

const Banner = () => (
  <div className={style.head}>
    <img
      className={style.bannerImage}
      src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
      alt=""
    />
    <div className={style.overlay} />
    <div className={style.formContainer}>
		<form>
			<div className={style.searchForm}>
				<p className={style.titleEn}>If not now, when?</p>
				<p className={style.titleEn}>If not me, who?</p>
				<p className={style.titleZh}>此时此刻，非我莫属！</p>
				<div className={style.searchBox}>
					<div className={style.searchBoxOverlay}></div>
          <input type="text" maxLength="30" topic="请输入职位关键词"  placeholder='请输入职位关键词'
          className={style['search-text']} />
					<input className={style['search-btn']} data-spm-click="gostr=/hr;locaid=searchPosition" type="submit" value="搜索" />
				</div>
				<div className={style['hot-text']}>
            热门搜索：
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >JAVA</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >IOS</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >数据</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >安全</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >搜索</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >算法</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >运营</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >视觉</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >交互</a>
              <a class={style['search-key']} href="javascript:void()" data-spm-click="gostr=/hr;locaid=hotPosition" >前端</a>
        </div>
			</div>
		</form>
	</div>
  </div>
);

export default Banner;
