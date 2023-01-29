import { LimitContent } from "@/components/common/LimitContent/limitContent-styles";
import { CustomLink } from "@/components/common/Links";
import React, { useCallback, useState } from "react";
import { headerLinks } from "./config";
import { Content, MenuItemList, NavStyled, StyledUl } from "./Header-styles";

type HeaderProps = {
  activeTab?: number;
};

export const Header = ({ activeTab }: HeaderProps): JSX.Element => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const setTabOnClickHandler = useCallback(
    (idx: number) => () => {
      setActiveTabIndex(idx);
    },
    [setActiveTabIndex]
  );

  return (
    <NavStyled>
      <LimitContent>
        <Content>
          <StyledUl>
            {headerLinks &&
              headerLinks.map((link, idx) => (
                <MenuItemList
                  onClick={setTabOnClickHandler(idx)}
                  isActive={activeTabIndex === idx}
                  key={link.title}
                >
                  <CustomLink href={link.href}>{link.title}</CustomLink>
                </MenuItemList>
              ))}
          </StyledUl>
        </Content>
      </LimitContent>
    </NavStyled>
  );
};

export default Header;
