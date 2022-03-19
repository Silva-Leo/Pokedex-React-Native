import styled from 'styled-components/native';
import {ImageBackground , StyleSheet,} from 'react-native';


export const Container: React.FC = () => {
  
  const Main = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    border: 1px red;
  `;
  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    }
  });
  return (
    <Main>
      <ImageBackground
        source={require('../../img/fundo-login.jpg')}
        style={styles.imageBackground}/>
    </Main>
  );
};
