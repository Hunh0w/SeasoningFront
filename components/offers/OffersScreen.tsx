import React, { useState } from 'react';
import { StyleSheet, View, Text, TextStyle } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Button, Divider, IconButton, Searchbar, TextInput, TouchableRipple } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

interface Offer {
    poste: string
    startdate?: Date
    enddate?: Date
    category: string
    company: string
}

export default function OffersScreen() {

    const [range, setRange] = React.useState<any>({ startDate: undefined, endDate: undefined });
    const [keywords, setKeywords] = useState("");
    const [datePickerOpen, setDatePickerOpen] = React.useState(false);


    const onDismiss = React.useCallback(() => {
        setDatePickerOpen(false);
      }, [setDatePickerOpen]);
    
     const onConfirm = React.useCallback(({ startDate, endDate }) => {
            setDatePickerOpen(false);
            setRange({ startDate, endDate });
        },
        [setDatePickerOpen, setRange]
    );

    const dateToString = (date: Date) => {
        return date.toLocaleDateString("fr-FR");
    }

    const onTouchOffer = (offer: Offer) => {
        //TODO
    }

    const startDateString = range.startDate == undefined ? "?" : dateToString(range.startDate);
    const endDateString = range.endDate == undefined ? "?" : dateToString(range.endDate);
    const du_au_Style: TextStyle = {
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 5
    };
    const dateStyle: TextStyle = {
        fontSize: 16,
        fontWeight: "bold",
        color: "#009eed"
    }

    const offers: Offer[] = [
        {
            poste: "Serveur",
            category: "Restauration",
            startdate: new Date(),
            company: "KFC"
        },
        {
            poste: "Serveur",
            category: "Restauration",
            startdate: new Date(),
            enddate: new Date(),
            company: "KFC"
        },
        {
            poste: "Super Serveur de la mort qui tue",
            category: "Restauration",
            company: "KFC"
        },
        {
            poste: "Serveur",
            category: "Restauration",
            enddate: new Date(),
            company: "KFC"
        },
        {
            poste: "Serveur",
            category: "Restauration",
            company: "KFC"
        }
    ]

    const offerDateStyle: TextStyle = {
        fontSize: 13,
        marginVertical: 5
    }

    return (
        <GestureHandlerRootView>
            <ScrollView contentContainerStyle={{display: "flex", alignItems: "center"}}>
                <View style={{width: "80%", marginTop: 50, borderRadius: 10, borderColor: "black", borderWidth: 3, borderStyle: "solid"}}>
                    <Searchbar
                        mode="view"
                        placeholder="Recherche"
                        onChangeText={setKeywords}
                        value={keywords}
                        style={{borderBottomColor: "black", borderBottomWidth: 2, backgroundColor: "rgba(0,0,0,0)"}}
                        showDivider={false}
                        loading={false}
                    />
                    <View style={{
                        display: "flex", flexDirection: "row", alignItems: "center",
                        borderBottomColor: "black", borderBottomWidth: 2
                    }}>
                        <IconButton 
                            icon={'calendar'}
                            onPress={() => setDatePickerOpen(true)}
                        />
                        <Text style={du_au_Style}>du:</Text>
                        <Text style={dateStyle}>{startDateString}</Text>
                        <Text style={du_au_Style}>au:</Text>
                        <Text style={dateStyle}>{endDateString}</Text>
                    </View>
                    <Button labelStyle={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "black",
                        marginVertical: 15
                    }}>
                        Rechercher
                    </Button>
                </View>
                <Divider style={{marginTop: 50}} />
                <Text style={{marginBottom: 30, marginTop: 50, fontSize: 18, fontWeight: "bold"}}>Quelques offres peuvent vous intéresser :</Text>
                <View style={{display: "flex", alignItems: "center", marginBottom: 50}}>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
                        {offers.map((offer,i) => {
                            return <View onTouchStart={() => onTouchOffer(offer)} key={i} style={{borderColor: "black", margin: 3, borderWidth: 3, borderRadius: 10, padding: 10}}>
                                <Text style={{fontWeight: "bold", fontSize: 17}}>{offer.poste}</Text>
                                {offer.startdate && offer.enddate &&
                                    <Text style={offerDateStyle}>du {dateToString(offer.startdate)} au {dateToString(offer.enddate)}</Text>
                                }
                                {offer.startdate && !offer.enddate &&
                                    <Text style={offerDateStyle}>commence le {dateToString(offer.startdate)}</Text>
                                }
                                {!offer.startdate && offer.enddate &&
                                    <Text style={offerDateStyle}>termine le {dateToString(offer.enddate)}</Text>
                                }
                                <Text>{offer.category}</Text>
                                <Text>Disponible chez: {offer.company}</Text>
                            </View>
                        })}
                    </View>
                </View>
                <DatePickerModal
                    locale="fr"
                    mode="range"
                    visible={datePickerOpen}
                    onDismiss={onDismiss}
                    startDate={range.startDate}
                    endDate={range.endDate}
                    onConfirm={onConfirm}
                />
            </ScrollView>
        </GestureHandlerRootView>

    )
}