export type Module = {
    name: string;
    path: string;
    component: () => JSX.Element;
}
