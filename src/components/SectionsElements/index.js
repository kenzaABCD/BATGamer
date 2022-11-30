import React, { Component } from "react";
import { Button } from "../../ButtonElements";
import { SectionWrap } from "./SectionsElements";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  SectionContainer,
  SectionH1,
  SectionWrapper,
  SectionCard,
  SectionIcon,
  SectionH2,
  SectionP,
} from "./SectionsElements";
import TestImage from '../../images/test.jpg'

class SectionElements extends Component {

  state = {
    loading: true,
    Articles:[],
  };

  async componentDidMount() {
   
  }

  render() {
    const { loading } = this.state;
    const {Articles} = this.state;

    return (
      <>
        <SectionContainer id="blog">
          <SectionH1> Actualité </SectionH1>
         
            <>
              <SectionWrapper>
               
                  
                      <>
                        <SectionCard
                        >
                          <SectionIcon
                            src={TestImage}
                          />
                          <SectionH2>Title</SectionH2>
                          <SectionP>Description</SectionP>
                          <br />
                          <SectionP>Time added ...</SectionP>
                        </SectionCard>
                      </>

                      <>
                        <SectionCard
                        >
                          <SectionIcon
                            src={TestImage}
                          />
                          <SectionH2>Title</SectionH2>
                          <SectionP>Description</SectionP>
                          <br />
                          <SectionP>Time added ...</SectionP>
                        </SectionCard>
                      </>

                      <>
                        <SectionCard
                        >
                          <SectionIcon
                            src={TestImage}
                          />
                          <SectionH2>Title</SectionH2>
                          <SectionP>Description</SectionP>
                          <br />
                          <SectionP>Time added ...</SectionP>
                        </SectionCard>
                      </>

              </SectionWrapper>

              <br />
              <center>
                <SectionWrap>
                  <Button
                    onClick={(event) => (window.location.href = "/blog")}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={true}
                    dark={true}
                    dark2={true}
                  >
                    Afficher toutes les sections
                  </Button>
                </SectionWrap>
              </center>
            </>
         
        </SectionContainer>
      </>
    );
  }
}

export default SectionElements;
