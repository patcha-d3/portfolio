import './framer/styles.css'

import FolderNewFramerComponent from './framer/folder-new'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(255,_255,_255)]'>
      <FolderNewFramerComponent.Responsive />
    </div>
  );
};