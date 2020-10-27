import { ListaDeNotas } from "./components/ListaDeNotas" //caso a exportacao seja default nao precisa das chaves
import { FormularioCadastro } from "./components/FormularioCadastro"
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }

}

export default App;
