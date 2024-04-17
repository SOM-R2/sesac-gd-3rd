import { createContext } from 'react';

export const ThemeContext = createContext();
// createContext에서 넘겨주는 인자는
// 실제로 해당 context를 사용할 때
// Provider의  value로 넘겨주지 않았을 때
// 또는 value를 찾지 못했을 때 사용하게 될 기본 값
