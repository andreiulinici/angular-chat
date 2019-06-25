export interface IConversation {
    id: number,
    message: string,
    name: string,
    subscriberType: subscriberType,
    time: string
}

export enum subscriberType {
    sender,
    receiver
}