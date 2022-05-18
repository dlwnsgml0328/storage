import "./App.css";
import Audio1 from "./component/AudioComp/Audio1";
import Foo from "./component/classComp/buttonComp";
import Foo2 from "./component/classComp/buttonComp2";
import Foo3 from "./component/classComp/buttonComp3";
import Foo4 from "./component/classComp/buttonComp4";
import Foo5 from "./component/classComp/buttonComp5";

import Change from "./component/functionComp/changeComp";
import LikeTs from "./component/likeTs";

function App() {
  return (
    <>
      <Change />
      <hr />
      <Foo />
      <hr />
      <Foo2 />
      <hr />
      <Foo3 />
      <hr />
      <Foo4 />
      <hr />
      <Foo5 />
      <hr />
      <LikeTs />
      <hr />
      <Audio1 />
    </>
  );
}

export default App;
