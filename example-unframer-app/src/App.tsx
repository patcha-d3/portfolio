import './framer/styles.css'

import ZoomImageFramerComponent from './framer/zoom-image'
import LetSTalkCardFramerComponent from './framer/let-s-talk-card'
import FolderNewFramerComponent from './framer/folder-new'
import HoverZoomFramerComponent from './framer/hover-zoom'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(255,_255,_255)]'>
      <ZoomImageFramerComponent.Responsive />
          <LetSTalkCardFramerComponent.Responsive />
          <FolderNewFramerComponent.Responsive />
          <HoverZoomFramerComponent.Responsive />
    </div>
  );
};