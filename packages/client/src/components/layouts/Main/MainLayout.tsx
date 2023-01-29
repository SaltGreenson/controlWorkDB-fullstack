import { LimitContent } from "@/components/common/LimitContent/limitContent-styles";
import React, { ReactNode } from "react";
import Footer from "../../elements/Footer";
import Header from "../../elements/Header";

import {
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  MainLayoutContainer,
} from "./MainLayout-styles";

type PropsTypes = {
  activeTab?: number;
  children: ReactNode;
};
const MainLayout = ({ activeTab, children }: PropsTypes): JSX.Element => (
  <MainLayoutContainer>
    <HeaderContainer>
      <Header activeTab={activeTab} />
    </HeaderContainer>
    <ContentContainer>
      <LimitContent maxWidth="1120px" notCentered>
        {children}
      </LimitContent>
    </ContentContainer>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </MainLayoutContainer>
);

export default MainLayout;
