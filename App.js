import React, { Component } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.valor}
          onValueChange={(valor) => this.setState({ valor: valor })}
          thumbColor="#FF0000"
        />

        <Text style={{ textAlign: "center", fontSize: 50 }}>
          {this.state.valor ? "Ativo" : "Inativo"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
