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

  const [messages, setMessages] = useState<MessageElement[]>([
    {
      id: 1,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjcA38sOFBO_IO7plyYbBF6zuzuQmKVMt8A&usqp=CAU",
      name: "John Cena",
      lastMessage: "C'est quand que jte pete la gueule ?"
    },
    {
      id: 2,
      avatar: "https://i.guim.co.uk/img/media/5ed54edd5d9d620487c523150e4672e3df43e442/0_197_3000_1800/master/3000.jpg?width=445&dpr=1&s=none",
      name: "Donald Trump",
      lastMessage: "Vote for me pls otherwise your house will be destroyed"
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //TODO API Call to retrieve initial data

    setLoading(false);
  }, []);

  const deleteElement = (element: MessageElement) => {
    //TODO API Call to remove employer
    
    setMessages(messages.filter((obj) => obj.id != element.id));
  }

  return (<>
    {loading && <LoaderScreen message='Loading...' overlay/>}
    {!loading &&
      <GestureHandlerRootView>
        <ScrollView>
          {messages.map((element,i) => {
            return <Drawer key={i} leftItem={{text: 'Delete', background: Colors.red30, onPress: () => deleteElement(element)}}>
              <View bg-white style={{ height: 80, display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Image width={50} height={50} style={{marginHorizontal: 10}} source={{uri: element.avatar}} />
                <View style={{display: "flex", justifyContent: "center"}}>
                  <Text style={{fontWeight: "bold"}}>{element.name}</Text>
                  <Text style={{width: 260}}>{element.lastMessage}</Text>
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
