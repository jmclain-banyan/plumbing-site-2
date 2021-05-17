import React, { Fragment } from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <Fragment>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>heading</Heading>
                <SubTitle>subtitle</SubTitle>
                <BtnWrap>
                  <Button to="home">button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </Fragment>
  );
};

export default InfoSection;
