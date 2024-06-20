export interface Dialog {
    title: string;
    description: string;
}

export const dialogs = {
    general: {
        title: "Something went wrong",
        description: "There was an error processing your request."
    },
    deleteTask: {
        title: "Delete Task",
        description: "Are you sure you want to delete this task? This action cannot be undone."
    },
};