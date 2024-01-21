import { useStore } from 'shared/store';

/**
 * A hook that returns the sidebar open state and a function to toggle it.
 *
 * The sidebar is open by default on desktop, and closed by default on mobile.
 *
 * @example
 * const ToggleSidebar = () => {
 *     const [open, setOpen] = useSidebarState();
 *     return (
 *         <Button onClick={() => setOpen(!open)}>
 *             {open ? 'Open' : 'Close'}
 *         </Button>
 *     );
 * };
 */
export const useSidebarState = (): useSidebarStateResult => {
    return useStore<boolean>('sidebar.open', false);
};

export type useSidebarStateResult = [boolean, (open: boolean) => void];
