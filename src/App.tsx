import { Button } from './components/Button';
import './styles/globals.css';

export function App() {
  return (
    <div className="flex justify-center items-center p-9">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Teste os botões</h1>
        <p className=" text-lg text-zinc-400">
          Interaja com os botões e observe a mudança de aparência e de cursores
        </p>
        <div className="mt-8 flex flex-col gap-5">
          <Button buttonType="PRIMARY" isLoading>
            BOTÃO PRIMÁRIO
          </Button>
          <Button disabled buttonType="SECONDARY">
            BOTÃO SECUNDÁRIO
          </Button>
          <Button buttonType="TERTIARY" isMovable>
            BOTÃO TERCIÁRIO
          </Button>
        </div>
      </div>
    </div>
  );
}
