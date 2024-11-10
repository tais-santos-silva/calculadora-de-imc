import Label from "./components/Label";
import Button from "./components/Button";
import Input from "./components/Input";
import ReferenceTable from "./components/ReferenceTable";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-4 px-48">
      <section id="form">
        <form>
          <div>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input type="text"></Input>
          </div>
          <div className="mt-4">
          <Label htmlFor="height">Altura</Label>
            <Input type="text"></Input>
          </div>
          <Button type="submit"> Calcular </Button>
        </form>
      </section>

      <section id="result" className="py-10 px-4 h-40">
        <p className="text-center text-neutral-400 text-xl">Saiba se está no peso ideal!</p>
      </section>
      <section id="reference-table" className="py-10">
        <ReferenceTable/> 
      </section>
    </main>
  );
}

export default App;
