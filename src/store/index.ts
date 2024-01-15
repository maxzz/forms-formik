import { proxy } from 'valtio';

export type FormState = {
    values: string;
};

export type AppState = {
    formState: FormState;
};

export const appStore = proxy<AppState>({
    formState: {
        values: '',
    }
});
