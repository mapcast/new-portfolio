'use  client';
import React from 'react';

type ModalProp = {
  children: JSX.Element,
  active: boolean, 
  close: () => void,
}

export const HSModal: React.FC<ModalProp> = ({children, active, close}) => {
  return (
    <div className={`modal ${active ? 'active' : 'deactive'}`}>
      <div 
      style={{position: 'absolute', width: '100%', height: '100%'}} 
      onClick={close}/>
      <div style={{background: '#FFF', zIndex: 2, borderRadius: 5}}>
        {children}
      </div>
      <style>{`
        .modal {
          position: fixed; 
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          justify-content: center; 
          align-items: center; 
          transition: all 0.3s;
          background: rgba(0,0,0,0.5);
          z-index: 1;
        }
        .active {
          display: flex;
        }
        .deactive {
          display: none;
        }
      `}</style>
    </div>
  )
}