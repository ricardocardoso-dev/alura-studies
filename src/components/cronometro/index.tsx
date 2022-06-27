import Button from "../button";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { iTarefa } from "../../types/iTarefa";
import { useState } from "react";

interface Props {
    selecionado: iTarefa | undefined
}

export function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    )
}