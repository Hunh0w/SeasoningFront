import React, { useState } from 'react';
import { StyleSheet, View, Text, TextStyle } from 'react-native';
import { Button, IconButton, Searchbar, TextInput } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

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

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
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
            <DatePickerModal
                locale="fr"
                mode="range"
                visible={datePickerOpen}
                onDismiss={onDismiss}
                startDate={range.startDate}
                endDate={range.endDate}
                onConfirm={onConfirm}
            />
        </View>

    )
}