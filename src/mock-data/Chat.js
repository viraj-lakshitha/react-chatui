export const USER = "user"
export const BOT = "bot"

export const getChatHistory = () => {
    return {
        history: [
            {
                message: "Hello World from User",
                timestamp: "",
                sender: USER,
            },
            {
                message: "Hello World from Bot",
                timestamp: "",
                sender: BOT,
            },
            {
                message: "Message1",
                timestamp: "",
                sender: USER,
            },
            {
                message: "Lorem Ipsum",
                timestamp: "",
                sender: BOT,
            }
        ]
    }
}