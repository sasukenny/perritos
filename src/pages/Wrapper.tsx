import { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar/Navbar';

const Wrapper = (props: PropsWithChildren<any>) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <main
          role="main"
          style={{
            background: 'rgb(255 255 255 / 100%)',
          }}
          className="col-md-12 ml-sm-12 col-lg-12 px-md-4"
        >
          {props.children}
        </main>
      </div>
    </>
  );
};
export default Wrapper;
