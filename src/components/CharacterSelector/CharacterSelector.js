import React, { useState, useEffect } from "react"
import {
  CharacterContainer,
  CharacterContent,
  Arrow,
  CharacterFrame,
  Character,
  TeamButtonContent,
  TeamButton,
  InputContent,
  InputNickname,
  Enter
} from './styled'
import {
  a_hanwha,
  a_samsung,
  b_hanwha,
  b_samsung,
  c_hanwha,
  c_samsung,
  d_hanwha,
  d_samsung,
} from '@/images/characters'
import {
  arrow_left,
  arrow_right,
  enter,
} from '@/images/etc'
import { useHistory } from "react-router"

const CharacterSelector = () => {

  const [character, setCharacter] = useState('a');
  const [team, setTeam] = useState('a');
  const [name, setName] = useState('');
  const history = useHistory();

  const onClickRight = () => {
    switch (character) {
      case 'a': setCharacter('b'); break;
      case 'b': setCharacter('c'); break;
      case 'c': setCharacter('d'); break;
      case 'd': setCharacter('a'); break;
      default: break;
    }
  }

  const onClickLeft = () => {
    switch (character) {
      case 'a': setCharacter('d'); break;
      case 'b': setCharacter('a'); break;
      case 'c': setCharacter('b'); break;
      case 'd': setCharacter('c'); break;
      default: break;
    }
  }

  const onClickLTeam = () => setTeam('a')
  const onClickRTeam = () => setTeam('b')

  const viewCharacter = () => {
    switch (character) {
      case 'a': {
        if (team === 'a')
          return a_hanwha
        else
          return a_samsung
      }
      case 'b': {
        if (team === 'a')
          return b_hanwha
        else
          return b_samsung
      }
      case 'c': {
        if (team === 'a')
          return c_hanwha
        else
          return c_samsung
      }
      case 'd': {
        if (team === 'a')
          return d_hanwha
        else
          return d_samsung
      }
      default:
          return a_hanwha
    }
  }

  const writeName = (e) => {setName(e.target.value); console.log(name)}
  const join = () => history.push('./main')

  return(
    <CharacterContainer>
      select your character
      <CharacterContent>
        <Arrow src={arrow_left} onClick={onClickLeft} />
        <CharacterFrame>
          <Character src={viewCharacter()} />
        </CharacterFrame>
        <Arrow src={arrow_right} onClick={onClickRight} />
      </CharacterContent>
      <TeamButtonContent>
        <TeamButton team='Hanwha' onClick={onClickLTeam} >
          Hanwha
        </TeamButton>
        <TeamButton tema='Samsung' onClick={onClickRTeam} >
          Samsung
        </TeamButton>
      </TeamButtonContent>
      <InputContent>
        <InputNickname placeholder="write your nickname..." onChange={writeName}/>
        <Enter src={enter} onClick={join} />
      </InputContent>
    </CharacterContainer>
  )
}

export default CharacterSelector