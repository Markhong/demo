import React, { useState, useEffect, useRef } from 'react';
import classnames from "classnames";
import style from "./scrollContent.module.css";

const ScrollContent = props => {
  
  const createElementFromHTML = htmlString => {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.childNodes; 
  }

  const contentList = useRef(null);
  let scrollTime;
  const scroll = () => {
    const contentListDom = contentList.current;
    const nodes = createElementFromHTML(contentListDom.innerHTML.replace(/data-scrollindex="1"/g, 'data-scrollindex="2"'));
    Array.from(nodes).forEach((e) => {
      contentListDom.appendChild(e);
    })
    
    let scrollIndex = 1;
    clearInterval(scrollTime);
		scrollTime = setInterval(function() {
			var top =  parseInt(contentListDom.style['top'].split('px')[0]);
			contentListDom.style.top = `${top - 1}px`;
			if ((top-1) && ((top-1) / 450)%1 === 0) {
          Array.from(document.querySelectorAll(`[data-scrollindex='${scrollIndex}']`)).forEach((e) => {
            e.remove();
          })
          contentListDom.style.top = '50px';
					scrollIndex += 1;
					var pat = new RegExp(`data-scrollindex="${scrollIndex}"`, 'g')
          
          const nodes = createElementFromHTML(contentListDom.innerHTML.replace(pat, `data-scrollindex="${scrollIndex + 1}"`));
          Array.from(nodes).forEach((e) => {
            contentListDom.appendChild(e);
          })
				}
		}, 40);
  }

  useEffect(() => {
    scroll();
    const contentListDom = contentList.current;
    contentListDom.addEventListener('mouseover', (e) => {
      clearInterval(scrollTime);
    });
    contentListDom.addEventListener('mouseout', (e) => {
      scroll();
    });
  }, []);

  return (
    <div className={style.content}>
      <div className={style.more}>
        {props.title}
        <a href={props.moreLink} className={style.clickMore}>{props.moreText}</a>
      </div>
      <ul ref={contentList} className={style.contentList} style={{ top: 50 }}>
        {
          props.list.map((l) => {
            return (
              <li key={l.id} data-scrollindex={1} className={style['scroll-1']}>
                <a
                  data-xux-log="text=首页推荐职位"
                  href={l.link}
                  className={style.position}
                  data-spm-click="gostr=/hr;locaid=newPositionLink"
                >
                  {l.text}
                </a>
                <em className={style.time}>{l.time}</em>
                <em className={style.city} title={l.city}>
                  {l.city}
                </em>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ScrollContent;
