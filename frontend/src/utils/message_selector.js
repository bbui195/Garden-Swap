

export function selectMessages(state) {
    let messages = Object.values(state.entities.messages);
    messages.sort((a, b) => {
        return new Date(a.time) < new Date(b.time) ? -1: 1;
    })
    messages.forEach((message) => {
        message.time = (new Date(message.time))
            .toLocaleString('en-US');
    });
    return messages;
}