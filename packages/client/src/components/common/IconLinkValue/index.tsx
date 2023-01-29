import React, { FC } from "react";
import { withAdditionalProps } from "@/hocs";
import { IconLabelContainer } from "@/components/common/IconLinkValue/iconLinkValue-styles";
import { CustomLink } from "@/components/common/Links";
import { getActiveColorForText } from "@/utils/helpers/helpers";
import { withRouter } from "@/hocs/withRouter";
import Paragraph from "@/components/common/Paragraph";
import { FlexBlock } from "@/components/common/Block";
import { Colors } from "@/styles/colors";

type IconLabelProps = {
  href: string;
  icon: FC;
  isActive?: boolean;
  label: string;
  value?: string;
};

const IconLinkValue: FC<IconLabelProps> = ({
  href,
  icon,
  isActive,
  label,
  value,
}: IconLabelProps): JSX.Element => {
  const WrappedComponent = withAdditionalProps(icon, {
    color: getActiveColorForText(isActive),
  });

  return (
    <IconLabelContainer isActive={isActive}>
      <FlexBlock gap="30px" align="center">
        <WrappedComponent />
        <CustomLink
          href={href}
          fontSize="13px"
          color={getActiveColorForText(isActive)}
          lineHeight="13px"
          bold
        >
          {label}
        </CustomLink>
      </FlexBlock>
      <Paragraph
        fontSize="14px"
        lineHeight="14px"
        color={Colors.DARK_GREY}
        bold
      >
        {value}
      </Paragraph>
    </IconLabelContainer>
  );
};
export default withRouter(IconLinkValue);
