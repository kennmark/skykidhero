import PageHeaderContainer
  from "./PageHeaderContainer";

import {
  SideBarContainer,
} from "./SidebarContainer";

import ScrollToTop
  from "react-scroll-to-top";

export default function MapPageLayout({
  mapData,

  fallbackImage,
  fallbackImageAlt,
  fallbackTitle,
  fallbackIntro,

  children,
}) {
  return (
    <div className="flex justify-start">
      <div>
        <SideBarContainer />
      </div>

      <div className="w-full justify-start">
        <PageHeaderContainer
          mapData={mapData}
          imgUrl={fallbackImage}
          imgAlt={fallbackImageAlt}
          title={fallbackTitle}
          mapIntro={fallbackIntro}
        />

        {children}
      </div>

      <ScrollToTop
        smooth
        className="scrollToTop"
      />
    </div>
  );
}