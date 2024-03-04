import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useState } from "react";
import { View, Text, TextStyle } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Button, Divider, IconButton, Searchbar } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { date } from "yup";

interface Offer {
  poste: string;
  startdate?: Date;
  enddate?: Date;
  category: string;
  company: string;
}

export default function OffersScreen() {
  const [range, setRange] = useState<any>({
    startDate: undefined,
    endDate: undefined,
  });
  const [keywords, setKeywords] = useState("");
  const [datePickerOpen, setDatePickerOpen] = React.useState(false);

  const onDismiss = useCallback(() => {
    setDatePickerOpen(false);
  }, [setDatePickerOpen]);

  const onConfirm = useCallback(
    ({ startDate, endDate }: any) => {
      setDatePickerOpen(false);
      setRange({ startDate, endDate });
    },
    [setDatePickerOpen, setRange]
  );

  const dateToString = (date: Date) => {
    return date.toLocaleDateString("fr-FR");
  };

  const navigation = useNavigation();
  const handleSearch = () => {
    console.warn(keywords, range)
    navigation.navigate({ name: "SearchResults", params: { keywords: keywords, range: range } });
  };
  const onTouchOffer = (offer: Offer) => {};

  const startDateString =
    range.startDate == undefined ? "?" : dateToString(range.startDate);
  const endDateString =
    range.endDate == undefined ? "?" : dateToString(range.endDate);
    
  const du_au_Style: TextStyle = {
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 5,
  };
  const dateStyle: TextStyle = {
    fontSize: 16,
    fontWeight: "bold",
    color: "#009eed",
  };

  const offers: Offer[] = [
    {
      poste: "Serveur 13ans d'exp.",
      category: "Restauration",
      startdate: new Date(),
      company: "KFC",
    },
    {
      poste: "Voleur sac à main",
      category: "Sport",
      startdate: new Date(),
      enddate: new Date(),
      company: "Marseille",
    },
    {
      poste: "Vendeur d'abeilles",
      category: "Animalerie",
      company: "Jean-Etienne",
    },
    {
      poste: "Acteur X",
      category: "Divers",
      enddate: new Date(),
      company: "Twitter",
    },
    {
      poste: "Prof de Maths 7j d'exp.",
      category: "Enseignement",
      company: "UMontpellier",
    },
  ];

  const offerDateStyle: TextStyle = {
    fontSize: 13,
    marginVertical: 5,
  };

  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={{ display: "flex", alignItems: "center" }}
      >
        <View
          style={{
            width: "80%",
            marginTop: 50,
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 3,
            borderStyle: "solid",
          }}
        >
          <Searchbar
            mode="view"
            placeholder="Recherche"
            onChangeText={setKeywords}
            value={keywords}
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 2,
              backgroundColor: "rgba(0,0,0,0)",
            }}
            showDivider={false}
            loading={false}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottomColor: "black",
              borderBottomWidth: 2,
            }}
          >
            <IconButton
              icon={"calendar"}
              onPress={() => setDatePickerOpen(true)}
            />
            <Text style={du_au_Style}>du:</Text>
            <Text style={dateStyle}>{startDateString}</Text>
            <Text style={du_au_Style}>au:</Text>
            <Text style={dateStyle}>{endDateString}</Text>
          </View>
          <Button
            labelStyle={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginVertical: 15,
            }}
            onPress={handleSearch}
          >
            Rechercher
          </Button>
        </View>
        <Divider style={{ marginTop: 50 }} />
        <Text
          style={{
            marginBottom: 30,
            marginTop: 50,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Quelques offres peuvent vous intéresser :
        </Text>
        <ScrollView horizontal>
          <View
            style={{ display: "flex", alignItems: "center", marginBottom: 50 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {offers.map((offer, i) => {
                return (
                  <View
                    onTouchStart={() => onTouchOffer(offer)}
                    key={i}
                    style={{
                      display: "flex",
                      borderColor: "black",
                      margin: 3,
                      borderWidth: 3,
                      borderRadius: 10,
                      padding: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                      {offer.poste}
                    </Text>
                    <Text>{offer.category}</Text>
                    {offer.startdate && offer.enddate && (
                      <Text style={offerDateStyle}>
                        du {dateToString(offer.startdate)} au{" "}
                        {dateToString(offer.enddate)}
                      </Text>
                    )}
                    {offer.startdate && !offer.enddate && (
                      <Text style={offerDateStyle}>
                        commence le {dateToString(offer.startdate)}
                      </Text>
                    )}
                    {!offer.startdate && offer.enddate && (
                      <Text style={offerDateStyle}>
                        termine le {dateToString(offer.enddate)}
                      </Text>
                    )}
                    <Text>
                      Disponible chez:{" "}
                      <Text style={{ fontWeight: "bold", color: "blue" }}>
                        {offer.company}
                      </Text>
                    </Text>
                    <View style={{ flexGrow: 1 }} />
                    <Button mode="text">Postuler</Button>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
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
  );
}
