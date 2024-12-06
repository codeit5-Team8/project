import Header from '@ui/common/Header';
import SideBar from '@ui/common/SideBar';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <div className="item-center">
      {/* 사이드바 고정 */}
      <SideBar />

      <main className="container ml-0 md:ml-[3.75rem] xl:ml-0">
        <Header />

        {/* Contents 영역 */}
        {children}
      </main>
    </div>
  );
}
