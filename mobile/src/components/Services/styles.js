import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 0 16px
`;

export const Service = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 10px 16px;
  border-bottom-width: 1px;
  border-color: #3d4451;
  background-color: #1e232a;
`;

export const ServiceImg = styled.Image``;

export const ServiceContent = styled.View`
  margin-left: 20px;
  flex: 1;
`;

export const ServiceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ServiceDescription = styled.Text`
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;
