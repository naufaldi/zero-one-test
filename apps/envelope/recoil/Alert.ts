import { atom } from 'recoil';

export type AlertAtomProps = {
  message: string;
  type: 'success' | 'error' | 'warning';
};

export const AlertAtom = atom<AlertAtomProps>({
  key: 'alertAtom',
  default: null,
});
