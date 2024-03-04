import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextStyle } from "react-native";
import { BASE_URL } from "../misc/env";
import { IconButton, Button, Searchbar } from "react-native-paper";

export default function JobSearchResults({ navigation, route }: any) {
  const [offers, setOffers] = useState([
    {
      title: "Job 1",
      company: "Company A",
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      title: "Job 2",
      company: "Company B",
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      title: "Job 3",
      company: "Company C",
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  const [params, setParams] = useState({
    title: "",
    range: { startDate: new Date(), endDate: new Date() },
  });

  useEffect(() => {
    if (route.params.keywords && route.params.range) {
      setParams(route.params);
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/offers/search`, {
          params: {
            title: params.title,
            range: params.range,
          },
        });
        setOffers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const dateToString = (date: Date) => {
    return date.toLocaleDateString("fr-FR");
  };

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

  const offerDateStyle: TextStyle = {
    fontSize: 13,
    marginVertical: 5,
  };

  return (
    <View
      style={{ display: "flex", alignItems: "center" }}
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
          value={params.title}
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
          <IconButton icon={"calendar"} />
          <Text style={du_au_Style}>du:</Text>
          <Text style={dateStyle}>{dateToString(params.range.startDate)}</Text>
          <Text style={du_au_Style}>au:</Text>
          <Text style={dateStyle}>{dateToString(params.range.endDate)}</Text>
        </View>
      </View>
      <Text
        style={{
          marginBottom: 30,
          marginTop: 50,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Résultats de votre recherche :
      </Text>
      <ScrollView horizontal>
        <View
          style={{ display: "flex", alignItems: "center", marginBottom: 50 }}
        >
          <View style={styles.columnContainer}>
            {offers.map((offer, i) => {
              return (
                <View
                  //onTouchStart={() => onTouchOffer(offer)}
                  key={i}
                  style={styles.jobContainer}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    {offer.title}
                  </Text>
                  <Text>{offer.company}</Text>
                  <Text style={offerDateStyle}>
                    du {dateToString(offer.startDate)} au {""}
                    {dateToString(offer.endDate)}
                  </Text>
                  <Text>
                    Disponible chez:
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  resultContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    borderRadius: 8,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resultCompany: {
    fontSize: 16,
    marginBottom: 4,
  },
  resultDate: {
    fontSize: 16,
  },
  columnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  jobContainer: {
    display: "flex",
    borderColor: "black",
    margin: 3,
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    width: "48%", // Adjust the width as needed
  },
});
