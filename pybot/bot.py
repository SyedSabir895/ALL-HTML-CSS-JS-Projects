import openai
openai.api_key='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'
def chat_with_gpt(chat_log):
    response = openai.ChatCompletion.create(model='gpt-3.5-turbo',
                                            messages=chat_log
                                          )
    return response.choices[0].message.content.strip()


chat_log = []
# Remembering more posts is more expensive
n_remembered_post = 2


if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['quit', "exit", "bye"]:
            break

        chat_log.append({'role': 'user', 'content': user_input})

        if len(chat_log) > n_remembered_post:
            del chat_log[:len(chat_log)-n_remembered_post]

        response = chat_with_gpt(chat_log)
        print("Chatbot:", response)
        chat_log.append({'role': "assistant", 'content': response})