import Header from "@/components/Common/Header";
import Footer from "@/components/FrontPage/Home/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
