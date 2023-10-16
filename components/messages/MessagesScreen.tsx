import { useLayoutEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Avatar, Button, Surface, TextInput } from 'react-native-paper';

interface AuthorElement {
    id: number
    name: string
    avatar: string
}

interface MessageElement {
    author: AuthorElement
    message: string
    myself: boolean
}

interface Props {
    navigation: any
    route: any
    contact?: AuthorElement
}

export default function MessagesScreen(props: Props) {
    const { navigation, route} = props;

    if(!route.params.contact)
        return <></>

    const [ newMessage, setNewMessage ] = useState("");
    const scrollViewRef = useRef(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.contact.name
        })
    }, []);

    const [ messages, setMessages ] = useState<MessageElement[]>([
        {
            author: route.params.contact,
            message: "Napoléon Bonaparte, né le 15 août 1769 à Ajaccio et mort le 5 mai 1821 sur l'île de Sainte-Hélène, est un militaire et homme d'État français, premier empereur des Français du 18 mai 1804 au 6 avril 1814 et du 20 mars au 22 juin 1815, sous le nom de Napoléon Ier.Second enfant de Charles Bonaparte et Letizia Ramolino, Napoléon Bonaparte devient en 1793 général dans les armées de la Première République française, née de la Révolution, où il est notamment commandant en chef de l'armée d'Italie puis de l'armée d'Orient. Arrivé au pouvoir en 1799 par le coup d'État du 18 Brumaire, il est Premier consul — consul à vie à partir du 2 août 1802 — jusqu'au 18 mai 1804, date à laquelle l'Empire est proclamé par un sénatus-consulte suivi d'un plébiscite.",
            myself: false
        }
    ]);

    const onSendMessage = () => {
        if(newMessage.length === 0) return;
        const messageElement: MessageElement = {
            author: {
                id: 1,
                name: "Myself",
                avatar: "https://catch-newz.com/images/2023/09/16/the-rock-wwe-smackdown-retour.jpeg"
            },
            message: newMessage,
            myself: true
        }
        setMessages((prevMessages) => [...prevMessages, messageElement]);
        setNewMessage("");
        scrollToEnd();
    }

    const scrollToEnd = () => {
        if(scrollViewRef.current){
            const element: any = scrollViewRef.current;
            //TODO
        }
    }

    return <View style={{display: "flex", justifyContent: "flex-end"}}>
        <ScrollView alwaysBounceVertical={true} ref={scrollViewRef} style={{height: "100%"}}>
            {
                messages.map((element, i) => {
                    return <View key={i} style={{
                        display: "flex",
                        flexDirection: element.myself?"row-reverse":"row",
                        marginTop: 10,
                        justifyContent: "flex-start",
                        marginBottom: messages.length == (i+1) ? 10 : 0
                        }}>
                        <Avatar.Image size={50} source={{uri: element.author.avatar}} style={{marginHorizontal: 5}} />
                        <Surface style={{
                            backgroundColor: element.myself?"#6abcf4":"#b5b5b5",
                            width: "auto", maxWidth: "80%", borderRadius: 5, padding: 10}}
                            elevation={4}>
                            <Text>{element.message}</Text>
                        </Surface>
                    </View>
                })
            }
        </ScrollView>
        <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <TextInput 
                mode={"outlined"} 
                placeholder='Type your message there' 
                style={{width: "100%"}}
                value={newMessage}
                onChangeText={setNewMessage}
                right={
                    <TextInput.Icon icon={"send"} onTouchStart={onSendMessage} />
                }
            />
            
        </View>
        
    </View>
}