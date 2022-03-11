import React from 'react'

import { WindowControls } from './window-controls'
import { MenuBar, MenuT } from './menu'

export interface TitleBarProps {
  icon?: string;
  menu?: MenuT[];
  disableMinimize?: boolean;
  disableMaximize?: boolean;
  className?: string;
  browserWindowId?: number;
  onToggleMenuBar?: (isClicked: boolean) => void;
  showWindowControls?: boolean;
}

export const TitleBar: React.FC<TitleBarProps> = ({ children, icon, menu, disableMinimize, disableMaximize, className, browserWindowId, onToggleMenuBar, showWindowControls = true }) => (
  <div id="electron-app-title-bar" className={`electron-app-title-bar ${className || ''}`}>
    <div className="resize-handle resize-handle-top" />
    <div className="resize-handle resize-handle-left" />
    {!!icon && <img className="icon" src={icon} />}
    {!!menu && <MenuBar menu={menu} onToggleMenuBar={onToggleMenuBar} />}
    {children}
    {showWindowControls && <WindowControls disableMinimize={disableMinimize} disableMaximize={disableMaximize} browserWindowId={browserWindowId} /> }
  </div>
)
