// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "black"
}, {
  primary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    const style = {
      color : "white"
    }
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={600} progress = {"bar"} controls={false}>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" fit lineHeight={1} textColor="white" >
              Imperio
            </Text>
            <Text textSize="2em" lineHeight={1} textColor="white">
              control your
            </Text>
            <Text textSize="2em" margin="0px 0px 20px 100px" lineHeight={1} textColor="white">
              experience
            </Text>
            <Text textSize="1em" margin="50px 0px 0px" textColor="white"> Austin Lyon, Austin Nwaukoni </Text>
            <Text textSize="1em" margin="0px 0px 0px" textColor="white"> Matt McLaughlin, and Michael Blanchard </Text>
          </Slide>

          <Slide>
            <Text textSize="2em" margin="0px 0px 0px 0px" textColor="white">
              Problem
            </Text>
            <List textColor="white">
              <ListItem>Desktop experiences are mostly limited to keyboard and mouse</ListItem>
              <ListItem>Mobile sensor data is available to the browser, but it is not widely implemented</ListItem>
            </List>
          </Slide>

          <Slide>

            <Text textSize="2em" textColor="white">
              Our Solution
            </Text>
            <Text textSize="1em" margin="0px 0px 0px 0px" textColor="white">
              Imperio is an SDK that allows developers create a real-time bridge between mobile device inputs and browser interactivity
            </Text>
          </Slide>

          <Slide>
            <Text textSize="2em" margin="0px 0px 0px 0px" textColor="white">
              Solution
            </Text>
            <Layout>
            <Text textColor="white">
              Simple Installation
            </Text>
            <CodePane lang="javascript">
              const imperio = require('imperio')(server)
            </CodePane>
            <Text textColor="white">
              Endless Possibilities
            </Text>
            </Layout>
          </Slide>

          <Slide>
            <Heading size={1}  margin="0px 0px 0px 0px" textColor="white">
              DEMO
            </Heading>
          </Slide>

          <Slide>
            <Text textSize="2em" margin="0px 300px 0px 0px" textColor="white">
              Technical Challenges
            </Text>
            <List textColor="white" margin= "100px 0px 500px 0px">
              <ListItem margin="0px 0px 50px 0px"> Creating a powerful yet intuitive library</ListItem>
              <ListItem>Implementing WebRTC that falls back to sockets</ListItem>
            </List>
          </Slide>

          <Slide >
            <Text textSize="2em" margin="0px 0px 0px 0px" textColor="white">
            Check Us Out
          </Text>
            <Text  margin ="0px 0px 0px 0px" textColor="white">
              website - <Link style={style} href="https://imperiojs.com">http://imperiojs.com</Link>
            </Text>
            <Text  textColor="white">
              github - <Link style={style}>https://github.com/imperiojs/imperio</Link>
            </Text>
            <Text  textColor="white">
              npm - <Link style={style} href="https://www.npmjs.com/package/imperiojs">https://www.npmjs.com/package/imperiojs</Link>
            </Text>
          </Slide>





          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
