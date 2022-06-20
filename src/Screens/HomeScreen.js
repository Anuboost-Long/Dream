import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import styled from 'styled-components';
import {RegularText} from '../Components/TextRelate/RegularText';
import {colors, metrics} from '../Theme';

const Styled = {
  Wrapper: styled.View`
    flex: 1;
    background-color: white;
  `,
  MusicsWrapper: styled.View`
    width: 50%;
    margin-vertical: ${moderateScale(5)};
    paddings: ${moderateScale(10)};
    align-items: center;
    align-self: center;
    background-color: ${colors.lightGray};
  `,
};

export default function HomeScreen() {
  const musics = [
    {Name: 'Glimps of us', id: 1, Artist: 'Joji'},
    {Name: 'Second Date', id: 2, Artist: 'Josh Fudge'},
    {Name: 'Test Drive', id: 3, Artist: 'Joji'},
    {Name: 'Language', id: 4, Artist: 'Brent_Faiyaz'},
  ];

  const renderMusics = ({item}) => {
    return (
      <Styled.MusicsWrapper>
        <RegularText colors="black" fontSize={metrics.font.title}>
          {item.Name}
        </RegularText>
      </Styled.MusicsWrapper>
    );
  };

  return (
    <Styled.Wrapper>
      <FlatList
        data={musics}
        renderItem={renderMusics}
        keyExtracto={item => item.id}
      />
    </Styled.Wrapper>
  );
}
