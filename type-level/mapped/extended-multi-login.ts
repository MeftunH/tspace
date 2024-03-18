interface User {
    name: string;
    age: number;
    address: string;
}

type Nullable<T> = { [K in keyof T]: T[K] | null };
type PartialWithKeysMatching<T, K extends keyof T, V> = Omit<T, K> &
    Partial<Pick<T, KeysMatching<T, V>>>;
type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];
type UserOptional = Optional<User>;
type UserNullable = Nullable<User>;
type UserReadonly = Readonly<User>;
type UserPartialAddress = PartialWithKeysMatching<User, 'address', {
    zip: string;
}>;
const myUser: User = {
    name: 'John',
    age: 30,
    address: '123 Main St, Anytown, CA, 12345',
    d: 0,
    email: ""
};
const userOptional: UserOptional = {
    name: 'John',
    age: 30,
    address: '123 Main St, Anytown, CA, 12345'
};
const userNullable: UserNullable = {
    name: 'John',
    age: null,
    address: '123 Main St, Anytown, CA, 12345',
    email: null
};
const userReadonly: UserReadonly = {
    name: 'John',
    age: 30,
    address: '123 Main St, Anytown, CA, 12345',
    d: 0,
    email: ""
};