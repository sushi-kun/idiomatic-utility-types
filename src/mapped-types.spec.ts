import { testType } from '../utils/test-utils';
import { Omit } from './mapped-types';

/**
 * Fixtures
 */

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };
type NewProps = { age: string; other: string };
type MixedProps = { name: string; setName: (name: string) => void };
type ReadWriteProps = { readonly a: number; b: string };

// @dts-jest:group Omit
describe('mapped types', () => {
  it('Omit', () => {
    // @dts-jest:pass:snap
    testType<Omit<Props, 'age'>>();
    // @dts-jest:pass:snap
    testType<Omit<Props | NewProps, 'age'>>();
  });
});
