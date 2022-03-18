import styled from 'styled-components/native';
import { Colors } from '../../styles/cores';


interface StyleProps {
  image?: string;
} 

export const Container = styled.View<StyleProps>`
 flex :1;
 justify-content: center;
 align-items: center;
 background-image: url(${props => props.image ? props.image : "../../img/fundo-login.jpg"});
`;