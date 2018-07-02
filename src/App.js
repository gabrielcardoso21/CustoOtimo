import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Footer, FooterTab, Content, Left, Right, Body, Container, Header, Title, Text, Button, Icon } from 'native-base';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentWillMount() {
    await Font.loadAsync({
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Lobster': require('../assets/fonts/Lobster-Regular.ttf'),
    });
    this.setState({ fontLoaded: true});
  }

  render() {
    return (this.state.fontLoaded ? (
        <Container>
          <Header style={{marginTop:StatusBar.currentHeight}}>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title style={{fontFamily: 'Lobster'}}>Custo Ótimo</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text>
              This is Content Section
            </Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>) : <Container/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
