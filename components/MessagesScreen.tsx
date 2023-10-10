import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Image, Drawer, View, Text, LoaderScreen } from 'react-native-ui-lib';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface MessageElement {
  id: number,
  avatar: string,
  name: string,
  lastMessage: string
}

export default function MessagesScreen() {

  const [messages, setMessages] = useState<MessageElement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const msgs: MessageElement[] = [];
    for(let i = 0; i < 31; i++){
      msgs.push({
        id: i,
        avatar: "https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png",
        name: "John Cena "+(i+1),
        lastMessage: "C'est quand que jte pete la gueule ?"
      })
    }
    setMessages(msgs);
    setLoading(false);
  }, []);

  const hideElement = (element: MessageElement) => {
    setLoading(true);
    //TODO API Call

    const elements = messages.filter((obj) => obj.id != element.id);

    
    setMessages(elements);
    setLoading(false);
   
  }

  return (<>
    {loading && <LoaderScreen message='Loading...' overlay/>}
    {!loading &&
      <GestureHandlerRootView>
        <ScrollView>
          {messages.map((element,i) => {
            return <Drawer key={i} leftItem={{text: 'Hide', background: Colors.red30, onPress: () => hideElement(element)}}

            >
              <View bg-white style={{ height: 80, display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Image width={50} height={50} style={{marginHorizontal: 10}} source={{uri: element.avatar}} />
                <View style={{display: "flex", justifyContent: "center"}}>
                  <Text style={{fontWeight: "bold"}}>{element.name}</Text>
                  <Text>{element.lastMessage}</Text>
                </View>
              </View>
            </Drawer>
          })}
        </ScrollView>
      </GestureHandlerRootView>
    }
    </>
  );
}

const styles = StyleSheet.create({});
