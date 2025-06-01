import Subcontent from './SubContent';
import Advertisement from './advertisement';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="subcontents">
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </div>
  );
};

export default MainContent;