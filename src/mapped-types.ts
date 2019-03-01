/**
 * Omit (complements Pick)
 * @desc From `T` remove a set of properties `K`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type RequiredProps = Omit<Props, 'age'>;
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
