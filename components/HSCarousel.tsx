import React, {useState, useEffect, useRef} from 'react';
export function HSCarousel({width, height, mobileWidth, mobileHeight, items}: 
  {width: number, height: number, mobileWidth: number, mobileHeight: number, items: JSX.Element[]}) {
  const [selected, setSelected] = useState(0);
  const [animating, setAnimating] = useState(false);
  const startX = useRef(0);

  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    startX.current = e.clientX;
  };
  const dragEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const margin = e.clientX - startX.current;
    if(margin > 100) {
      if(selected > 0) setSelected(selected - 1);
    } else if(margin < -100) {
      if(selected < items.length - 1) setSelected(selected + 1);
    }
  };
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };
  const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const margin = startX.current - e.changedTouches[0].clientX;
    console.log(margin);
    if(margin > 100) {
      if(selected < items.length - 1) setSelected(selected + 1);
    } else if(margin < -100) {
      if(selected > 0) setSelected(selected - 1);
    }
  };

  const select = (index: number) => {
    if(index !== selected && !animating) {
      setSelected(index);
      setAnimating(true);
    }
  }

  useEffect(() => {
    if(animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animating]);
  useEffect(() => {
    setSelected(0);
  }, [items]);


  return (
    <div className="hs-carousel-wrap" style={{overflow: 'hidden', display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center'}} 
    onDragStart={dragStart} onDragEnd={dragEnd} onTouchStart={touchStart} onTouchEnd={touchEnd}>
      {items.map((item: JSX.Element, index: number) => <div key={index} className={`hs-carousel ${selected === index ? 'selected' : 'not-selected'}`}>{item}</div>)}
      <div style={{position: 'absolute', display: 'flex', gap: 5, left: '50%', bottom: 10, transform: 'translateX(-50%)'}}>
        {items.map((_: any, index: number) => <button className={`hs-carousel-button ${selected === index ? 'selected' : 'not-selected'}`} key={index} onClick={() => select(index)}/>)}
      </div>
      <style>{`
        .hs-carousel {
          position: absolute;
          transition: all 0.3s ease;
        }
        .hs-carousel.selected {
          opacity: 1;
        }
        .hs-carousel.not-selected {
          opacity: 0;
        }
        .hs-carousel-button {
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
          border-radius: 2px;
          border: 2px solid #444;
        }
        .hs-carousel-button.selected {
          background: rgba(66,66,66,0.6);
        }
        .hs-carousel-button.not-selected {
          background: rgba(66,66,66,0.2);
        }
        
        @media(min-width: 520px) {
          .hs-carousel-wrap {
            width: ${width}px;
            height: ${height}px;
          }
        }
        @media(max-width: 520px) {
          .hs-carousel-wrap {
            width: ${mobileWidth}px;
            height: ${mobileHeight}px;
          }
        }
      `}</style>
    </div>
  )
}