import React from "react";

import { AbsoluteBlock, FlexBlock } from "@/components/common/Block";
import Paragraph from "@/components/common/Paragraph";
import { Colors } from "@/styles/colors";
import { CustomLink } from "@/components/common/Links";
import Title from "@/components/common/Title";
import { CustomInput } from "@/components/common/Inputs";
import CustomButton from "@/components/common/CustomButton";

import {
  generalLinks,
  getToKnowUsLinks,
} from "@/components/elements/Footer/config";

import {
  ButtonContainer,
  EmailSubscribeContainer,
  InputContainer,
  StyledFooterContainer,
} from "./Footer-styles";
import { LimitContent } from "@/components/common/LimitContent/limitContent-styles";

const Footer = () => (
  <StyledFooterContainer>
    <LimitContent>
      <FlexBlock
        padding="48px 5% 0 5%"
        justify="space-between"
        gap="32px"
        flexWrap="wrap"
        direction="row"
      >
        <FlexBlock gap="16px" direction="column">
          <Title type="small" color={Colors.WHITE}>
            Познакомьтесь с нами поближе
          </Title>

          {getToKnowUsLinks &&
            getToKnowUsLinks.map((link) => (
              <CustomLink
                key={link.title}
                href={link.href}
                color={Colors.MEDIUM_GREY}
                hoverColor={Colors.WHITE}
                fontSize="14px"
                bold
              >
                {link.title}
              </CustomLink>
            ))}
        </FlexBlock>

        <FlexBlock gap="20px" margin="0 0 200px 0" direction="column">
          <Title type="small">Подпишитесь на рассылку новостей</Title>

          <EmailSubscribeContainer>
            <InputContainer>
              <CustomInput label="" placeholder="Ваш email" isDarkTheme />
            </InputContainer>

            <ButtonContainer>
              <CustomButton
                variant="primary"
                size="large"
                color={Colors.BLACK}
                bgColor={Colors.GREY}
                bgHover={Colors.LIGHT_BLACK}
              >
                Подписаться
              </CustomButton>
            </ButtonContainer>
          </EmailSubscribeContainer>
        </FlexBlock>
      </FlexBlock>

      <AbsoluteBlock left="5%" bottom="34px">
        <FlexBlock gap="24px" align="center" flexWrap="wrap" direction="row">
          <Paragraph color={Colors.MEDIUM_GREY} fontSize="14px" bold>
            © 2023 BREENKY
          </Paragraph>

          {generalLinks &&
            generalLinks.map((link) => (
              <CustomLink
                key={link.title}
                href={link.href}
                color={Colors.MEDIUM_GREY}
                hoverColor={Colors.WHITE}
                fontSize="14px"
                bold
              >
                {link.title}
              </CustomLink>
            ))}
        </FlexBlock>
      </AbsoluteBlock>
    </LimitContent>
  </StyledFooterContainer>
);

export default Footer;
