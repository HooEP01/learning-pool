import { IconHeart, IconHome, IconInputSearch, IconSettings, IconTank } from "@tabler/icons-react";

export interface Dialog {
    title: string;
    description: string;
}

export const Dialogs: Record<string, Dialog> = {
    general: {
        title: "Something went wrong",
        description: "There was an error processing your request."
    },
    deleteTask: {
        title: "Delete Task",
        description: "Are you sure you want to delete this task? This action cannot be undone."
    },
};

export interface LinkItem {
    name: string;
    icon: any;
    href: string;
}

export const LinkItems: Array<LinkItem> = [
    { name: 'Home', icon: IconHome, href: '/home' },
    { name: 'Tasks', icon: IconTank, href: '/' },
    { name: 'Explore', icon: IconInputSearch, href: '/explore' },
    { name: 'Pools', icon: IconHeart, href: '/pools' },
    { name: 'Settings', icon: IconSettings, href: '/settings' },
];